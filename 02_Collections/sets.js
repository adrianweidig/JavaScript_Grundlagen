// Sets in JavaScript

// Gründe für die Verwendung von Sets:
// - Sets sind ideal für die Speicherung eindeutiger Werte ohne Duplikate.
// - Sie bieten effiziente Operationen für das Hinzufügen, Überprüfen und Entfernen von Elementen.
// - Sets sind besonders nützlich, wenn Sie sicherstellen möchten, dass keine doppelten Einträge in einer Sammlung vorhanden sind oder wenn Sie eine einfache Möglichkeit benötigen, Elemente zu vergleichen.

// Besonderheiten:
// - Sets speichern eindeutige Werte ohne Reihenfolge oder Indizierung.

// 1. Erstellung eines Sets:
//    - Verwende den Konstruktor "Set()", um ein leeres Set zu erstellen oder ein Set mit Anfangswerten zu initialisieren.
//    - Beispiel:

let farbenSet = new Set();

// 2. Hinzufügen von Elementen zu einem Set:
//    - Verwende die Methode "add()", um Elemente zu einem Set hinzuzufügen.
//    - Beispiel:

farbenSet.add("Rot");
farbenSet.add("Blau");
farbenSet.add("Grün");

// 3. Überprüfen, ob ein Element in einem Set vorhanden ist:
//    - Verwende die Methode "has()", um zu überprüfen, ob ein Element in einem Set vorhanden ist.
//    - Beispiel:

console.log(farbenSet.has("Rot")); // true
console.log(farbenSet.has("Gelb")); // false

// 4. Entfernen von Elementen aus einem Set:
//    - Verwende die Methode "delete()", um ein Element aus einem Set zu entfernen.
//    - Beispiel:

farbenSet.delete("Blau"); // Entfernt "Blau" aus dem Set
console.log(farbenSet);

// 5. Iteration über ein Set:
//    - Verwende Schleifen wie "for-of" oder die Methode "forEach()", um über die Elemente eines Sets zu iterieren.
//    - Beispiel:

for (let farbe of farbenSet) {
    console.log("Farbe:", farbe);
}

farbenSet.forEach(function (farbe) {
    console.log("Farbe:", farbe);
});

// 6. Konvertierung eines Sets in ein Array:
//    - Verwende den Spread-Operator (...) oder die Methode "Array.from()", um ein Set in ein Array umzuwandeln.
//    - Beispiel:

let farbenArray = [...farbenSet]; // Verwendet den Spread-Operator
console.log("Farben als Array:", farbenArray);

let farbenArray2 = Array.from(farbenSet); // Verwendet die Methode "Array.from()"
console.log("Farben als Array 2:", farbenArray2);
