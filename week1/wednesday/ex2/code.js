const stock = [
  // Légumes
  { nom: "Oignon", quantite: 8, unite: "kg", prix_unitaire: 5, seuil_alerte: 10, categorie: "légume" },
  { nom: "Tomate", quantite: 15, unite: "kg", prix_unitaire: 4, seuil_alerte: 12, categorie: "légume" },
  { nom: "Carotte", quantite: 4, unite: "kg", prix_unitaire: 3, seuil_alerte: 5, categorie: "légume" },
  
  // Viandes
  { nom: "Boeuf", quantite: 20, unite: "kg", prix_unitaire: 80, seuil_alerte: 15, categorie: "viande" },
  { nom: "Poulet", quantite: 10, unite: "kg", prix_unitaire: 35, seuil_alerte: 15, categorie: "viande" },
  { nom: "Agneau", quantite: 5, unite: "kg", prix_unitaire: 90, seuil_alerte: 10, categorie: "viande" },
  
  // Épices
  { nom: "Cumin", quantite: 0.5, unite: "kg", prix_unitaire: 40, seuil_alerte: 1, categorie: "épice" },
  { nom: "Poivre Noir", quantite: 2, unite: "kg", prix_unitaire: 60, seuil_alerte: 1.5, categorie: "épice" },
  { nom: "Safran", quantite: 0.02, unite: "kg", prix_unitaire: 3000, seuil_alerte: 0.05, categorie: "épice" },
  
  // Boissons
  { nom: "Lait", quantite: 30, unite: "litres", prix_unitaire: 4, seuil_alerte: 20, categorie: "boisson" },
  { nom: "Jus d'orange", quantite: 8, unite: "litres", prix_unitaire: 15, seuil_alerte: 10, categorie: "boisson" },
  { nom: "Thé à la menthe", quantite: 50, unite: "pièces", prix_unitaire: 10, seuil_alerte: 25, categorie: "boisson" }
];

function show(arr) {
  arr.forEach(e => {
    console.log(e);
    
  });
  
}
// challenge 2
show(stock.filter(e=>e.quantite<=e.seuil_alerte));

// challenge 3
console.log("this is the totale",stock.reduce((totale,n)=>totale+n.quantite*n.prix_unitaire,0),"$");

let stock_by_category=[0,0,0,0]
stock.forEach(e=>{
   switch (e.categorie) {
    case "légume":
      stock_by_category[0]+=e.quantite
      break;
    case "viande":
      stock_by_category[1]+=e.quantite
      break;
    case "épice":
      stock_by_category[2]+=e.quantite
      break;
    case "boisson":
      stock_by_category[3]+=e.quantite
      break;
    

    default:
      break;
  }
})
let categories=["légume","viande","épice","boisson"]
for (let i = 0; i < categories.length; i++) {
  console.log(`the ${categories[i]} stock amount is ${stock_by_category[i]}`);
  
}
// let needed_ingrediants=[]
// function save_order(arr) {
//   let existant=true
//   arr.forEach(e => {
//     let ingrediant =stock.find(n=>n.nom==e.name)
//     if(e.amount>= ingrediant.quantite){
//       existant=false
//     }else{
//   needed_ingrediants.push(ingrediant)
//     }
//   });
//   if(existant==true){
//      arr.forEach(e => {
//     let ingrediant =stock.find(e=>e.nom==e.name)
//   ingrediant-=e.amount
//   })}
//   else{
// show(needed_ingrediants)
//   }
//   }
//   save_order([{name:"Tomate",amount:3},{name:"Boeuf",amount:4},{name:"Safran",amount:0.01}])

//Challenge 5

function save_order(arr) {
  let existant = true;
  let needed_ingredients = [];

  arr.forEach(e => {
    let ingredient = stock.find(n => n.nom == e.name);
    if (ingredient && e.amount > ingredient.quantite) {
      existant = false;
      needed_ingredients.push(e.name);
    }
  });

  if (existant) {
    arr.forEach(e => {
      let ingredient = stock.find(n => n.nom == e.name);
      if (ingredient) {
        ingredient.quantite -= e.amount;
      }
    });
    console.log("order made");
  } else {
    console.log("order not made,because of lack of");
    show(needed_ingredients)
  }
}

save_order([{name:"Tomate", amount:33}, {name:"Boeuf", amount:4}, {name:"Safran", amount:0.03}]);


//Challenge 6
let amounts_needed = stock.filter(e => e.quantite < e.seuil_alerte).map(e => ({ 
    nom: e.nom, 
    needed: e.seuil_alerte + (e.seuil_alerte - e.quantite) 
  }));

console.log(amounts_needed);

