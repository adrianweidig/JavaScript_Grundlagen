// Bedingungen in JavaScript

// 1. if-Anweisung:
//    - Eine if-Anweisung führt einen Codeblock aus, wenn eine angegebene Bedingung wahr ist.
//    - Beispiel:

let zahl = 10;

if (zahl > 0) {
    console.log("Die Zahl ist positiv.");
}

// 2. if-else-Anweisung:
//    - Eine if-else-Anweisung führt einen Codeblock aus, wenn eine Bedingung wahr ist, andernfalls wird ein alternativer Codeblock ausgeführt.
//    - Beispiel:

let alter = 20;

if (alter >= 18) {
    console.log("Sie sind erwachsen.");
} else {
    console.log("Sie sind noch minderjährig.");
}

// 3. else-if-Anweisung:
//    - Eine else-if-Anweisung ermöglicht die Überprüfung zusätzlicher Bedingungen, wenn die vorherigen Bedingungen falsch sind.
//    - Beispiel:

let note = 75;

if (note >= 90) {
    console.log("Sehr gut");
} else if (note >= 80) {
    console.log("Gut");
} else if (note >= 70) {
    console.log("Befriedigend");
} else if (note >= 60) {
    console.log("Ausreichend");
} else {
    console.log("Durchgefallen");
}

// 4. switch-Anweisung:
//    - Eine switch-Anweisung ermöglicht die Ausführung verschiedener Aktionen basierend auf verschiedenen Bedingungen.
//    - Beispiel:

let tag = 3;
let wochentag;

switch (tag) {
    case 1:
        wochentag = "Montag";
        break;
    case 2:
        wochentag = "Dienstag";
        break;
    case 3:
        wochentag = "Mittwoch";
        break;
    case 4:
        wochentag = "Donnerstag";
        break;
    case 5:
        wochentag = "Freitag";
        break;
    case 6:
        wochentag = "Samstag";
        break;
    case 7:
        wochentag = "Sonntag";
        break;
    default:
        wochentag = "Ungültiger Tag";
}

console.log("Heute ist " + wochentag + ".");