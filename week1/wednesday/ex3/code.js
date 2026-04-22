const order = [
  { nom: "Wydad AC", points: 25, buts_pour: 30, buts_contre: 15, matchs_joues: 10 },
  { nom: "Raja CA", points: 25, buts_pour: 28, buts_contre: 14, matchs_joues: 10 },
  { nom: "AS FAR", points: 22, buts_pour: 25, buts_contre: 25, matchs_joues: 10 },
  { nom: "RS Berkane", points: 22, buts_pour: 20, buts_contre: 18, matchs_joues: 10 },
  { nom: "FUS Rabat", points: 18, buts_pour: 15, buts_contre: 20, matchs_joues: 10 },
  { nom: "Hassania Agadir", points: 15, buts_pour: 12, buts_contre: 22, matchs_joues: 10 },
  { nom: "Maghreb de Fès", points: 12, buts_pour: 10, buts_contre: 25, matchs_joues: 10 },
  { nom: "Olympique Safi", points: 8, buts_pour: 8, buts_contre: 8, matchs_joues: 10 }
];
//challenge 2
order.forEach(e=>{console.log(e.buts_pour-e.buts_contre)})
//challenge 3

// let sorted=[...order].sort((a,b)=>{
//   if(a.points==b.points){
//     return b.points -a.points
//   }
//   a.points-b.points})
// console.log(sorted)
// for (let i = 0; i < sorted.length; i++) {
//   let ele = sorted[i];
//   if (ele.points==sorted[i+1].points){
//     if(ele.buts_pour-ele.buts_contre-(sorted[i+1].buts_pour-sorted[i+1].buts_contre)>=0)){
//       let temp=sorted[i+1]
//       sorted[i+1]=ele
//       ele=temp
//     }
//   }
  
// }
let sorted=[...order].sort((a,b)=>{
  if(a.points==b.points){
    return b.points -a.points
  }} )
console.log(sorted);
