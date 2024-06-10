// Vererbung in JavaScript

// 1. Vererbung:
//    - JavaScript unterstützt die Vererbung zwischen Klassen.
//    - Eine Klasse kann von einer anderen Klasse erben, um deren Eigenschaften und Methoden zu erben.
//    - Beispiel:

class Tier {
    constructor(name) {
        this.name = name;
    }

    vorstellen() {
        return `Hallo, ich bin ${this.name}.`;
    }
}

class Hund extends Tier {
    bellen() {
        return "Wuff!";
    }
}

let meinHund = new Hund("Bello");
console.log(meinHund.vorstellen()); // Ausgabe: "Hallo, ich bin Bello."
console.log(meinHund.bellen()); // Ausgabe: "Wuff!"

console.log(meinHund instanceof Hund); // Ausgabe: true
console.log(meinHund instanceof Tier); // Ausgabe: true
