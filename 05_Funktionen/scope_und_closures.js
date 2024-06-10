// Scope und Closures in JavaScript

// 1. Scope (Gültigkeitsbereich):
//    - Der Scope einer Variable bestimmt, wo sie in einem Programm verfügbar ist.
//    - Globale Variablen sind überall im Code sichtbar, während lokale Variablen nur in ihrer Funktion sichtbar sind.
//    - Beispiel:

let globalVariable = "Ich bin global";

function localScope() {
    let lokaleVariable = "Ich bin lokal";
    console.log(globalVariable); // Zugriff auf globale Variable möglich
    console.log(lokaleVariable); // Zugriff auf lokale Variable möglich
}

localScope();
console.log(globalVariable); // Zugriff auf globale Variable möglich
// console.log(lokaleVariable); // Fehler: lokaleVariable is not defined

// 2. Closures:
//    - Closures ermöglichen den Zugriff auf den Scope einer äußeren Funktion innerhalb einer inneren Funktion.
//    - Beispiel:

function outerFunction() {
    let outerVariable = "Ich bin äußerer Scope";

    function innerFunction() {
        console.log(outerVariable); // Zugriff auf outerVariable möglich (Closure)
    }

    return innerFunction;
}

let closure = outerFunction();
closure(); // Ausgabe: Ich bin äußerer Scope
