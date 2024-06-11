// Variablen in JavaScript

// 1. Variablendeklaration:
//    - Verwende das Schlüsselwort "let", um eine Variable zu deklarieren.
//    - Beispiel:

let zahl = 10; // Deklariert eine Variable "zahl" und weist ihr den Wert 10 zu.
let text = "Hallo Welt"; // Deklariert eine Variable "text" und weist ihr den Wert "Hallo Welt" zu.
let istWahr = true; // Deklariert eine Variable "istWahr" und weist ihr den Wert true zu.

// 2. Variablenwert ändern:
//    - Du kannst den Wert einer Variablen zu einem späteren Zeitpunkt ändern.
//    - Beispiel:

zahl = 20; // Ändert den Wert der Variable "zahl" von 10 auf 20.

// 3. Variablentypen:
//    - JavaScript ist dynamisch typisiert, was bedeutet, dass eine Variable Werte verschiedener Typen halten kann.
//    - Beispiel:

let dynamischeVariable = 42; // Deklariert eine Variable und weist ihr eine Zahl zu.
dynamischeVariable = "Jetzt ist es ein String"; // Ändert den Wert der Variablen zu einem String.

// 4. Konstanten:
//    - Verwende das Schlüsselwort "const", um eine konstante Variable zu deklarieren.
//    - Der Wert einer Konstanten kann nicht neu zugewiesen werden.
//    - Beispiel:

const pi = 3.14159; // Deklariert eine Konstante "pi" und weist ihr den Wert von Pi zu.

// 5. Variablennamen:
//    - Variablennamen können Buchstaben, Zahlen, Unterstriche (_) und Dollarzeichen ($) enthalten.
//    - Der Name darf nicht mit einer Zahl beginnen.
//    - Beispiele für gültige Variablennamen: zahl, meinText, meinWert, meine_variable, $preis
//    - Beispiele für ungültige Variablennamen: 123zahl, mein-Text, mein-Wert, mein Variable

// 6. Sichtbarkeit:
//    - Variablen haben einen Gültigkeitsbereich, der von ihrem Speicherort in Ihrem Code bestimmt wird.
//    - Globale Variablen sind überall im Code sichtbar, lokale Variablen sind nur in ihrem umgebenden Block sichtbar.

// 7. Hoisting:
//    - Variablen und Funktionen in JavaScript werden vor der Ausführung in den Speicher geladen.
//    - Dadurch können Variablen auch verwendet werden, bevor sie deklariert wurden.
//    - Beispiel:

console.log(hoistVar); // Gibt "undefined" aus, weil die Variable zwar existiert, aber noch keinen Wert hat.
var hoistVar = "Ich wurde gehoistet."; // Deklariert und initialisiert eine Variable.

// 8. Scoping:
//    - JavaScript hat Funktionsscope. Variablen innerhalb einer Funktion sind nur in dieser Funktion sichtbar.
//    - Blockscope wurde mit ES6 eingeführt. Variablen, die mit "let" oder "const" deklariert werden, sind blockgebunden.

// 9. Verwenden von let, const und var:
//    - Verwende "let" für Variablen, die ihren Wert ändern können.
//    - Verwende "const" für Konstanten, deren Wert sich nicht ändert.
//    - Verwende "var" sparsam, da es zu unerwartetem Verhalten führen kann.

// Beispiel:

let a = 10; // Deklariert eine Variable "a" und weist ihr den Wert 10 zu.
const b = 20; // Deklariert eine Konstante "b" und weist ihr den Wert 20 zu.
var c = 30; // Deklariert eine Variable "c" und weist ihr den Wert 30 zu. (Nicht empfohlen)

// Vergleich zwischen let und var bezüglich des Scopes:
console.log("Vergleich zwischen let und var:");
// Kommentar: Der Fehler liegt darin, dass "vorherLet" und "nachherLet" außerhalb ihres Gültigkeitsbereichs verwendet werden.
// Dadurch werden ReferenceError verursacht.
// Der Fehler zeigt den Unterschied im Scoping-Verhalten zwischen "let" und "var".
console.log("Vorher - let: ", vorherLet); // Fehler: ReferenceError: Cannot access 'vorherLet' before initialization
console.log("Vorher - var: ", vorherVar); // undefined

var vorherVar = "Ich bin var";
let vorherLet = "Ich bin let";

console.log("Nachher - let: ", nachherLet); // Fehler: ReferenceError: nachherLet is not defined
console.log("Nachher - var: ", nachherVar); // undefined

{
    var nachherVar = "Ich bin var im Block";
    let nachherLet = "Ich bin let im Block";
}

console.log("Nach dem Block - let: ", nachherLet); // "Ich bin let"
console.log("Nach dem Block - var: ", nachherVar); // "Ich bin var im Block"
