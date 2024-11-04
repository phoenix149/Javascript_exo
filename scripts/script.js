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
