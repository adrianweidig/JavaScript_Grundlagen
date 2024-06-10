// Ternärer Operator in JavaScript

// Der ternäre Operator ist eine verkürzte Schreibweise für einfache if-else-Anweisungen.

// Syntax:
// bedingung ? ausdruck1 : ausdruck2;

// Wenn die Bedingung wahr ist, wird ausdruck1 ausgeführt, sonst wird ausdruck2 ausgeführt.

// Beispiel:

let zahl = 10;
let ergebnis = (zahl > 5) ? "Größer als 5" : "Kleiner oder gleich 5";
console.log(ergebnis); // Ausgabe: "Größer als 5", da die Bedingung (zahl > 5) wahr ist

// Der ternäre Operator kann auch in Zuweisungen verwendet werden:

let status = (zahl % 2 === 0) ? "Gerade" : "Ungerade";
console.log(status); // Ausgabe: "Gerade", da die Zahl 10 gerade ist

// Mehrere ternäre Operatoren können verschachtelt werden:

let alter = 20;
let statusMeldung = (alter >= 18) ? "Volljährig" : (alter >= 16) ? "Fast volljährig" : "Minderjährig";
console.log(statusMeldung); // Ausgabe: "Volljährig", da das Alter 20 ist und somit die erste Bedingung erfüllt ist

// Der ternäre Operator kann auch als Teil von Ausdrücken verwendet werden:

let punkte = 75;
let ergebnisText = "Ergebnis: " + (punkte > 50 ? "Bestanden" : "Durchgefallen");
console.log(ergebnisText); // Ausgabe: "Ergebnis: Bestanden", da die Punkte größer als 50 sind