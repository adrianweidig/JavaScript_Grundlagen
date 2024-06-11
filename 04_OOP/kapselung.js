// Kapselung in JavaScript

// 1. Kapselung:
//    - In JavaScript kann Kapselung erreicht werden, indem private Eigenschaften und Methoden durch Konvention oder mit Hilfe von Closures erstellt werden.
//    - Obwohl JavaScript keine direkte Unterstützung für private Mitglieder bietet, können Entwickler Muster verwenden, um den Zugriff auf bestimmte Teile ihres Codes einzuschränken.
//    - Beispiel:

function Zaehler() {
    let anzahl = 0;

    this.erhoehen = function () {
        anzahl++;
    }

    this.anzeigen = function () {
        return anzahl;
    }
}

let meinZaehler = new Zaehler();
meinZaehler.erhoehen();
meinZaehler.erhoehen();
console.log(meinZaehler.anzeigen()); // Ausgabe: 2

console.log(typeof anzahl); // Ausgabe: undefined (Die Variable "anzahl" ist privat und außerhalb der Funktion nicht zugänglich.)
