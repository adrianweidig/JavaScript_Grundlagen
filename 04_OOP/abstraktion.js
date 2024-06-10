// Abstraktion in JavaScript

// 1. Abstraktion:
//    - Abstraktion bezieht sich darauf, irrelevante Details auszublenden und nur die wesentlichen Aspekte eines Objekts oder einer Funktionalität darzustellen.
//    - In JavaScript kann Abstraktion durch die Verwendung von Klassen und Schnittstellen erreicht werden, die nur die für den Benutzer relevanten Methoden und Eigenschaften offenlegen.
//    - Beispiel:

class Bankkonto {
    constructor(kontostand) {
        this.kontostand = kontostand;
    }

    einzahlen(betrag) {
        this.kontostand += betrag;
        console.log(`Einzahlung von ${betrag} durchgeführt.`);
    }

    abheben(betrag) {
        if (this.kontostand >= betrag) {
            this.kontostand -= betrag;
            console.log(`Auszahlung von ${betrag} durchgeführt.`);
        } else {
            console.log("Nicht genügend Guthaben auf dem Konto.");
        }
    }

    kontostandAnzeigen() {
        console.log(`Aktueller Kontostand: ${this.kontostand}`);
    }
}

let meinKonto = new Bankkonto(1000);
meinKonto.einzahlen(500);
meinKonto.abheben(200);
meinKonto.kontostandAnzeigen();
