const contacts = [
  {
    nom: "Youssef Alaoui",
    entreprise: "TechWeb",
    email: "youssef.a@techweb.ma",
    telephone: "0611223344",
    ville: "Casablanca",
    adresse: {
      rue: "10 Boulevard Anfa",
      code_postal: "20000",
      ville: "Casablanca",
      pays: "Maroc"
    }
  },
  {
    nom: "Fatima Zahra",
    entreprise: "TechWeb",
    email: "fatima.z@techweb.ma",
    telephone: "0622334455",
    ville: "Casablanca",
    adresse: {
      rue: "45 Rue Zerktouni",
      code_postal: "20100",
      ville: "Casablanca",
      pays: "Maroc"
    }
  },
  {
    nom: "Karim Mansour",
    entreprise: "DevSolutions",
    email: "k.mansour@devsolutions.ma",
    telephone: "0633445566",
    ville: "Rabat",
    adresse: {
      rue: "12 Avenue Hassan II",
      code_postal: "10000",
      ville: "Rabat",
      pays: "Maroc"
    }
  },
  {
    nom: "Sara Bennani",
    entreprise: "DataCorp",
    email: "sara.b@datacorp.ma",
    telephone: "0644556677",
    ville: "Marrakech",
    adresse: {
      rue: "8 Avenue Guéliz",
      code_postal: "40000",
      ville: "Marrakech",
      pays: "Maroc"
    }
  },
  {
    nom: "Amine Tazi",
    entreprise: "DevSolutions",
    email: "amine.t@devsolutions.ma",
    telephone: "0655667788",
    ville: "Rabat",
    adresse: {
      rue: "22 Rue Agdal",
      code_postal: "10090",
      ville: "Rabat",
      pays: "Maroc"
    }
  },
  {
    nom: "Leila Chraibi",
    entreprise: "EcomStart",
    email: "leila.c@ecomstart.ma",
    telephone: "0666778899",
    ville: "Casablanca",
    adresse: {
      rue: "5 Route de Nouasseur",
      code_postal: "20200",
      ville: "Casablanca",
      pays: "Maroc"
    }
  }
];
//challenge 2
contacts.forEach(e=>{
  console.log(e.nom,e.adresse.ville);
  
})
//challenge3
let contacts2=Object.groupBy(contacts,e=>e.adresse.ville)
console.log(contacts2);
//challenge4
function search_contacts(ent){
  let conts=contacts.filter(e=>e.entreprise==ent)
  if(conts){
  return conts
  }
  else{
    return "search failed"
  }

}
console.log(search_contacts("TechWeb"));
//challenge 5

function modify_address(obj,rue,code,ville,pays){
  obj.adresse={
    rue,
    code_postal:code,
    ville,
    pays
  }
  
  return obj
}
 modify_address(contacts[3],'7ay lfat7','7799','azrou','maroc')
console.log(contacts[3]);

//challenge 6 
num=1;
contacts.forEach(e=>{
  e.last_contact=new Date(`2026-02-1${num+6}`)
  num++
})
contacts.forEach(element => {
  console.log(element);
  
});

function show_non_contacted(){
  let now=new Date()
  return contacts.filter(e=>now- e.last_contact>30*3600*24*1000)
}
console.log(show_non_contacted());

 
