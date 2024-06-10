// Listen in JavaScript

// Gründe für die Verwendung von Listen:
// - Listen sind ähnlich wie Arrays, bieten jedoch mehr Flexibilität bei der Verwaltung von Schlüssel-Wert-Paaren.
// - Sie ermöglichen den Zugriff auf Elemente über Schlüssel, was effizienter sein kann als der Indexzugriff in Arrays.
// - Listen eignen sich gut für Szenarien, in denen Elemente in beliebiger Reihenfolge benötigt werden oder Duplikate vermieden werden sollen.

// Besonderheiten:
// - Arrays und Listen sind geordnete Sammlungen, wobei die Reihenfolge der Elemente erhalten bleibt.

// 1. Erstellung einer Liste:
//    - Verwende geschweifte Klammern, um eine Liste zu erstellen.
//    - Beispiel:

let obstListe = {
    apfel: 5,
    banane: 2,
    orange: 3
};

// 2. Zugriff auf Listenelemente:
//    - Verwende den Schlüssel, um auf Elemente in einer Liste zuzugreifen.
//    - Beispiel:

console.log(obstListe["apfel"]); // Gibt die Anzahl der Äpfel aus (5)
console.log(obstListe.banane); // Gibt die Anzahl der Bananen aus (2)

// 3. Hinzufügen von Elementen zu einer Liste:
//    - Weise der Liste einen neuen Schlüssel-Wert-Paar zu.
//    - Beispiel:

obstListe.birne = 4; // Fügt 4 Birnen zur Liste hinzu
console.log(obstListe);

// 4. Entfernen von Elementen aus einer Liste:
//    - Verwende das "delete" -Schlüsselwort, um ein Element aus der Liste zu entfernen.
//    - Beispiel:

delete obstListe.orange; // Entfernt Orangen aus der Liste
console.log(obstListe);

// 5. Iteration über eine Liste:
//    - Verwende Schleifen wie "for-in", um über die Elemente einer Liste zu iterieren.
//    - Beispiel:

for (let obst in obstListe) {
    console.log("Obst:", obst, "Anzahl:", obstListe[obst]);
}