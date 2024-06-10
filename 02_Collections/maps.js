// Maps in JavaScript

// Gründe für die Verwendung von Maps:
// - Maps ermöglichen die Zuordnung von Schlüssel-Wert-Paaren, wobei Schlüssel und Werte unterschiedliche Datentypen sein können.
// - Sie bieten eine effiziente Möglichkeit, Daten zu indizieren und abzurufen, da der Zugriff über den Schlüssel erfolgt.
// - Maps sind besonders nützlich, wenn komplexe Datenstrukturen benötigt werden oder wenn Wertzuweisungen eindeutig identifiziert werden müssen.

// Besonderheiten:
// - Maps speichern Schlüssel-Wert-Paare und ermöglichen den Zugriff auf Werte über Schlüssel.

// 1. Erstellung einer Map:
//    - Verwende den Konstruktor "Map()", um eine leere Map zu erstellen oder eine Map mit Startwerten zu initialisieren.
//    - Beispiel:

let benutzerMap = new Map();

// 2. Hinzufügen von Elementen zu einer Map:
//    - Verwende die Methode "set()", um Schlüssel-Wert-Paare zur Map hinzuzufügen.
//    - Beispiel:

benutzerMap.set("name", "Alice");
benutzerMap.set("alter", 30);
benutzerMap.set("aktiv", true);

// 3. Zugriff auf Elemente in einer Map:
//    - Verwende die Methode "get()", um den Wert für einen bestimmten Schlüssel abzurufen.
//    - Beispiel:

console.log(benutzerMap.get("name")); // Gibt den Namen des Benutzers aus ("Alice")
console.log(benutzerMap.get("alter")); // Gibt das Alter des Benutzers aus (30)

// 4. Überprüfen, ob ein Schlüssel in einer Map vorhanden ist:
//    - Verwende die Methode "has()", um zu überprüfen, ob ein Schlüssel in der Map vorhanden ist.
//    - Beispiel:

console.log(benutzerMap.has("name")); // true
console.log(benutzerMap.has("email")); // false

// 5. Entfernen von Elementen aus einer Map:
//    - Verwende die Methode "delete()", um ein Schlüssel-Wert-Paar aus der Map zu entfernen.
//    - Beispiel:

benutzerMap.delete("aktiv"); // Entfernt den Schlüssel "aktiv" aus der Map
console.log(benutzerMap);

// 6. Iteration über eine Map:
//    - Verwende Schleifen wie "for-of" oder die Methode "forEach()", um über die Schlüssel-Wert-Paare einer Map zu iterieren.
//    - Beispiel:

for (let [schluessel, wert] of benutzerMap) {
    console.log("Schlüssel:", schluessel, "Wert:", wert);
}

benutzerMap.forEach(function(wert, schluessel) {
    console.log("Schlüssel:", schluessel, "Wert:", wert);
});