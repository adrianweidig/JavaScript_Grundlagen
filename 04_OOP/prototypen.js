// Prototypen in JavaScript

// 1. Prototypen:
//    - In JavaScript werden Objekte über Prototypen vererbt.
//    - Jede Funktion in JavaScript hat ein Prototypenobjekt, das Eigenschaften und Methoden enthält, die von Instanzen dieser Funktion geerbt werden.
//    - Beispiel:

function Auto(marke) {
    this.marke = marke;
}

Auto.prototype.starten = function() {
    return `Das ${this.marke} Auto wurde gestartet.`;
}

let meinAuto = new Auto("Toyota");
console.log(meinAuto.starten()); // Ausgabe: "Das Toyota Auto wurde gestartet."

console.log(meinAuto instanceof Auto); // Ausgabe: true
