//Exercice 1
// var msg = ("Chaîne de caractère");
// console.log(msg);

// console.log("<br>");
// console.log("<br>");

//Exercice 2
// var partOne = "Hello ";
// var partTwo = "World";
// console.log(partOne + partTwo);

// console.log("<br>");
// console.log("<br>");

//Exercice 3
// var firstname = "Julien";
// var age = 24;
// var city = "Havre";
// console.log("Je m'appelle " + firstname + ", j'ai " + age + " ans et j'habite au " + city + ".");

// console.log("<br>");
// console.log("<br>");

//Exercice 4
// var nom = window.prompt("Quel est votre nom ?");
// var prenom = window.prompt("Quel est votre prénom ?");
// var age = window.prompt("Quel est votre âge ?");
// var mail = window.prompt("Quel est votre adresse mail ?");
// alert("Nom : " + nom + "\n" + "Prénom : " + prenom + "\n" + "Âge : " + age + "\n" + "Mail : " + mail)

//Exercice 5 (deux façons d'annoncer le nombre)
// var premiernombre = Number(prompt("Très bien " + firstname + " ! Nous allons maintenant vous apprendre à additionner deux nombres entre eux." + "\n" + "Entrez-donc un premier nombre :"));
// var deuxiemenombre = +prompt("Entrez-en un second :");
// var resultat = premiernombre + deuxiemenombre
// alert(premiernombre + " + " + deuxiemenombre + " = " + resultat)

//Exercice 6
// var age2 = window.prompt("Entrez votre âge")
//     if (age2 >=18){
//     alert("L'utilisateur est majeur !")
// }else{
//     alert("L'utilisateur est mineur !")
// }

//Exercice 7
// let age2 = +prompt("Entrez votre âge")
// document.write(age2)
// document.write("<br>")
// document.write (Number.isInteger(age2))
// document.write("<br>")
//     if (age2=true){
//     document.write("c'est un nombre entier")
//     }else if (age2=false){
//     document.write("ce n'est pas un nombre entier")
//     }

    let i=1, n=100
while (i<n){
    document.write(i);
    i += 1;
}
document.write(i)