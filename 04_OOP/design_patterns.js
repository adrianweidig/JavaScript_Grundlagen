// Design Patterns in JavaScript

// 1. Design Patterns:
//    - Design Patterns sind bewährte Lösungen für wiederkehrende Probleme in der Softwareentwicklung.
//    - In JavaScript gibt es verschiedene Design Patterns, darunter das Modul-, das Fabrik-, das Observer- und das Singleton-Pattern.
//    - Beispiele:

// Modul-Pattern
let Modul = (function() {
    let privatVariable = "Ich bin privat";

    return {
        oeffentlicheVariable: "Ich bin öffentlich",
        oeffentlicheMethode: function() {
            console.log(privatVariable);
        }
    };
})();

console.log(Modul.oeffentlicheVariable); // Ausgabe: "Ich bin öffentlich"
Modul.oeffentlicheMethode(); // Ausgabe: "Ich bin privat"

// Fabrik-Pattern
function AutoFabrik() {
    this.createAuto = function(typ) {
        let auto;

        if (typ === "sport") {
            auto = new Sportwagen();
        } else if (typ === "familie") {
            auto = new Familienwagen();
        }

        auto.typ = typ;
        auto.fahren = function() {
            console.log(`Das ${this.typ} Auto fährt.`);
        };

        return auto;
    };
}

function Sportwagen() {
    this.maxGeschwindigkeit = 300;
}

function Familienwagen() {
    this.maxGeschwindigkeit = 160;
}

const fabrik = new AutoFabrik();
const auto1 = fabrik.createAuto("sport");
const auto2 = fabrik.createAuto("familie");

auto1.fahren(); // Ausgabe: "Das sport Auto fährt."
auto2.fahren(); // Ausgabe: "Das familie Auto fährt."

// Observer-Pattern
function EventEmitter() {
    this.events = {};

    this.on = function(event, listener) {
        if (typeof this.events[event] !== 'object') {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    };

    this.emit = function(event, ...args) {
        if (typeof this.events[event] === 'object') {
            this.events[event].forEach(listener => listener.apply(this, args));
        }
    };
}

const emitter = new EventEmitter();
emitter.on('greet', message => console.log(message));
emitter.emit('greet', 'Hallo, Welt!'); // Ausgabe: "Hallo, Welt!"

// Singleton-Pattern
const Singleton = (function() {
    let instance;

    function createInstance() {
        const objekt = new Object("Ich bin die Instanz.");
        return objekt;
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

const instanz1 = Singleton.getInstance();
const instanz2 = Singleton.getInstance();

console.log(instanz1 === instanz2); // Ausgabe: true
