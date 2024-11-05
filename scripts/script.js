// let reponse1 = window.prompt("Saisissez votre nom");
// let reponse2 = prompt("Saisissez votre couleur préférée");
// alert("Bonjour " + reponse1 + " votre couleur préférée est le " + reponse2);
// alert("Merci et bienvenue " + reponse1 + "!") 

// let nom = window.prompt("Saisissez votre nom");
// let prenom = prompt("Saisissez votre Prénom");

// let age;

// age = prompt("Saisissez votre âge");

// if (parseInt(age) >= 18) {
//     console.log("Bonjour " + nom + " " + prenom + " Vous êtes majeur");
// }
// else {
//     console.log("Bonjour " + nom + " " + prenom + " Vous êtes mineur");
// }

// // Invite l'utilisateur à entrer sa température, sa tension et son pouls
// let temperature = prompt("Saisisser votre température");
// let tension = prompt("Saisisser votre tension");
// let pouls = prompt("Saisisser votre pouls")

// // si température est supérieur ou égale à 38 affiche le patient a de la fièvre
// if (parseInt(temperature) >= 38) {
//     console.log("Le patient a de la fièvre");
// }
// //sinon affiche "écouduire l'olibrius"
// else {
//     console.log("Éconduire l'olibrius");
// }

// if ((parseInt(temperature) >> 40) || (parseInt(tension) >= 25)) {
//     console.log("Hospitaliser le patient");

// }
// if ((parseInt(temperature) >= 41) || (parseInt(tension) >> 25)) {
//     console.log("Le patient va perdre patience");
// }

// if (((parseInt (temperature) >>42) || (parseInt (tension) >= 25)) && (parseInt(pouls) >= 180)) {
//     console.log("Prévenir la famille");
// }

//demande à l'utilisateur d'entrer un nombre
// let nombre = prompt("Entrer un nombre");

// if (nombre%2==0){
//     console.log("Le nombre que vous avez entré est paire");
// }
// else {
//     console.log("Le nombre que vous avez entré est impair");
// }

// let annee_Naissance = prompt("entrez votre année de naissance");
// let annee_Actuelle = 2024;
// let age = annee_Actuelle - annee_Naissance;

// if ((age) >=18) {
//     console.log("Vous êtes Majeur félicitation");
// }
// else {
//     console.log("Vous êtes mineur");
// }
//Je déclare 4 variables 3 saisie par un prompt et la quatrième qui sera le résultat


//Exercice 3 :
// let saisie_Nombre1 = parseFloat(prompt("Saisissez un premier nombre"));
// let saisie_Operateur = prompt("Saisissez l'opérateur + - * /");
// let saisie_Nombre2 = parseFloat(prompt("Saisissez un deuxième nombre"));
// let resultat = 0;



// switch (saisie_Operateur) {

// //dans le cas où l'Opérateur entré est un + affiche le résultat qui sera le premier nombre + le deuxième nombre
//     case "+":
//         resultat = saisie_Nombre1 + saisie_Nombre2;
//         alert("Le résultat est :" + resultat);
//         break;
// //dans le cas où l'Opérateur entré est un - affiche le résultat qui sera le premier nombre - le deuxième nombre
//     case "-":
//         resultat = saisie_Nombre1 - saisie_Nombre2;
//         alert("Le résultat est :" + resultat);
//         break;
// //dans le cas où l'Opérateur entré est un + affiche le résultat qui sera le premier nombre + le deuxième nombre
//     case "*":
//         resultat = saisie_Nombre1 * saisie_Nombre2;
//         alert("Le résultat est :" + resultat);
//         break;
// //dans le cas où l'Opérateur entré est un / affiche le résultat qui sera le premier nombre / le deuxième nombre
//     case "/":
// //Si le deuxième nombre est 0 affiche impossible de diviser par 0         
//         if (saisie_Nombre2 == 0) {
//             alert("Impossible de diviser par 0");
//         }
//         else {
//             resultat = saisie_Nombre1 / saisie_Nombre2;
//             alert("Le résultat est :" + resultat);
//             break;
//         }
//     default:
//         alert("Opérateur inconnu");
// }

// Exercice 4 :

// //Je déclare 6 variables 
// let prix_Unitaire = parseFloat(prompt("Saisisser le prix unitaire du produit"));
// let quantite = parseInt(prompt("Saisisser la quantité déirée"));
// let tot = prix_Unitaire * quantite;
// let fd_Port;
// let pap;
// let remise;

// //Si tot est supérieur à 500 alors frais de port est égale à 0
// if (tot > 500) {
//     fd_Port = 0;
// }
// //Sinon frais de port = tot * 0.02 pour que les frais de port corespondent à 2% du tot toutefois si ça donne des frais de port inférieur à 6 alors frais de port = 6
// else {
//     fd_Port = tot * 0.02;
//     if (fd_Port > 6) {
//         fd_Port = 6
//     }
// }
// //Switch pour calculer la remise
// switch (remise){
//     case tot < 100 :
//         remise = 0;
//         break;
//     case tot >=100 && tot <=200 :
//         remise = tot * 0.05;
//         break;
//     default :
//     remise = tot * 0,10;          

// }
// //Le prix à payer = tot - remise + frais de port
// pap =  parseFloat(tot - remise + fd_Port);

// //Affiche le prix à payer après avoir effectué les calculs. 
// alert("Le prix à payer est de "+ pap + "€");

// // Exercice 1 Boucles :

// //Je déclare 3 variables
// let sprenom;
// let iNb=1; 
// let liste = "";

// // Tant que sprénom est différent de "" effectue cette boucle 
// while (sprenom!="")
// {
// sprenom = (prompt("Saisir un prénom, saisie numéro "+iNb));
// liste +=  "/" + sprenom;
// iNb ++;
// }
// console.log((iNb-2) + liste);

// Exercice 2-3 Boucles :

let iN = parseInt(prompt("Saisir un nombre entier"))
let iNb = 0;
// A partir de l'exercice 3
let iSnbe = 0;
let i_Anb = 0;

while (iNb < iN) {
    console.log(iNb);
    iNb++;
     }
iSnbe = ((iNb-1) * iN) / 2;
console.log("la somme des entiers inférieur au nombre que vous avez saisi est de : " + iSnbe);
