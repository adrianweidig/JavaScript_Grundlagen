// while-Schleifen in JavaScript

// Die while-Schleife führt eine Anweisungsfolge aus, solange eine angegebene Bedingung wahr ist.

// Syntax:
// while (bedingung) {
//     anweisungen;
// }

// Beispiel 1: Einfache while-Schleife
let i = 0;
while (i < 5) {
    console.log("Wert von i:", i);
    i++; // Inkrementiere den Zähler i
}

// Beispiel 2: Verwendung von while-Schleife zur Eingabeüberprüfung
let benutzerEingabe;
while (!benutzerEingabe || benutzerEingabe.trim() === "") {
    benutzerEingabe = prompt("Bitte gib einen Wert ein:");
}
console.log("Benutzereingabe:", benutzerEingabe);

// Beispiel 3: Endlosschleife mit break-Anweisung
let zahl = 1;
while (true) {
    console.log("Zahl:", zahl);
    zahl++;
    if (zahl > 3) {
        break; // Beende die Schleife, wenn zahl größer als 3 ist
    }
}

// Beispiel 4: Verwendung einer while-Schleife zur Iteration über ein Array
let namenArray = ["Alice", "Bob", "Charlie", "David"];
let index = 0;
while (index < namenArray.length) {
    console.log("Name:", namenArray[index]);
    index++;
}