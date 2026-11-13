
// VantaMitra static recipe page generator
// Run from the VantaMitra_Git folder using: node generate-recipes.js

const fs = require("node:fs");
const vm = require("node:vm");
const path = require("node:path");

const ROOT = process.cwd();
const DATA_FILE = path.join(ROOT, "recipes-data.js");
const TEMPLATE_FILE = path.join(ROOT, "recipe.html");
const SITE_URL = "https://haritha110226.github.io/vantamitra/";

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, ch => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[ch]));
}

function slugify(value = "") {
  return String(value).trim().toLowerCase().normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function absoluteImage(image = "") {
  try { return new URL(image, SITE_URL).href; }
  catch { return SITE_URL + "images/vantamitra-banner.png"; }
}

function loadRecipes() {
  const source = fs.readFileSync(DATA_FILE, "utf8");
  const context = {};
  vm.runInNewContext(source + "\n;globalThis.__vantamitraRecipes = recipes;", context);
  if (!Array.isArray(context.__vantamitraRecipes)) {
    throw new Error("Could not read recipes array from recipes-data.js.");
  }
  return context.__vantamitraRecipes;
}

function replaceMeta(html, regex, replacement) {
  if (!regex.test(html)) throw new Error("Required metadata tag missing: " + regex);
  return html.replace(regex, replacement);
}

function buildSchema(recipe) {
  const ingredients = recipe.ingredientSections?.length
    ? recipe.ingredientSections.flatMap(section => section.items || [])
    : (recipe.ingredients || []);

  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": String(recipe.title || "").trim(),
    "description": recipe.description || "",
    "image": absoluteImage(recipe.image),
    "author": { "@type": "Organization", "name": "VantaMitra" },
    "recipeCategory": recipe.category || "",
    "recipeCuisine": "Indian",
    "keywords": `${String(recipe.title || "").trim()}, ${recipe.category || ""}, homemade Indian recipes`,
    "recipeIngredient": ingredients,
    "recipeInstructions": (recipe.steps || []).map(step => ({
      "@type": "HowToStep", "text": step
    })),
    "recipeYield": `${recipe.servings || 2} servings`,
    "prepTime": "PT" + (parseInt(recipe.prepTime, 10) || 0) + "M",
    "inLanguage": "en"
  };
}

function makePage(template, recipe, slug) {
  const title = String(recipe.title || "").trim();
  const description = recipe.description || "";
  const canonical = SITE_URL + `recipe-${slug}.html`;
  const image = absoluteImage(recipe.image);
  let html = template;

  html = replaceMeta(html, /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeHtml(title)} Recipe in English &amp; Telugu | VantaMitra – వంటమిత్ర</title>`);
  html = replaceMeta(html, /<meta\s+name="description"[^>]*>/i,
    `<meta name="description" content="${escapeHtml(description)}">`);
  html = replaceMeta(html, /<link\s+rel="canonical"[^>]*>/i,
    `<link rel="canonical" href="${escapeHtml(canonical)}">`);

  html = replaceMeta(html, /<meta\s+property="og:title"[^>]*>/i,
    `<meta property="og:title" content="${escapeHtml(title)} Recipe | VantaMitra">`);
  html = replaceMeta(html, /<meta\s+property="og:description"[^>]*>/i,
    `<meta property="og:description" content="${escapeHtml(description)}">`);
  html = replaceMeta(html, /<meta\s+property="og:image"[^>]*>/i,
    `<meta property="og:image" content="${escapeHtml(image)}">`);
  html = replaceMeta(html, /<meta\s+property="og:url"[^>]*>/i,
    `<meta property="og:url" content="${escapeHtml(canonical)}">`);

  html = replaceMeta(html, /<meta\s+name="twitter:title"[^>]*>/i,
    `<meta name="twitter:title" content="${escapeHtml(title)} Recipe | VantaMitra">`);
  html = replaceMeta(html, /<meta\s+name="twitter:description"[^>]*>/i,
    `<meta name="twitter:description" content="${escapeHtml(description)}">`);
  html = replaceMeta(html, /<meta\s+name="twitter:image"[^>]*>/i,
    `<meta name="twitter:image" content="${escapeHtml(image)}">`);

  html = html.replace(
    /<script\s+src="recipes-data\.js"><\/script>/i,
    `<script>window.staticRecipeId = ${Number(recipe.id)};</script>\n<script src="recipes-data.js"></script>`
  );

  html = html.replace(
    'const id = new URLSearchParams(window.location.search).get("recipe");',
    'const id = String(window.staticRecipeId || new URLSearchParams(window.location.search).get("recipe") || "");'
  );

  const oldBlock = /const canonicalUrl = document\.querySelector\('link\[rel="canonical"\]'\);[\s\S]*?const imageUrl = new URL\(r\.image, window\.location\.href\)\.href;/;
  const newBlock = `const isStaticRecipePage = Boolean(window.staticRecipeId);
const pageUrl = isStaticRecipePage
  ? window.location.origin + window.location.pathname
  : window.location.origin + window.location.pathname + "?recipe=" + r.id;
const canonicalUrl = document.querySelector('link[rel="canonical"]');
if (canonicalUrl) canonicalUrl.setAttribute("href", pageUrl);
const imageUrl = new URL(r.image, window.location.href).href;`;

  if (!oldBlock.test(html)) {
    throw new Error("Could not find canonical/social URL code in recipe.html.");
  }
  html = html.replace(oldBlock, newBlock);

  html = html.replace(
    "  document.head.appendChild(schemaScript);",
    "  if (!window.staticRecipeId) document.head.appendChild(schemaScript);"
  );

  const schemaTag = `<script type="application/ld+json">\n${JSON.stringify(buildSchema(recipe), null, 2)}\n</script>`;
  html = html.replace("</head>", `${schemaTag}\n</head>`);

  return html;
}

function main() {
  if (!fs.existsSync(DATA_FILE) || !fs.existsSync(TEMPLATE_FILE)) {
    throw new Error("Place this file beside recipe.html and recipes-data.js.");
  }

  const recipes = loadRecipes();
  const template = fs.readFileSync(TEMPLATE_FILE, "utf8");
  const usedSlugs = new Set();
  let created = 0;

  for (const recipe of recipes) {
    if (!recipe.id || !recipe.title) {
      console.warn("Skipping a recipe without an ID or title.");
      continue;
    }

    const slug = slugify(recipe.title);
    if (!slug) throw new Error(`Recipe ${recipe.id} has no usable title.`);
    if (usedSlugs.has(slug)) throw new Error(`Duplicate recipe URL slug: ${slug}`);
    usedSlugs.add(slug);

    const filename = `recipe-${slug}.html`;
    fs.writeFileSync(path.join(ROOT, filename), makePage(template, recipe, slug), "utf8");
    console.log(`Created ${filename} (recipe ID ${recipe.id})`);
    created++;
  }

  console.log(`\nDone. Created ${created} static recipe pages.`);
  console.log("Original recipe.html and recipes-data.js were not changed.");
}

try {
  main();
} catch (error) {
  console.error("\nGenerator stopped:", error.message);
  process.exitCode = 1;
}
