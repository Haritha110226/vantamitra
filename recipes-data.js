const recipes = [
{
 id:1, category:"Breakfast", time:"20 min", level:"Easy",
prepTime:"5 min", servings:2,
 title:"Soft Vegetable Upma", teTitle:"మెత్తని కూరగాయల ఉప్మా",
 description:"A comforting breakfast made with roasted semolina and vegetables.",
 teDescription:"రవ్వ, కూరగాయలతో చేసే రుచికరమైన అల్పాహారం.",
image:"images/vegetable-upma.png",
 ingredients:["1 cup semolina (rava)","2½ cups water","1 small onion, chopped","½ cup mixed vegetables","1 green chilli","1 tsp mustard seeds","1 tbsp oil or ghee","Salt to taste"],
 teIngredients:["1 కప్పు రవ్వ","2½ కప్పుల నీరు","1 చిన్న ఉల్లిపాయ","½ కప్పు మిశ్రమ కూరగాయలు","1 పచ్చిమిర్చి","1 టీ స్పూన్ ఆవాలు","1 టేబుల్ స్పూన్ నూనె లేదా నెయ్యి","తగినంత ఉప్పు"],
 steps:["Dry roast the rava on low heat for 4–5 minutes. Keep it aside.","Heat oil in a pan. Add mustard seeds and let them splutter.","Add onion, green chilli and vegetables. Cook for 3–4 minutes.","Add water and salt. Bring it to a boil.","Slowly add roasted rava while stirring continuously.","Cover and cook on low heat for 3 minutes. Switch off when soft and fluffy."],
 teSteps:["రవ్వను తక్కువ మంటపై 4–5 నిమిషాలు వేయించి పక్కన పెట్టండి.","బాణలిలో నూనె వేసి ఆవాలు చిటపటలాడే వరకు వేయించండి.","ఉల్లిపాయ, పచ్చిమిర్చి, కూరగాయలు వేసి 3–4 నిమిషాలు వేయించండి.","నీరు, ఉప్పు వేసి మరిగించండి.","వేయించిన రవ్వను నెమ్మదిగా కలుపుతూ వేయండి.","మూతపెట్టి తక్కువ మంటపై 3 నిమిషాలు ఉడికించి దింపండి."],
tip:"Keep stirring while adding rava. This prevents lumps. If it looks too dry, add a little hot water.",
teTip:"రవ్వ వేస్తున్నప్పుడు గడ్డలు కట్టకుండా నిరంతరం కలుపుతూ ఉండండి. ఉప్మా మరీ పొడిగా అనిపిస్తే కొద్దిగా వేడి నీరు కలపండి."
},
{
 id:2, category:"Breakfast", time:"15 min", level:"Easy",prepTime:"5 min", servings:2,
 title:"Quick Plain Dosa", teTitle:"సులభమైన దోసె",
 description:"Crispy, golden dosa for a quick and satisfying breakfast.",
 teDescription:"బయట కరకరలాడుతూ లోపల మెత్తగా ఉండే దోసె.",
image:"https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=80",
 ingredients:["2 cups ready-made dosa batter","Oil or ghee","Water, if needed","Chutney or sambar to serve"],
 teIngredients:["2 కప్పుల సిద్ధంగా ఉన్న దోసె పిండి","నూనె లేదా నెయ్యి","అవసరమైతే కొద్దిగా నీరు","చట్నీ లేదా సాంబార్"],
 steps:["Take dosa batter in a bowl. Add a little water if it is very thick.","Heat a flat dosa pan on medium heat.","Sprinkle a few drops of water. If they sizzle, the pan is ready.","Pour one ladle of batter and spread it in a circular motion.","Add a few drops of oil around the edges.","Cook until the bottom turns golden and the edges lift. Fold and serve."],
 teSteps:["దోసె పిండిని గిన్నెలో తీసుకుని చిక్కగా ఉంటే కొద్దిగా నీరు కలపండి.","దోసె పెనం మధ్యస్థ మంటపై వేడి చేయండి.","కొన్ని నీటి చుక్కలు చల్లండి. చిటపటలాడితే పెనం సిద్ధంగా ఉంది.","ఒక గరిటె పిండి పోసి గుండ్రంగా పలుచగా పరచండి.","అంచుల చుట్టూ కొద్దిగా నూనె వేయండి.","కిందిభాగం బంగారు రంగులోకి వచ్చాక మడిచి వడ్డించండి."],
tip:"A very hot pan makes spreading difficult. Let it cool slightly before pouring the next dosa.",
teTip:"పెనం మరీ వేడిగా ఉంటే దోసె పిండిని పరచడం కష్టమవుతుంది. తర్వాత దోసె వేసే ముందు పెనం కొద్దిగా చల్లారనివ్వండి."
},
{
 id:3, category:"Rice", time:"25 min", level:"Easy",prepTime:"2 min", servings:3,
 title:"Everyday Plain Rice", teTitle:"రోజువారీ అన్నం",
 description:"A simple guide to making soft, fluffy rice for everyday meals.",
 teDescription:"రోజూ భోజనానికి మెత్తగా, పొడిపొడిగా ఉండే అన్నం.",
 image:"https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=80",
 ingredients:["1 cup raw rice","2 cups water (adjust for rice variety)","A pinch of salt (optional)"],
 teIngredients:["1 కప్పు బియ్యం","2 కప్పుల నీరు (బియ్యం రకాన్ని బట్టి మార్చండి)","చిటికెడు ఉప్పు (ఐచ్ఛికం)"],
 steps:["Wash rice 2–3 times until the water becomes less cloudy.","Add rice and water to a pot or rice cooker.","For a pot, bring to a boil, then cover and cook on low heat.","Cook for about 12–15 minutes, depending on the rice.","Check that the grains are soft and the water is absorbed.","Rest covered for 5 minutes, then fluff gently with a fork."],
 teSteps:["బియ్యాన్ని 2–3 సార్లు కడగండి.","బియ్యం, నీటిని పాత్రలో లేదా రైస్ కుక్కర్‌లో వేయండి.","పాత్రలో అయితే మరిగిన తర్వాత మూతపెట్టి తక్కువ మంటపై ఉడికించండి.","బియ్యం రకాన్ని బట్టి సుమారు 12–15 నిమిషాలు ఉడికించండి.","బియ్యం మెత్తగా ఉడికిందో, నీరు ఇంకిపోయిందో చూడండి.","5 నిమిషాలు మూతపెట్టి ఉంచి తర్వాత మెల్లగా కలపండి."],
tip:"Water quantity varies by rice variety and age. Follow the packet instructions when available.",
teTip:"బియ్యం రకం, పాతదా కొత్తదా అనే దానిపై నీటి పరిమాణం మారుతుంది. వీలైతే ప్యాకెట్‌పై ఇచ్చిన సూచనలను పాటించండి."
},
{
 id:10, category:"Rice", time:"35–45 min", level:"Easy", prepTime:"30 min soaking", servings:2,
 title:"Homestyle Bagara Rice", teTitle:"ఇంటి స్టైల్ బగారా రైస్",
 description:"Aromatic homemade bagara rice prepared with whole spices, onions, green chillies and fresh herbs.",
 teDescription:"సుగంధ ద్రవ్యాలు, ఉల్లిపాయలు, పచ్చిమిర్చి, తాజా ఆకుకూరలతో చేసే రుచికరమైన ఇంటి స్టైల్ బగారా రైస్.",
 image:"images/bagara-rice.png",
 ingredients:[
   "1 glass basmati or regular rice",
   "3 tbsp oil or ghee",
  "2 inches of cinnamon stick",
   "4 cloves",
   "3 cardamom pods",
   "2 bay leaves",
   "1 tsp shah jeera",
   "1 medium onion, sliced",
   "4 green chillies (adjust to taste)",
   "1 tbsp ginger-garlic paste",
   "1 small handful mint leaves",
   "1 small handful coriander leaves",
   "1 carrot, optional",
   "Salt to taste",
   "2 glasses water"
 ],
 teIngredients:[
   "1 గ్లాసు బాస్మతి లేదా సాధారణ బియ్యం",
   "3 టేబుల్ స్పూన్ల నూనె లేదా నెయ్యి",
  "2 అంగుళాల దాల్చిన చెక్క",
   "4 లవంగాలు",
   "3 యాలకులు",
   "2 బిర్యానీ ఆకులు",
   "1 టీ స్పూన్ షాజీరా",
   "1 మధ్యస్థ ఉల్లిపాయ, సన్నగా తరిగినది",
   "4 పచ్చిమిర్చి (కారం రుచికి తగినట్లు)",
   "1 టేబుల్ స్పూన్ అల్లం వెల్లుల్లి పేస్ట్",
   "1 చిన్న గుప్పెడు పుదీనా ఆకులు",
   "1 చిన్న గుప్పెడు కొత్తిమీర",
   "1 క్యారెట్, ఐచ్ఛికం",
   "తగినంత ఉప్పు",
   "2 గ్లాసుల నీరు"
 ],
 steps:[
   "Wash the rice thoroughly and soak it for 30 minutes. Drain the water before cooking.",
   "Heat oil or ghee in a cooking vessel.",
   "Add cinnamon, cloves, cardamom, bay leaves and shah jeera. Let the spices release their aroma.",
   "Add the sliced onion and sauté until it softens.",
   "Add green chillies and fry gently without burning them.",
   "Add ginger-garlic paste and sauté for about one minute.",
   "Add the optional carrot and mix well.",
   "Add mint leaves and salt. Mix and sauté briefly.",
   "Add the drained rice and gently mix so the grains are coated with the spices.",
   "Pour in 2 glasses of water for 1 glass of rice. Mix gently and check the salt.",
   "Close the lid and cook on medium flame for about 5 minutes.",
   "Reduce the flame to low and cook for another 2–3 minutes, then carefully check the rice.",
   "If the rice is not fully cooked, continue cooking on low flame until the water is absorbed and the grains are tender.",
   "Garnish with fresh coriander leaves. Switch off the stove and let the rice rest, covered, for a few minutes before serving."
 ],
 teSteps:[
   "బియ్యాన్ని బాగా కడిగి 30 నిమిషాలు నానబెట్టండి. వండే ముందు నీటిని వంపేయండి.",
   "వంట పాత్రలో నూనె లేదా నెయ్యి వేడి చేయండి.",
   "దాల్చిన చెక్క, లవంగాలు, యాలకులు, బిర్యానీ ఆకులు, షాజీరా వేసి సువాసన వచ్చే వరకు వేయించండి.",
   "తరిగిన ఉల్లిపాయ వేసి మెత్తబడే వరకు వేయించండి.",
   "పచ్చిమిర్చి వేసి మాడిపోకుండా వేయించండి.",
   "అల్లం వెల్లుల్లి పేస్ట్ వేసి సుమారు ఒక నిమిషం వేయించండి.",
   "క్యారెట్ ఉపయోగిస్తే ఇప్పుడు వేసి కలపండి.",
   "పుదీనా ఆకులు, ఉప్పు వేసి కొద్దిసేపు కలపండి.",
   "నీరు వంపిన బియ్యం వేసి మసాలాలు పట్టేలా మెల్లగా కలపండి.",
   "ఒక గ్లాసు బియ్యానికి రెండు గ్లాసుల నీరు పోసి, ఉప్పు సరిచూసుకోండి.",
   "మూత పెట్టి మీడియం మంటపై సుమారు 5 నిమిషాలు ఉడికించండి.",
   "తర్వాత సిమ్‌లో మరో 2–3 నిమిషాలు ఉంచి బియ్యం ఉడికిందో చూడండి.",
   "బియ్యం పూర్తిగా ఉడకకపోతే నీరు ఇంకిపోయి గింజలు మెత్తబడే వరకు తక్కువ మంటపై ఉడికించండి.",
   "కొత్తిమీరతో అలంకరించి, స్టవ్ ఆఫ్ చేసి కొన్ని నిమిషాలు మూతపెట్టి ఉంచండి."
 ],
 tip:"Use the same glass to measure rice and water. Cooking time may vary depending on the rice variety and vessel. Check the rice before switching off the stove.",
 teTip:"బియ్యం, నీరు కొలవడానికి ఒకే గ్లాసును ఉపయోగించండి. బియ్యం రకం, పాత్రను బట్టి ఉడికే సమయం మారవచ్చు. స్టవ్ ఆఫ్ చేసే ముందు బియ్యం పూర్తిగా ఉడికిందో చూడండి."
},
{
 id:4,
 category:"Curries",
 time:"30 min",
 level:"Easy",
 prepTime:"10 min",
 servings:2,

 title:"VantaMitra Signature Potato Fry",
 teTitle:"వంటమిత్ర ప్రత్యేక ఆలూ ఫ్రై",

 description:"A delicious homemade potato fry prepared with mustard, cumin, curry leaves and fresh coriander using a simple low-flame cooking method.",

 teDescription:"ఆవాలు, జీలకర్ర, కరివేపాకు మరియు తాజా కొత్తిమీరతో తక్కువ మంటపై ఇంటి పద్ధతిలో చేసే రుచికరమైన ఆలూ ఫ్రై.",

 image:"images/potato-fry.png",

 ingredients:[
  "250 g potatoes",
  "1 small onion",
  "½ tsp ginger-garlic paste",
  "2 tsp oil",
  "¼ tsp mustard seeds",
  "¼ tsp cumin seeds",
  "10 curry leaves",
  "¼ tsp turmeric powder",
  "1 tsp chilli powder",
  "Salt as required",
  "1 small bunch fresh coriander"
 ],

 teIngredients:[
  "250 గ్రాముల బంగాళాదుంపలు",
  "1 చిన్న ఉల్లిపాయ",
  "½ టీ స్పూన్ అల్లం వెల్లుల్లి పేస్ట్",
  "2 టీ స్పూన్ల నూనె",
  "¼ టీ స్పూన్ ఆవాలు",
  "¼ టీ స్పూన్ జీలకర్ర",
  "10 కరివేపాకులు",
  "¼ టీ స్పూన్ పసుపు",
  "1 టీ స్పూన్ కారం",
  "తగినంత ఉప్పు",
  "1 చిన్న కట్ట తాజా కొత్తిమీర"
 ],

 steps:[
  "Cut the potatoes into small pieces. Wash them thoroughly and keep them immersed in water.",
  "Chop the onion.",
  "Heat oil in a cooking vessel. Add mustard seeds and cumin seeds.",
  "Add curry leaves and chopped onion. Sauté well.",
  "Add ginger-garlic paste and sauté for 1 minute.",
  "Add potatoes and sauté well for 1–2 minutes.",
  "Cover with a lid and cook for 3 minutes.",
  "Add turmeric powder and chilli powder. Mix well and cook on low flame, stirring carefully to prevent the pan from burning.",
  "Add salt and mix well for 3 minutes.",
  "Cover with a lid and cook for another 3 minutes.",
  "Add freshly chopped coriander leaves and mix for 1 minute.",
  "Cover and rest for 1 minute. Switch off the flame and serve hot with plain rice."
 ],

 teSteps:[
  "బంగాళాదుంపలను చిన్న ముక్కలుగా కోసి, బాగా కడిగి నీటిలో ఉంచండి.",
  "ఉల్లిపాయను చిన్నగా కోసుకోండి.",
  "వంట పాత్రలో నూనె వేడి చేసి ఆవాలు, జీలకర్ర వేయండి.",
  "కరివేపాకు, తరిగిన ఉల్లిపాయ వేసి బాగా వేయించండి.",
  "అల్లం వెల్లుల్లి పేస్ట్ వేసి 1 నిమిషం వేయించండి.",
  "బంగాళాదుంప ముక్కలు వేసి 1–2 నిమిషాలు బాగా వేయించండి.",
  "మూతపెట్టి 3 నిమిషాలు ఉడికించండి.",
  "పసుపు, కారం వేసి బాగా కలపండి. తక్కువ మంటపై, అడుగున మాడకుండా జాగ్రత్తగా కలుపుతూ ఉడికించండి.",
  "ఉప్పు వేసి 3 నిమిషాలు బాగా కలపండి.",
  "మళ్లీ మూతపెట్టి 3 నిమిషాలు ఉడికించండి.",
  "తాజాగా తరిగిన కొత్తిమీర వేసి 1 నిమిషం కలపండి.",
  "మూతపెట్టి 1 నిమిషం ఉంచండి. తర్వాత స్టవ్ ఆపి వేడి వేడి అన్నంతో వడ్డించండి."
 ],

 tip:"Cook on low flame after adding the spice powders and stir carefully to prevent the potatoes from sticking or burning. Enjoy with plain rice!",

 teTip:"మసాలాలు వేసిన తర్వాత తక్కువ మంటపై ఉడికించండి. బంగాళాదుంపలు అడుగున అంటకుండా, మాడకుండా జాగ్రత్తగా కలపండి. వేడి వేడి అన్నంతో తింటే చాలా రుచిగా ఉంటుంది!"
},
{
 id:5, category:"Chutneys", time:"10 min", level:"Easy",prepTime:"5 min", servings:3,
 title:"Coconut Chutney", teTitle:"కొబ్బరి చట్నీ",
 description:"A fresh, creamy South Indian chutney for dosa and idli.",
 teDescription:"ఇడ్లీ, దోసెలకు సరిపోయే తాజా కొబ్బరి చట్నీ.",
image:"images/coconut-chutney.png",
 ingredients:["1 cup fresh grated coconut","2 tbsp roasted gram (putnalu)","1 green chilli","Small piece of ginger","Salt to taste","½ cup water","For tempering: oil, mustard seeds and curry leaves"],
 teIngredients:["1 కప్పు తురిమిన కొబ్బరి","2 టేబుల్ స్పూన్ల పుట్నాలు","1 పచ్చిమిర్చి","చిన్న అల్లం ముక్క","తగినంత ఉప్పు","½ కప్పు నీరు","తాలింపు కోసం నూనె, ఆవాలు, కరివేపాకు"],
 steps:["Add coconut, roasted gram, green chilli, ginger and salt to a mixer jar.","Add a little water and grind to a smooth paste.","Adjust water to get your preferred consistency.","Heat a teaspoon of oil in a small pan.","Add mustard seeds and curry leaves. Let them splutter.","Pour the tempering over the chutney and mix."],
 teSteps:["కొబ్బరి, పుట్నాలు, పచ్చిమిర్చి, అల్లం, ఉప్పు మిక్సీ జార్‌లో వేయండి.","కొద్దిగా నీరు పోసి మెత్తగా రుబ్బండి.","మీకు నచ్చిన చిక్కదనం వచ్చేలా నీరు కలపండి.","చిన్న బాణలిలో ఒక టీ స్పూన్ నూనె వేడి చేయండి.","ఆవాలు, కరివేపాకు వేసి చిటపటలాడించండి.","ఈ తాలింపును చట్నీలో వేసి కలపండి."],
tip:"Add water little by little while grinding. Fresh coconut gives the best flavour.",
teTip:"చట్నీ రుబ్బేటప్పుడు నీటిని కొద్దికొద్దిగా కలపండి. తాజా కొబ్బరితో చేస్తే మంచి రుచి వస్తుంది."
},
{
 id:6, category:"Drinks", time:"5 min", level:"Easy",prepTime:"5 min", servings:2,
 title:"Sweet Lassi", teTitle:"తీపి లస్సీ",
 description:"A cool and creamy yogurt drink for warm afternoons.",
 teDescription:"వేసవి మధ్యాహ్నాలకు చల్లని, రుచికరమైన పెరుగు పానీయం.",
image:"images/sweet-lassi.jpg",
 ingredients:["1 cup fresh plain curd","½ cup chilled water or milk","2–3 tsp sugar (adjust to taste)","A pinch of cardamom powder","Ice cubes (optional)"],
 teIngredients:["1 కప్పు తాజా పెరుగు","½ కప్పు చల్లని నీరు లేదా పాలు","2–3 టీ స్పూన్ల చక్కెర","చిటికెడు యాలకుల పొడి","ఐస్ ముక్కలు (ఐచ్ఛికం)"],
 steps:["Add curd and sugar to a mixer jar.","Add chilled water or milk.","Blend until smooth and lightly frothy.","Add cardamom powder and mix.","Pour into glasses. Add ice if desired and serve immediately."],
 teSteps:["పెరుగు, చక్కెరను మిక్సీ జార్‌లో వేయండి.","చల్లని నీరు లేదా పాలు కలపండి.","మెత్తగా, కొద్దిగా నురుగు వచ్చే వరకు మిక్సీ చేయండి.","యాలకుల పొడి వేసి కలపండి.","గ్లాసుల్లో పోసి కావాలంటే ఐస్ వేసి వెంటనే వడ్డించండి."],
tip:"Use fresh, mildly sour curd for a balanced taste. Adjust sugar to your preference.",
teTip:"మంచి రుచి కోసం తాజా పెరుగు ఉపయోగించండి. మీ అభిరుచికి తగినట్లుగా చక్కెరను కలుపుకోండి."
},
{
 id:7, category:"Breakfast", time:"6 hr + 20 min", level:"Easy",prepTime:"10 min", servings:2,
 title:"Andhra Pesarattu", teTitle:"ఆంధ్ర పెసరట్టు",
 description:"A nutritious green gram dosa, delicious with ginger chutney.",
 teDescription:"పెసరపప్పుతో చేసే పోషకమైన అల్పాహారం. అల్లం చట్నీతో రుచిగా ఉంటుంది.",
image:"https://lh3.googleusercontent.com/pw/AP1GczOhX37vC_Mpl_teJqGpTXbi14N-hPof-EtXLhXOVNNd9iAkP5hvN6QI-2QGduCmo6s8RKrgPLfkBcvxntDsFWANtk4IIwnhxwzf5D8-MQZc7X5pFY8LpT6Mgy6Zy6wq4TPKmq5NjHJdQY1ijlHlcsff=w1331-h998-s-no-gm",
 ingredients:["1 cup whole green gram (pesalu)","2 tbsp raw rice","1 green chilli","1 inch ginger","½ tsp cumin seeds","Salt to taste","Oil for cooking"],
 teIngredients:["1 కప్పు పచ్చ పెసలు","2 టేబుల్ స్పూన్ల బియ్యం","1 పచ్చిమిర్చి","1 అంగుళం అల్లం ముక్క","½ టీ స్పూన్ జీలకర్ర","తగినంత ఉప్పు","వేయించడానికి నూనె"],
 steps:["Wash green gram and rice. Soak them in water for 6 hours or overnight.","Drain the water and add green gram, rice, chilli, ginger and cumin to a mixer.","Grind into a smooth batter, adding water as needed.","Add salt and mix well.","Heat a dosa pan and spread one ladle of batter into a thin circle.","Add a little oil and cook both sides until golden. Serve hot."],
 teSteps:["పెసలు, బియ్యం కడిగి 6 గంటలు లేదా రాత్రంతా నానబెట్టండి.","నీరు వంపేసి పెసలు, బియ్యం, మిర్చి, అల్లం, జీలకర్ర మిక్సీలో వేయండి.","అవసరమైనంత నీరు పోసి మెత్తగా రుబ్బండి.","ఉప్పు వేసి బాగా కలపండి.","దోసె పెనం వేడి చేసి ఒక గరిటె పిండి పలుచగా పరచండి.","కొద్దిగా నూనె వేసి రెండు వైపులా బంగారు రంగు వచ్చే వరకు కాల్చండి."],
tip:"For crisp pesarattu, spread the batter thinly on a properly heated pan.",
teTip:"కరకరలాడే పెసరట్టు కోసం వేడైన పెనంపై పిండిని పలుచగా, సమానంగా పరచండి."
},
{
 id:8, category:"Dal", time:"30 min", level:"Easy",prepTime:"10 min", servings:3,
 title:"Andhra Tomato Pappu", teTitle:"ఆంధ్ర టమాట పప్పు",
 description:"A comforting Andhra-style tomato dal that tastes wonderful with hot rice.",
 teDescription:"వేడి అన్నంతో ఎంతో రుచిగా ఉండే ఆంధ్ర టమాట పప్పు.",
image:"images/tomato-pappu.png",
 ingredients:["½ cup toor dal (kandi pappu)","2 medium tomatoes, chopped","1 small onion, chopped","2 green chillies","¼ tsp turmeric","½ tsp chilli powder","½ tsp mustard seeds","½ tsp cumin seeds","Curry leaves","1 tbsp oil or ghee","Salt to taste"],
 teIngredients:["½ కప్పు కందిపప్పు","2 మధ్యస్థ టమాటాలు","1 చిన్న ఉల్లిపాయ","2 పచ్చిమిర్చి","¼ టీ స్పూన్ పసుపు","½ టీ స్పూన్ కారం","½ టీ స్పూన్ ఆవాలు","½ టీ స్పూన్ జీలకర్ర","కరివేపాకు","1 టేబుల్ స్పూన్ నూనె లేదా నెయ్యి","తగినంత ఉప్పు"],
 steps:["Wash the toor dal and add it to a pressure cooker with tomatoes, turmeric and 1½ cups water.","Pressure cook until the dal becomes soft. Allow the pressure to release naturally.","Mash the cooked dal gently.","Heat oil or ghee in a pan. Add mustard seeds and cumin seeds.","Add green chillies, onion and curry leaves. Cook until the onion softens.","Add chilli powder, mashed dal, salt and water as needed.","Simmer for 5 minutes and serve hot with rice."],
 teSteps:["కందిపప్పు కడిగి టమాటాలు, పసుపు, 1½ కప్పుల నీటితో కుక్కర్‌లో వేయండి.","పప్పు మెత్తగా ఉడికే వరకు ప్రెషర్ కుక్ చేయండి. ప్రెషర్ పూర్తిగా తగ్గిన తర్వాత తెరవండి.","ఉడికిన పప్పును మెత్తగా మెదపండి.","బాణలిలో నూనె లేదా నెయ్యి వేడి చేసి ఆవాలు, జీలకర్ర వేయండి.","పచ్చిమిర్చి, ఉల్లిపాయ, కరివేపాకు వేసి వేయించండి.","కారం, మెదిపిన పప్పు, ఉప్పు వేసి అవసరమైనంత నీరు కలపండి.","5 నిమిషాలు మరిగించి వేడి అన్నంతో వడ్డించండి."],
tip:"Adjust the water according to your preferred dal consistency. A little ghee makes it extra tasty.",
teTip:"మీకు నచ్చిన పప్పు చిక్కదనాన్ని బట్టి నీటిని కలపండి. కొద్దిగా నెయ్యి వేస్తే మరింత రుచిగా ఉంటుంది."
},
{
 id:9, category:"Snacks", time:"20 min", level:"Easy",prepTime:"10 min", servings:2,
 title:"Crispy Onion Pakodi", teTitle:"కరకరలాడే ఉల్లిపాయ పకోడీ",
 description:"A crunchy tea-time snack made with onions and gram flour.",
 teDescription:"ఉల్లిపాయలు, శెనగపిండితో చేసే కరకరలాడే సాయంత్రపు చిరుతిండి.",
image:"images/onion-pakodi.png",
 ingredients:["2 medium onions, thinly sliced","¾ cup gram flour (besan)","2 tbsp rice flour","1 green chilli, chopped","½ tsp chilli powder","A pinch of turmeric","A few curry leaves","Salt to taste","Water as needed","Oil for deep frying"],
 teIngredients:["2 మధ్యస్థ ఉల్లిపాయలు, సన్నగా కోసినవి","¾ కప్పు శెనగపిండి","2 టేబుల్ స్పూన్ల బియ్యప్పిండి","1 పచ్చిమిర్చి, తరిగినది","½ టీ స్పూన్ కారం","చిటికెడు పసుపు","కొద్దిగా కరివేపాకు","తగినంత ఉప్పు","అవసరమైనంత నీరు","వేయించడానికి నూనె"],
 steps:["Place sliced onions in a bowl with salt. Mix and rest for 5 minutes.","Add green chilli, curry leaves, chilli powder and turmeric.","Add gram flour and rice flour. Mix well.","Sprinkle a little water only if needed to bind the mixture.","Heat oil in a deep pan on medium heat.","Drop small portions of the mixture carefully into the hot oil.","Fry until golden and crisp. Drain and serve hot."],
 teSteps:["కోసిన ఉల్లిపాయలను గిన్నెలో వేసి ఉప్పు కలిపి 5 నిమిషాలు ఉంచండి.","పచ్చిమిర్చి, కరివేపాకు, కారం, పసుపు వేయండి.","శెనగపిండి, బియ్యప్పిండి వేసి బాగా కలపండి.","మిశ్రమం కలిసేలా అవసరమైతే మాత్రమే కొద్దిగా నీరు చల్లండి.","లోతైన బాణలిలో మధ్యస్థ మంటపై నూనె వేడి చేయండి.","మిశ్రమాన్ని చిన్న చిన్న భాగాలుగా జాగ్రత్తగా వేడి నూనెలో వేయండి.","బంగారు రంగులోకి వచ్చి కరకరలాడే వరకు వేయించి వడ్డించండి."],
 tip:"Do not add too much water. A thick mixture helps make crisp pakodi. Be careful when frying in hot oil.",
teTip:"ఎక్కువ నీరు కలపకండి. చిక్కటి మిశ్రమంతో పకోడీలు కరకరలాడుతాయి. వేడి నూనెలో వేయించేటప్పుడు జాగ్రత్తగా ఉండండి."},
{
  id: 11,
  category: "Sweets",
  time: "25 min",
  level: "Easy",
  prepTime: "5 min",
  servings: 4,

  title: "Traditional Sweet Pongal",
  teTitle: "సాంప్రదాయ తీపి పొంగలి",

  description: "Traditional homemade Sweet Pongal with rice, jaggery, milk, ghee, cashews, raisins and cardamom. Perfect for festivals and Naivedhyam.",
  teDescription: "బియ్యం, బెల్లం, పాలు, నెయ్యి, జీడిపప్పు, ఎండుద్రాక్ష మరియు యాలకులతో చేసే సంప్రదాయ తీపి పొంగలి. పండుగలకు, నైవేద్యానికి అనుకూలం.",

  image: "images/sweet-pongal.png",

  ingredientSections: [
    {
      title: "Main Ingredients",
      teTitle: "ప్రధాన పదార్థాలు",
      items: ["1 cup rice","2 cups milk","2 cups water"],
teItems: ["1 కప్పు బియ్యం","2 కప్పులు పాలు","2 కప్పులు నీళ్లు"]
    },
    {
      title: "Jaggery Syrup",
      teTitle: "బెల్లం పాకం",
    items: ["2 cups jaggery","1 cup water"],
teItems: ["2 కప్పులు బెల్లం","1 కప్పు నీళ్లు"]
    },
    {
      title: "Tempering",
      teTitle: "తాలింపు",
    items: ["10–15 cashew nuts","2 tsp raisins","2–3 tbsp ghee","¼–½ tsp cardamom powder"],
teItems: ["10–15 జీడిపప్పులు","2 టీ స్పూన్లు ఎండుద్రాక్ష","2–3 టేబుల్ స్పూన్లు నెయ్యి","¼–½ టీ స్పూన్ యాలకుల పొడి"]
    }
  ],

  ingredients: [],
  teIngredients: [],

  steps: [
    "Wash the rice thoroughly.",
    "Place a vessel on the stove. Add 2 cups of water and the washed rice.",
    "Boil for 5–8 minutes.",
    "Add 2 cups of boiled milk. Mix well and cook on low flame for 3–4 minutes.",
    "In another vessel, add 2 cups of jaggery and 1 cup of water.",
    "Wait approximately 5 minutes until the jaggery melts completely. Switch off the flame.",
    "Add the jaggery syrup to the rice mixture. Mix well and cook on low flame for 5 minutes.",
    "Switch off the stove.",
    "In a separate pan, heat ghee on low flame. Add split cashews and sauté for about a minute.",
    "Add raisins and cardamom powder. Sauté briefly.",
    "Add the ghee, cashews, raisins and cardamom mixture to the Pongal.",
    "Mix well and enjoy! Serve during festivals or as Naivedhyam."
  ],

  teSteps: [
    "బియ్యాన్ని శుభ్రంగా కడగండి.",
    "స్టవ్‌పై ఒక పాత్ర పెట్టి 2 కప్పుల నీరు, కడిగిన బియ్యం వేయండి.",
    "5–8 నిమిషాలు ఉడికించండి.",
    "2 కప్పుల మరిగించిన పాలు వేసి బాగా కలిపి తక్కువ మంటపై 3–4 నిమిషాలు ఉడికించండి.",
    "మరో పాత్రలో 2 కప్పుల బెల్లం, 1 కప్పు నీరు వేయండి.",
    "సుమారు 5 నిమిషాలు బెల్లం పూర్తిగా కరిగే వరకు ఉంచి స్టవ్ ఆపండి.",
    "బెల్లం పాకాన్ని అన్నం మిశ్రమంలో వేసి బాగా కలిపి తక్కువ మంటపై 5 నిమిషాలు ఉడికించండి.",
    "స్టవ్ ఆపండి.",
    "మరో పాన్‌లో తక్కువ మంటపై నెయ్యి వేడి చేసి చీల్చిన జీడిపప్పు వేసి ఒక నిమిషం వేయించండి.",
    "ఎండుద్రాక్ష, యాలకుల పొడి వేసి కొద్దిసేపు వేయించండి.",
    "ఈ నెయ్యి మిశ్రమాన్ని పొంగలిలో వేయండి.",
    "బాగా కలిపి రుచికరమైన పొంగలిని ఆస్వాదించండి. పండుగలకు, నైవేద్యానికి వడ్డించండి."
  ],

  tip: "Cook on low flame after adding the jaggery syrup. Stir carefully to prevent sticking. Ghee-fried cashews, raisins and cardamom give this Pongal its traditional festive flavour.",
  teTip: "బెల్లం పాకం వేసిన తర్వాత తక్కువ మంటపై ఉడికిస్తూ అడుగున అంటకుండా కలపండి. నెయ్యిలో వేయించిన జీడిపప్పు, ఎండుద్రాక్ష, యాలకులు మంచి పండుగ రుచిని ఇస్తాయి."
}
];