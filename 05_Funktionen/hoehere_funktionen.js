// Höhere Funktionen in JavaScript

// 1. Höhere Funktionen:
//    - Höhere Funktionen sind Funktionen, die andere Funktionen als Argumente entgegennehmen oder eine Funktion zurückgeben.
//    - Sie ermöglichen eine elegante und expressive Programmierung.
//    - Beispiel:

function applyOperation(x, operation) {
    return operation(x);
}

function double(x) {
    return x * 2;
}

function triple(x) {
    return x * 3;
}

console.log(applyOperation(5, double)); // Ausgabe: 10
console.log(applyOperation(5, triple)); // Ausgabe: 15
