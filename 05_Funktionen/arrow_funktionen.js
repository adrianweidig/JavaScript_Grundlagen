// Arrow-Funktionen in JavaScript

// 1. Funktionen ohne Parameter:
//    - Arrow-Funktionen können ohne Parameter definiert werden.
//    - Sie sind nützlich für kurze Funktionsausdrücke.
//    - Beispiel:

let greet = () => {
    return "Hallo Welt!";
}

console.log(greet()); // Ausgabe: Hallo Welt!

// 2. Funktionen mit einem Parameter:
//    - Arrow-Funktionen können einen Parameter entgegennehmen, ohne Klammern um den Parameter.
//    - Beispiel:

let greet = name => {
    return "Hallo, " + name + "!";
}

console.log(greet("Bob")); // Ausgabe: Hallo, Bob!

// 3. Funktionen mit Rückgabewerten:
//    - Bei nur einem Ausdruck können Klammern und das "return" weggelassen werden.
//    - Die Funktion gibt automatisch den Wert des Ausdrucks zurück.
//    - Beispiel:

let square = x => x * x;

console.log(square(3)); // Ausgabe: 9
