// VARIABLES
//1)
/*var nombrEnfants = 5,
nomHomme = "Karim",
pays = "Brésil",
metier = "web développeuse";

console.log("Vous serez " + metier + " et habiterez au " + pays + ". Vous serez mariée à " + nomHomme + " et aurez " + nombrEnfants + " merveilleux enfants");
*/

//2)
/*anneeCourante = prompt("En quelle année vivez-vous ?");
console.log(anneeCourante);
anneeNaissance = prompt("Quelle est votre année de naissance ?");
console.log(anneeNaissance);
age = anneeCourante - anneeNaissance;
console.log("Vous avez " + age + " ans")
*/

//3)
/*var age = 34,
ageMax = 100,
aliment = "bananes",
nombreAlimentParJour = 2;

    var nombreAnneesAVivre = ageMax - age;
    console.log(nombreAnneesAVivre);
    var nombreJoursAVivre = nombreAnneesAVivre * 360;
    console.log(nombreJoursAVivre);
    var nombreAlimentPourLaVie = nombreJoursAVivre * nombreAlimentParJour;
    console.log(nombreAlimentPourLaVie);
    console.log("Il vous reste " + nombreAnneesAVivre + " ans avant d'atteinde l'âge de " + ageMax + " ans.")
*/

//4)
/*var result = (1 + 2) * 3 + 4 / 2;
etape1 = 3 * 3 + 4 / 2;
etape2 = 9 + 2;
etape3 = 11;
console.log(result);
*/

//LOGIQUE
//1)
/*var fr = "français",
es = "espagnol",
an = "anglais",

answer = prompt("Quelle langue parles-tu ? français, anglais ou espagnol ?");

if (answer == fr) {
    console.log("Bonjour tout le monde");
}else if (answer == es) {
    console.log("Hola mundo");
}else if (answer == an) {
    console.log("Hello world");
}else {
    console.log("Désolée, je ne connais pas cette langue");
} 
*/

//2)
/*
result = prompt("Quel est votre score de 0 à 100 ?")

if (result >= 90 && result <= 100) {
    console.log("Vous avez le rang A");
}else if (result < 90 && result > 50) {
    console.log("Vous avez le rang B");
}else if (result <= 50 && result >= 0) {
    console.log("Vous avez le rang C");
}else {
    console.log("Je suis désolée, je ne connais pas ce score");
}
*/

//3)
/*var sing = " banane",
nbr = 3;
result = "Je possède " + nbr + sing;

if (nbr > 1) {
    console.log(result + "s");
}else {
    console.log(result);
}
*/

//3bis)
/*sing = prompt("Quel est ton aliment préféré ?");
nbr = prompt("Combien en as-tu chez toi ?");
result = "Tu possèdes " + nbr + sing;

if (nbr > 1) {
    console.log(result + "s");
}else {
    console.log(result);
}
*/

//FONCTIONS
//1)
/*add = function (a, b) {
    return a + b;
}
division = function (a, b) {
    return a / b;
}
multiplication = function (a, b) {
    return a * b;
}
percentage = function (a, b) {
    b = b / 100;
    return b * a;
}
speed = function (a, b) {
    c = a / b;
    return c + "km/h";
}

console.log(result = add(100, 2));
console.log(result = division(100, 2));
console.log(result = multiplication(100, 2));
console.log(result = percentage(100, 2));
console.log(result = speed(100, 2));
*/

//BOUCLES
//1)
for (i = 0; i <= 20; i++) {
    if ((i % 2) == 0) {
        console.log(i + " est pair");
    }else if ((i % 2) != 0) {
        console.log(" est impair");
    }
}