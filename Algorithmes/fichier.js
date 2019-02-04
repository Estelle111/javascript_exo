// VARIABLES
//1) DISEUR DE BONNE AVENTURE
/*var nombrEnfants = 5,
nomHomme = "Karim",
pays = "Brésil",
metier = "web développeuse";

console.log("Vous serez " + metier + " et habiterez au " + pays + ". Vous serez mariée à " + nomHomme + " et aurez " + nombrEnfants + " merveilleux enfants");
*/

//2) CALCULER L'AGE
/*anneeCourante = prompt("En quelle année vivez-vous ?");
console.log(anneeCourante);
anneeNaissance = prompt("Quelle est votre année de naissance ?");
console.log(anneeNaissance);
age = anneeCourante - anneeNaissance;
console.log("Vous avez " + age + " ans")
*/

//3) BIENTOT VIEUX
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

//4) PRIORITES
/*var result = (1 + 2) * 3 + 4 / 2;
etape1 = 3 * 3 + 4 / 2;
etape2 = 9 + 2;
etape3 = 11;
console.log(result);
*/

//LOGIQUE
//1) LANGUES
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

//2) AFFICHAGE DES SCORES
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

//3) METTRE AU PLURIEL
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
//1) CALCULS
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
//1) PAIR ET IMPAIR
/*for (i = 0; i <= 20; i++) {
    if ((i % 2) == 0) {
        console.log(i + " est pair");
    }else if ((i % 2) != 0) {
        console.log(" est impair");
    }
}
*/

//2) MULTIPLICATION TABLES
/*for (i = 0; i <= 10; i++) {
    result = i * 9;
    console.log(i + " * 9 = " + result);
}
*/

//3) ASSIGNER DES GRADES
//VERSION 1
/*grade = function (a, b, c, d) {
    for (i = 0; i <= 100; i++) {
        if (a >= 90) {
            return console.log("Pour " + i + " point(s), vous avez le grade A");
        }else if (b >= 80) {
            return console.log("Pour " + i + " point(s), vous avez le grade B");
        }else if (c >= 70) {
            return console.log("Pour " + i + " point(s), vous avez le grade C");
        }else if (d >= 65) {
            return console.log("Pour " + i + " point(s), vous avez le grade D");
        }else {
            return console.log("Pour " + i + " point(s), vous avez le grade F");
        }
    }
}*/

//VERSION 2
/*for (i = 0; i <= 100; i++) {
    if (i >= 90) {
        console.log("Pour " + i + " point(s), vous avez le grade A");
    }else if (i >= 80) {
        console.log("Pour " + i + " point(s), vous avez le grade B");
    }else if (i >= 70) {
        console.log("Pour " + i + " point(s), vous avez le grade C");
    }else if (i >= 65) {
        console.log("Pour " + i + " point(s), vous avez le grade D");
    }else {
        console.log("Pour " + i + " point(s), vous avez le grade F");
    }
}
*/

//VERSION 3 AVEC AIDE
/*for (i = 0; i <= 100; i++) {
    result = calculGrade(i);
    console.log("Pour " + i + " point(s), vous avez le grade " + result);
    }
    
function calculGrade(score) {
    if (score >= 90) {
        grade = "A";
    }else if (score >= 80) {
        grade = "B";
    }else if (score >= 70) {
        grade = "C";
    }else if (score >= 65) {
        grade = "D";
    }else {
        grade = "F";
    }
    return grade;
}
*/

//VERSION 4 TOUTE SEULE
/*for (i = 0; i <= 100; i++) {
    result = calculGrade(i);
    console.log("Pour " + i + " point(s), vous avez le grade" + result)
}
 
function calculGrade (score) {
    if (score >= 90) {
        grade = "A";
    }else if (score >= 80) {
        grade = "B";
    }else if (score >= 70) {
        grade = "C";
    }else if (score >= 65) {
        grade = "D";
    }else {
        grade = "F";
    }
    return grade;
}
*/

//4) PYRAMIDE
/*var dessin = "";

for (i = 0; i < 5; i++) {
    dessin = dessin + " *";
    console.log(dessin);
}
*/

//TABLEAUX
//0) AFFICHER LES ELEMENTS D'UN TABLEAU
/*nbr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (i = 0; i < nbr.length; i++) {
    console.log(nbr[i]);
}
*/

//1) ADDITION
/*nbr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
total = 0;

for (i = 0; i < nbr.length; i++) {
    total = total + nbr[i];
}
console.log(total);
*/

//2) VOS MEILLEURS CHOIX
/*acteur = ["Cage", "Norton", "Bardem"];

acteur.unshift("");

for (i = 1; i < acteur.length; i++) {
    console.log("Le numéro " + i + " est " + acteur[i]);
}
*/

//2bis) BONUS 
/*acteur = ["Cage", "Norton", "Bardem"];
nombre = ["premier", "deuxième", "troisième"];

acteur.unshift("");
nombre.unshift("");

for (i = 1; i < acteur.length; i++) {
    for (i = 1; i < nombre.length; i++) {
        console.log("Le " + nombre[i] + " est " + acteur[i]);
    }
}
*/

//3) CLONE
/*nintendo = ["Mario", "Luigi", "Peach"];
nintendo.push("Bowser");

console.log(nintendo);
*/