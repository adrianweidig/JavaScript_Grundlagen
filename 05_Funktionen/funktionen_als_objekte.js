// Funktionen als Objekte in JavaScript

// 1. Funktionen sind Objekte:
//    - In JavaScript sind Funktionen spezielle Objekte.
//    - Sie können Eigenschaften und Methoden wie andere Objekte haben.
//    - Beispiel:

function greet(name) {
    return "Hallo, " + name + "!";
}

// Eigenschaft hinzufügen
greet.language = "Deutsch";

// Aufruf der Funktion und Zugriff auf die Eigenschaft
console.log(greet("Welt")); // Ausgabe: Hallo, Welt!
console.log(greet.language); // Ausgabe: Deutsch
