// Currying in JavaScript

// 1. Currying:
//    - Currying ist die Technik, eine Funktion mit mehreren Argumenten in eine Kette von Funktionen mit jeweils einem Argument umzuwandeln.
//    - Es ermöglicht die teilweise Anwendung von Funktionen.
//    - Beispiel:

function add(x) {
    return function (y) {
        return x + y;
    };
}

// Teile der Funktion anwenden
let add5 = add(5);

// Vollständige Anwendung der Funktion
console.log(add5(3)); // Ausgabe: 8 (5 + 3)
