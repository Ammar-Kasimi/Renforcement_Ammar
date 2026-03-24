
//Challenge 2

const avis = [
  { pseudo: "PancakeMaster", note: 5, commentaire: "The best fluffy pancake recipe I have ever tried. Absolutely perfect!", date: "2026-03-20" },
  { pseudo: "YoussoufiaChef", note: 1, commentaire: "Completely burned the bottom. The instructions for the heat level are totally wrong.", date: "2026-01-15" },
  { pseudo: "Tarik_Dev", note: 4.5, commentaire: "Great taste, but took longer to prep than stated. Still adding it to my favorites.", date: "2026-03-18" },
  { pseudo: "BaghrirFan", note: 3, commentaire: "It was okay. I think it needs a bit more sugar in the batter.", date: "2025-12-10" },
  { pseudo: "NadiaCooks", note: 5, commentaire: "Amazing! My family loved it. I substituted regular milk for almond milk and it worked perfectly.", date: "2026-02-28" },
  { pseudo: "RabatEats", note: 2.5, commentaire: "Too salty. Double check your measurements before adding the salt.", date: "2025-11-05" },
  { pseudo: "AtlasGourmet", note: 4, commentaire: "Very solid recipe. The texture is exactly what you want.", date: "2026-03-01" },
  { pseudo: "Amine123", note: 3.5, commentaire: "Decent, but I've had better.", date: "2026-01-22" },
  { pseudo: "CasaFoodie", note: 5, commentaire: "10/10 would make again! Paired perfectly with some mint tea.", date: "2026-03-22" },
  { pseudo: "TriggerOn", note: 3, commentaire: "Average recipe. Not bad for a quick breakfast before watching some anime.", date: "2026-02-14" },
  { pseudo: "KitchenDisaster", note: 2, commentaire: "The batter was way too thick. I had to add a lot of extra water just to get it to pour into the pan.", date: "2025-12-30" },
  { pseudo: "SaraBakes", note: 5, commentaire: "Flawless! I will be saving this to my personal recipe hub for future use.", date: "2026-03-10" },
  { pseudo: "ChefZ", note: 5, commentaire: "This is it. The ultimate recipe. I have tried dozens of variations over the years, testing different flours, resting times, and cooking temperatures, but this specific combination of ingredients yields the most consistently exceptional results every single time. The golden-brown crust and the soft, airy interior are simply unmatched. A true culinary masterpiece!", date: "2026-03-24" },
  { pseudo: "MarrakechSpice", note: 4, commentaire: "Really enjoyed this one. Simple and effective.", date: "2026-02-05" },
  { pseudo: "FoodCritic", note: 3, commentaire: "Good base recipe, but requires extra spices to really shine.", date: "2025-11-20" }
];
//challenge1



avg = parseFloat((avis.reduce((avg, n) => avg + n.note, 0) / avis.length).toFixed(1))
console.log(avg);
//challenge2
let notes = [0, 0, 0, 0, 0]
avis.forEach(e => {
  switch (parseInt(e.note)) {
    case 1:
      notes[0]++
      break;
    case 2:
      notes[1]++
      break;
    case 3:
      notes[2]++
      break;
    case 4:
      notes[3]++
      break;
    case 5:
      notes[4]++
      break;

    default:
      break;
  }
})
console.log(`these are the numbers of ratings:${notes[0]} de 1 etoile,${notes[1]} de 2 etoile,${notes[2]} de 3 etoile,${notes[3]} de 4 etoile,${notes[4] } de 5 etoile`);


//challenge3
let pos_avis
let neg_avis

neg_avis=avis.filter(e=>e.note<=2)
pos_avis=avis.filter(e=>e.note>=4)
console.log(neg_avis,"and here is  positive avis",pos_avis);

//challenge4 
let sorted=[...avis].sort((a,b)=> new Date(a.date)- new Date(b.date))
console.log(sorted);

//challenge5
let longeset_comment=avis[0]
let longest;
avis.forEach(e=>{
  if(e.commentaire.length>longeset_comment.commentaire.length)
  {
    longeset_comment=e
  }
})
console.log(longeset_comment);

// challenge 6
console.log(`${avg}/5 base sur ${avis.length} __ ${pos_avis.length} positives ,${neg_avis.length} negatives,et ${avis.length-(neg_avis.length+pos_avis.length)} neutres`);
