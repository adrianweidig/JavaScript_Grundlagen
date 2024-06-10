// Klassen und Objekte in JavaScript

// 1. Klassen:
//    - JavaScript verwendet das Schlüsselwort "class", um Klassen zu definieren.
//    - Klassen dienen als Baupläne zur Erstellung von Objekten mit gemeinsamen Eigenschaften und Methoden.
//    - Beispiel:

class Person {
    constructor(name, alter) {
        this.name = name;
        this.alter = alter;
    }

    vorstellen() {
        return `Hallo, ich bin ${this.name} und ${this.alter} Jahre alt.`;
    }
}

let person1 = new Person("Max", 30);
console.log(person1.vorstellen()); // Ausgabe: "Hallo, ich bin Max und 30 Jahre alt."

// 2. Objekte:
//    - Objekte sind Instanzen von Klassen und werden mit dem Operator "new" erstellt.
//    - Sie können Eigenschaften und Methoden der zugrunde liegenden Klasse verwenden.
//    - Beispiel:

let person2 = new Person("Anna", 25);
console.log(person2.vorstellen()); // Ausgabe: "Hallo, ich bin Anna und 25 Jahre alt."

console.log(person1 instanceof Person); // Ausgabe: true
console.log(person2 instanceof Person); // Ausgabe: true
