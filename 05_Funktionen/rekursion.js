// Rekursion in JavaScript

// 1. Rekursive Funktionen:
//    - Rekursion ist ein Konzept, bei dem eine Funktion sich selbst aufruft.
//    - Es ist nützlich für Probleme, die in kleinere Versionen desselben Problems aufgeteilt werden können.
//    - Beispiel:

function countdown(n) {
    if (n <= 0) {
        console.log("Fertig!");
    } else {
        console.log(n);
        countdown(n - 1); // Aufruf der Funktion mit n - 1
    }
}

countdown(5); // Ausgabe: 5, 4, 3, 2, 1, Fertig!
