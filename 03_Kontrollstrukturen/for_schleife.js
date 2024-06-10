// for-Schleife in JavaScript

// 1. Einfache for-Schleife:
//    - Die einfache for-Schleife wird verwendet, um über eine bestimmte Anzahl von Iterationen zu iterieren.
//    - Beispiel:

for (let i = 0; i < 5; i++) {
    console.log("Iteration " + (i + 1));
}

// 2. Iteration über ein Array mit for-Schleife:
//    - Die for-Schleife kann verwendet werden, um über die Elemente eines Arrays zu iterieren.
//    - Beispiel:

let namen = ["Alice", "Bob", "Charlie", "David"];

for (let i = 0; i < namen.length; i++) {
    console.log("Hallo, " + namen[i] + "!");
}

// 3. Verwendung von continue in einer for-Schleife:
//    - Das Schlüsselwort "continue" überspringt die aktuelle Iteration und fährt mit der nächsten Iteration fort.
//    - Beispiel:

for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue; // Überspringe die Iteration, wenn i gleich 3 ist.
    }
    console.log("Wert von i:", i);
}

// 4. Verwendung von break in einer for-Schleife:
//    - Das Schlüsselwort "break" beendet die Schleife vorzeitig.
//    - Beispiel:

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Beende die Schleife, wenn i gleich 5 ist.
    }
    console.log("Wert von i:", i);
}

// 5. Iteration über Objekteigenschaften mit for-in-Schleife:
//    - Die for-in-Schleife wird verwendet, um über die Eigenschaften eines Objekts zu iterieren.
//    - Beispiel:

let auto = {
    marke: "Toyota",
    modell: "Camry",
    farbe: "Blau"
};

for (let eigenschaft in auto) {
    console.log(eigenschaft + ": " + auto[eigenschaft]);
}

// Beispiel-Ende
