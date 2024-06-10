// Polymorphismus in JavaScript

// 1. Polymorphismus:
//    - Polymorphismus bezieht sich darauf, dass Objekte in verschiedenen Kontexten unterschiedlich handeln können.
//    - In JavaScript wird Polymorphismus oft durch Vererbung und das Überschreiben von Methoden erreicht.
//    - Beispiel:

class Form {
    berechneFlaeche() {
        return 0;
    }
}

class Rechteck extends Form {
    constructor(breite, hoehe) {
        super();
        this.breite = breite;
        this.hoehe = hoehe;
    }

    berechneFlaeche() {
        return this.breite * this.hoehe;
    }
}

class Kreis extends Form {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    berechneFlaeche() {
        return Math.PI * this.radius * this.radius;
    }
}

let rechteck = new Rechteck(5, 10);
let kreis = new Kreis(5);

console.log(rechteck.berechneFlaeche()); // Ausgabe: 50
console.log(kreis.berechneFlaeche()); // Ausgabe: ~78.54

console.log(rechteck instanceof Form); // Ausgabe: true
console.log(kreis instanceof Form); // Ausgabe: true

