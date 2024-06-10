// Steuerung von Schleifen in JavaScript

// 1. break-Anweisung:
//    - Die "break"-Anweisung beendet eine Schleife vorzeitig.
//    - Beispiel:

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break; // Beendet die Schleife, wenn i gleich 3 ist.
    }
    console.log("Wert von i:", i);
}

// 2. continue-Anweisung:
//    - Die "continue"-Anweisung überspringt die aktuelle Iteration einer Schleife und fährt mit der nächsten fort.
//    - Beispiel:

for (let j = 0; j < 5; j++) {
    if (j === 2) {
        continue; // Überspringt die Iteration, wenn j gleich 2 ist.
    }
    console.log("Wert von j:", j);
}

// 3. Bezeichner für Schleifen:
//    - Du kannst Schleifen mit Bezeichnern versehen und mit "break" oder "continue" eine bestimmte Schleife ansprechen.
//    - Beispiel:

outerLoop: for (let k = 0; k < 3; k++) {
    innerLoop: for (let l = 0; l < 3; l++) {
        if (k === 1 && l === 1) {
            break outerLoop; // Beendet die äußere Schleife, wenn k und l gleich 1 sind.
        }
        console.log("k:", k, "l:", l);
    }
}
