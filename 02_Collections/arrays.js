// Arrays in JavaScript

// Gründe für die Verwendung von Arrays:
// - Arrays sind ideal für die Speicherung geordneter Listen von Elementen gleichen Typs.
// - Sie bieten schnellen Zugriff auf Elemente über ihren Index.
// - Arrays bieten eine Vielzahl von nützlichen Methoden und Eigenschaften für die Manipulation und Verwaltung von Elementen.

// Besonderheiten:
// - Arrays und Listen sind geordnete Sammlungen, wobei die Reihenfolge der Elemente erhalten bleibt.

// 1. Erstellung eines Arrays:
//    - Verwende eckige Klammern, um ein Array zu erstellen.
//    - Beispiel:

let zahlen = [1, 2, 3, 4, 5]; // Ein Array von Zahlen
let namen = ["Alice", "Bob", "Charlie", "David"]; // Ein Array von Zeichenketten
let gemischt = [1, "zwei", true]; // Ein Array mit verschiedenen Datentypen

// 2. Zugriff auf Array-Elemente:
//    - Verwende den Index, um auf Elemente in einem Array zuzugreifen. Der Index beginnt bei 0.
//    - Beispiel:

console.log(zahlen[0]); // Gibt das erste Element des Arrays "zahlen" aus (1)
console.log(namen[2]); // Gibt das dritte Element des Arrays "namen" aus ("Charlie")

// 3. Länge eines Arrays:
//    - Die Eigenschaft "length" gibt die Anzahl der Elemente in einem Array zurück.
//    - Beispiel:

console.log(zahlen.length); // Gibt die Länge des Arrays "zahlen" aus (5)
console.log(namen.length); // Gibt die Länge des Arrays "namen" aus (4)

// 4. Hinzufügen von Elementen zu einem Array:
//    - Verwende die Methode "push()" oder den Index, um Elemente zu einem Array hinzuzufügen.
//    - Beispiel:

zahlen.push(6); // Fügt die Zahl 6 am Ende des Arrays "zahlen" hinzu
console.log(zahlen);

namen[4] = "Eva"; // Fügt den Namen "Eva" an Position 4 im Array "namen" hinzu
console.log(namen);

// 5. Entfernen von Elementen aus einem Array:
//    - Verwende die Methode "pop()" oder "splice()" zum Entfernen von Elementen aus einem Array.
//    - Beispiel:

zahlen.pop(); // Entfernt das letzte Element aus dem Array "zahlen"
console.log(zahlen);

namen.splice(2, 1); // Entfernt 1 Element ab Index 2 aus dem Array "namen"
console.log(namen);

// 6. Iteration über ein Array:
//    - Verwende Schleifen wie "for" oder "forEach()", um über die Elemente eines Arrays zu iterieren.
//    - Beispiel:

for (let i = 0; i < namen.length; i++) {
    console.log("Name:", namen[i]);
}

namen.forEach(function (name) {
    console.log("Name:", name);
});

// 7. Suchen nach einem Element in einem Array:
//    - Verwende die Methode "find()", um ein Element in einem Array basierend auf einer Bedingung zu finden.
//    - Beispiel:

const gefundenerName1 = namen.find(function (name) {
    return name === "Bob";
});
console.log("Gefundener Name1:", gefundenerName1);

// Arrow Variante

const gefundenerName2 = namen.find(name => name === "Alice");
console.log("Gefundener Name:", gefundenerName2);
// Ausgabe: Gefundener Name: Bob

// 8. Suchen nach dem Index eines Elements in einem Array mit findIndex():
//    - Verwende die Methode "findIndex()", um den Index eines Elements in einem Array basierend auf einer Bedingung zu finden.
//    - Beispiel:

const indexVonBob = namen.findIndex(name => name === "Bob");
console.log("Index von Bob:", indexVonBob);
// Ausgabe: Index von Bob: 1

// 9. Filtern von Elementen in einem Array mit filter():
//    - Verwende die Methode "filter()", um Elemente in einem Array basierend auf einer Bedingung zu filtern.
//    - Beispiel:

const namenMitE = namen.filter(name => name.includes("e") || name.includes("E"));
console.log("Namen mit 'e':", namenMitE);
// Ausgabe: Namen mit 'e': [ 'Alice', 'Eva' ]

// 10. Überprüfen, ob ein Element in einem Array vorhanden ist, mit includes():
//     - Verwende die Methode "includes()", um zu überprüfen, ob ein Element in einem Array vorhanden ist.
//     - Beispiel:

const istDavidVorhanden = namen.includes("David");
console.log("Ist David vorhanden?", istDavidVorhanden);
// Ausgabe: Ist David vorhanden? true


