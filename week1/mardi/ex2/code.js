
//Challenge 2

let magasins = [
  { mois: "Janvier", chiffre_affaires: 45000, nb_clients: 1200, ville: "Casablanca" },
  { mois: "Février", chiffre_affaires: 38000, nb_clients: 850, ville: "Youssoufia" },
  { mois: "Mars", chiffre_affaires: 52000, nb_clients: 1400, ville: "Marrakech" },
  { mois: "Avril", chiffre_affaires: 48000, nb_clients: 1100, ville: "Rabat" },
  { mois: "Mai", chiffre_affaires: 55000, nb_clients: 1500, ville: "Casablanca" },
  { mois: "Juin", chiffre_affaires: 60000, nb_clients: 1700, ville: "Youssoufia" },
  { mois: "Juillet", chiffre_affaires: 75000, nb_clients: 2200, ville: "Marrakech" },
  { mois: "Août", chiffre_affaires: 82000, nb_clients: 2500, ville: "Rabat" },
  { mois: "Septembre", chiffre_affaires: 41000, nb_clients: 1050, ville: "Casablanca" },
  { mois: "Octobre", chiffre_affaires: 49000, nb_clients: 1300, ville: "Youssoufia" },
  { mois: "Novembre", chiffre_affaires: 35000, nb_clients: 800, ville: "Marrakech" },
  { mois: "Décembre", chiffre_affaires: 95000, nb_clients: 3000, ville: "Rabat" }
];
//challenge1
sum_chiffres = magasins.reduce((sum, x) => sum + x.chiffre_affaires, 0);

//challenge2
avg_mensuelle = magasins.reduce((avg, n) => avg + n.chiffre_affaires,0) / 12
//challenge3
let highest = magasins[0];
magasins.forEach(e => {
  if (e.chiffre_affaires > highest.chiffre_affaires) {
    highest = e
  }
})
console.log(highest.mois);
//challenge4
let lowest = magasins[0];
magasins.forEach(e => {
  if (e.chiffre_affaires < lowest.chiffre_affaires) {
    lowest = e
  }
})
console.log(lowest.mois);

let mags2 = magasins.filter(e => e.chiffre_affaires > 50000);
console.log(mags2);

//challenge6
let mags_city = [];

// mags_city = magasins.map(n => {
//   magasins.forEach(e => {
//     if (n.ville == e.ville) {
//       n.chiffre_affaires += e.chiffre_affaires
//       n.nb_clients += e.nb_clients;

//     } else {
//       mags_city.push({ ville: e.ville, chiffre_affaires: e.chiffre_affaires, nb_clients: e.nb_clients })
//     }
//   })
// })
// console.log(mags_city);


// for (let i = 0; i < magasins.length; i++) {
//   for (let j = i; j < magasins.length; j++) {
//     if (mags_city[j]) {
//       if (mags_city[j].ville == magasins[i].ville) {
//         mags_city[j].chiffre_affaires += magasins.chiffrmagasins_affaires
//         mags_city[j].nb_clients += magasins.nb_clients;
//       }
//       else {
//         mags_city.push({
//           ville: magasins[i].ville, chiffre_affaires: magasins[i].chiffre_affaires, nb_clients: magasins[i].nb_clients
//         })
//       }
//     } else {
//       mags_city.push({
//         ville: magasins[i].ville, chiffre_affaires: magasins[i].chiffre_affaires, nb_clients: magasins[i].nb_clients
//       })
//     }
//   }
// }
// console.log(mags_city);

//challenge 7
let sorted=[...magasins]

sorted=sorted.sort((a,b)=>-a.chiffre_affaires+b.chiffre_affaires)
  console.log(sorted);

sorted=sorted.map(e=>
  e.mois)
  console.log(sorted);
  
//challenge8
console.log(magasins);

mags_reversed=[...magasins].reverse();
for (let i = 1; i < magasins.length; i++) {
  let e = magasins[i];
  console.log(`the difference in revenue from ${magasins[i-1].mois}  to ${e.mois} is ${e.chiffre_affaires-magasins[i-1].chiffre_affaires}$`);
  
}












