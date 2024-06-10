// Datentypen in JavaScript

// 1. Primitive Datentypen:
//    - Number: Ganze Zahlen, Fließkommazahlen
//    - String: Zeichenketten
//    - Boolean: Wahrheitswerte (true oder false)
//    - Null: Ein Wert, der explizit keine Daten enthält
//    - Undefined: Ein Wert, der angibt, dass eine Variable keinen Wert hat
//    - Symbol: Einzigartige und unveränderliche Werte, die als Eigenschaftsschlüssel verwendet werden können

let zahl = 10; // Number
let text = "Hallo Welt"; // String
let wahrheitswert = true; // Boolean
let nichts = null; // Null
let nichtDefiniert; // Undefined
let symbol = Symbol('foo'); // Symbol

// 2. Typüberprüfung:
//    - typeof: Operator zur Überprüfung des Datentyps einer Variable
//    - instanceof: Operator zur Überprüfung, ob ein Objekt eine Instanz eines bestimmten Typs ist

console.log(typeof zahl); // typeof: zahl - Gibt den Datentyp der Variable "zahl" zurück (in diesem Fall "number").
console.log(typeof text); // typeof: text - Gibt den Datentyp der Variable "text" zurück (in diesem Fall "string").
console.log(typeof wahrheitswert); // typeof: wahrheitswert - Gibt den Datentyp der Variable "wahrheitswert" zurück (in diesem Fall "boolean").
console.log(typeof nichts); // typeof: nichts - Gibt den Datentyp der Variable "nichts" zurück (in diesem Fall "object"). (Hinweis: Historischer Fehler in JavaScript)
console.log(typeof nichtDefiniert); // typeof: nichtDefiniert - Gibt den Datentyp der Variable "nichtDefiniert" zurück (in diesem Fall "undefined").
console.log(typeof symbol); // typeof: symbol - Gibt den Datentyp der Variable "symbol" zurück (in diesem Fall "symbol").

let zahlenArray = [1, 2, 3, 4, 5]; // Array
let person = { name: "Max", alter: 30 }; // Objekt

console.log(zahlenArray instanceof Array); // true
console.log(person instanceof Object); // true

// 3. Typkonvertierung:
//    - JavaScript führt automatische und explizite Typkonvertierungen durch, um Werte in verschiedene Datentypen umzuwandeln.

let zahlAlsString = String(zahl); // Explizite Typkonvertierung: Zahl zu String
console.log(typeof zahlAlsString); // typeof: zahlAlsString - Gibt den Datentyp der Variable "zahlAlsString" zurück (in diesem Fall "string").

let stringAlsZahl = parseInt("42"); // Explizite Typkonvertierung: String zu Zahl
console.log(typeof stringAlsZahl); // typeof: stringAlsZahl - Gibt den Datentyp der Variable "stringAlsZahl" zurück (in diesem Fall "number").

let boolAlsString = Boolean("false"); // Explizite Typkonvertierung: String zu Boolean
console.log(typeof boolAlsString); // typeof: boolAlsString - Gibt den Datentyp der Variable "boolAlsString" zurück (in diesem Fall "boolean").

let zahlAlsBool = Boolean(0); // Automatische Typkonvertierung: Zahl zu Boolean
console.log(typeof zahlAlsBool); // typeof: zahlAlsBool - Gibt den Datentyp der Variable "zahlAlsBool" zurück (in diesem Fall "boolean").