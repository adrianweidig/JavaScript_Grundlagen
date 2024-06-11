// Allgemeine Funktionen in JavaScript

// 1. Funktionen ohne Parameter:
//    - Funktionen können ohne Parameter definiert werden.
//    - Sie führen eine Reihe von Anweisungen aus, ohne von externen Werten abhängig zu sein.
//    - Beispiel:

function greet() {
    return "Hallo Welt!";
}

console.log(greet()); // Ausgabe: Hallo Welt!

// 2. Funktionen mit Parametern:
//    - Funktionen können Parameter entgegennehmen, um mit externen Werten zu arbeiten.
//    - Diese Parameter können innerhalb der Funktion verwendet werden.
//    - Beispiel:

function greet(name) {
    return "Hallo, " + name + "!";
}

console.log(greet("Alice")); // Ausgabe: Hallo, Alice!

// 3. Funktionen mit Rückgabewerten:
//    - Funktionen können einen Wert zurückgeben, der von außen verwendet werden kann.
//    - Dies ermöglicht die Wiederverwendung von Funktionen und die Modulare Programmierung.
//    - Beispiel:

function square(x) {
    return x * x;
}

let result = square(5);
console.log("Das Quadrat von 5 ist:", result); // Ausgabe: Das Quadrat von 5 ist: 25


// 4. Funktionen mit variabler Parameterliste:
//    - Funktionen können eine variable Anzahl von Parametern entgegennehmen, indem sie den Rest-Operator (...) verwenden.
//    - Dies ist nützlich, wenn die Anzahl der Argumente nicht im Voraus bekannt ist.
//    - Beispiel:

// Verwendungszweck: Funktionen mit variabler Parameterliste sind nützlich, wenn man mit einer unbekannten Anzahl
// von Argumenten arbeiten muss, wie z.B. bei mathematischen Operationen oder beim Zusammenfügen von Texten.

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("Die Summe ist:", sum(1, 2, 3)); // Ausgabe: Die Summe ist: 6
console.log("Die Summe ist:", sum(5, 10, 15, 20)); // Ausgabe: Die Summe ist: 50

