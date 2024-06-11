// Einführung in Ganzzahlen in JavaScript

// 1. Was sind Ganzzahlen?
//    - Ganzzahlen sind Zahlen ohne Dezimalstellen.
//    - In JavaScript können Ganzzahlen als Literale oder als Instanzen der Number-Klasse dargestellt werden.
//    - Beispiel:

let intLiteral = 42;
let intObject = new Number(42);

console.log(intLiteral); // Ausgabe: 42
console.log(intObject); // Ausgabe: [Number: 42]

// 2. Arithmetische Operationen mit Ganzzahlen
//    - Grundlegende arithmetische Operationen können mit Ganzzahlen durchgeführt werden.
//    - Beispiel:

let a = 10;
let b = 5;

console.log(a + b); // Ausgabe: 15
console.log(a - b); // Ausgabe: 5
console.log(a * b); // Ausgabe: 50
console.log(a / b); // Ausgabe: 2
console.log(a % b); // Ausgabe: 0

// 3. Besondere Eigenschaften von Ganzzahlen

// 3.1 Maximale und minimale Werte
//    - JavaScript bietet Konstanten für die maximalen und minimalen darstellbaren Werte.
//    - Beispiel:

console.log(Number.MAX_SAFE_INTEGER); // Ausgabe: 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // Ausgabe: -9007199254740991

// 3.2 Überlauf und Unterlauf
//    - Ganzzahlen in JavaScript können bei Überschreitung der sicheren Werte Überlauf- oder Unterlaufprobleme verursachen.
//    - Beispiel:

let overflow = Number.MAX_SAFE_INTEGER + 1;
console.log(overflow); // Ausgabe: 9007199254740992 (kann zu Ungenauigkeiten führen)

let underflow = Number.MIN_SAFE_INTEGER - 1;
console.log(underflow); // Ausgabe: -9007199254740992 (kann zu Ungenauigkeiten führen)

// 3.3 Ganzzahlprüfung
//    - JavaScript bietet Methoden zur Prüfung, ob ein Wert eine Ganzzahl ist.
//    - Beispiel:

console.log(Number.isInteger(42)); // Ausgabe: true
console.log(Number.isInteger(42.5)); // Ausgabe: false

// 4. Methoden der Number-Klasse

// 4.1 Number.prototype.toFixed
//    - Formatiert eine Zahl mit einer festen Anzahl von Dezimalstellen.
//    - Beispiel:

let num = 123.456;
console.log(num.toFixed(2)); // Ausgabe: 123.46

// 4.2 Number.prototype.toExponential
//    - Gibt eine Zahl in exponentieller Notation zurück.
//    - Beispiel:

let expNum = 123456;
console.log(expNum.toExponential(2)); // Ausgabe: 1.23e+5

// 4.3 Number.prototype.toPrecision
//    - Formatiert eine Zahl auf eine bestimmte Gesamtanzahl von signifikanten Stellen.
//    - Beispiel:

let precNum = 123.456;
console.log(precNum.toPrecision(4)); // Ausgabe: 123.5

// 4.4 Number.prototype.toString
//    - Gibt eine Zeichenfolge zurück, die die angegebene Zahl darstellt.
//    - Beispiel:

let numberObj = new Number(42);
console.log(numberObj.toString()); // Ausgabe: "42"

// 4.5 Number.prototype.valueOf
//    - Gibt den primitiven Wert des Number-Objekts zurück.
//    - Beispiel:

let primitiveValue = numberObj.valueOf();
console.log(primitiveValue); // Ausgabe: 42

// 4.11 Number.parseFloat
//     - Konvertiert einen String in eine Gleitkommazahl.
//     - Beispiel:

let floatString = "3.14";
let floatValue = Number.parseFloat(floatString);
console.log(floatValue); // Ausgabe: 3.14

// 4.12 Number.parseInt
//     - Konvertiert einen String in eine Ganzzahl.
//     - Beispiel:

let intString = "42";
let intValue = Number.parseInt(intString);
console.log(intValue); // Ausgabe: 42

// 4.13 Number.isFinite
//     - Prüft, ob ein Wert eine endliche Zahl ist.
//     - Beispiel:

console.log(Number.isFinite(42)); // Ausgabe: true
console.log(Number.isFinite(Infinity)); // Ausgabe: false

// 4.14 Number.isNaN
//     - Prüft, ob ein Wert NaN (Not a Number) ist.
//     - Beispiel:

console.log(Number.isNaN(NaN)); // Ausgabe: true
console.log(Number.isNaN(42)); // Ausgabe: false

// 4.15 Number.isSafeInteger
//     - Prüft, ob ein Wert eine sichere Ganzzahl ist.
//     - Beispiel:

console.log(Number.isSafeInteger(42)); // Ausgabe: true
console.log(Number.isSafeInteger(9007199254740992)); // Ausgabe: false

// 4.16 Number.EPSILON
//     - Die kleinste positive Zahl, die größer als Null ist und von 1 abgezogen werden kann, um eine andere Zahl zu erzeugen.
//     - Beispiel:

console.log(Number.EPSILON); // Ausgabe: 2.220446049250313e-16

// 4.17 Number.MAX_VALUE und Number.MIN_VALUE
//     - Die größte und kleinste positive Zahl, die in JavaScript dargestellt werden können.
//     - Beispiel:

console.log(Number.MAX_VALUE); // Ausgabe: 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // Ausgabe: 5e-324

// 4.18 Number.POSITIVE_INFINITY und Number.NEGATIVE_INFINITY
//     - Die positiv und negativ unendlichen Werte.
//     - Beispiel:

console.log(Number.POSITIVE_INFINITY); // Ausgabe: Infinity
console.log(Number.NEGATIVE_INFINITY); // Ausgabe: -Infinity

// 5. Konvertierung zwischen Zahlensystemen
//    - JavaScript bietet Funktionen zur Konvertierung von Zahlen in verschiedene Zahlensysteme.
//    - Beispiel:

let decimal = 255;

console.log(decimal.toString(2));  // Ausgabe: "11111111" (Binär)
console.log(decimal.toString(8));  // Ausgabe: "377" (Oktal)
console.log(decimal.toString(16)); // Ausgabe: "ff" (Hexadezimal)

// 6. Abschluss
//    - Ganzzahlen sind in der Programmierung unverzichtbar für Zähloperationen und arithmetische Berechnungen.
//    - Die Number-Klasse bietet viele nützliche Methoden zur Formatierung, Prüfung und Konvertierung von Zahlen.
