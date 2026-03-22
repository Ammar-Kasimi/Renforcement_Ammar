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

contacts.forEach(e=>{
  console.log(e.nom,e.adresse.ville);
  
})