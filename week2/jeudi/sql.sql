
create table editeurs(
    id int AUTO_INCREMENT PRIMARY KEY,
    nom varchar(30),
    pays varchar(30)
);
CREATE TABLE genres(
    id int AUTO_INCREMENT PRIMARY key ,
    nom varchar(30)
);
create table livres (
id int AUTO_INCREMENT PRIMARY KEY,
    titre varchar(30) unique,
    prix float,
    annee_publication timestamp,
    editeur_id int,
    genre_id int,
    FOREIGN KEY (genre_id) REFERENCES genres(id),
    FOREIGN KEY (editeur_id) REFERENCES editeurs(id)
);
CREATE TABLE ventes(
    id int  AUTO_INCREMENT PRIMARY key,
    livre_id int ,
    client varchar(30),
    quantite int ,
    date_vente timeStamp,
    FOREIGN KEY (livre_id) REFERENCES livre(id)
);

    