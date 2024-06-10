// Benutzereingaben in JavaScript über die Konsole

// 1. Einfache Benutzereingabe:
//    - Verwende die Methode "prompt()" für eine einfache Texteingabe.
//    - Beispiel:

let name = prompt("Wie ist dein Name?");
console.log("Hallo, " + name + "!");

// 2. Konvertierung von Benutzereingaben:
//    - Die Eingabe über "prompt()" wird standardmäßig als String behandelt.
//    - Verwende die Funktionen "parseInt()" oder "parseFloat()" für die Konvertierung in Zahlen.
//    - Beispiel:

let alterString = prompt("Wie alt bist du?");
let alter = parseInt(alterString);
console.log("Du bist " + alter + " Jahre alt.");

// 3. Bestätigung von Benutzereingaben:
//    - Verwende die Methode "confirm()" für eine Bestätigung mit "OK" und "Abbrechen".
//    - Die Rückgabe ist ein boolescher Wert (true für "OK" und false für "Abbrechen").
//    - Beispiel:

let bestaetigt = confirm("Möchtest du fortfahren?");
console.log("Bestätigt:", bestaetigt);

// 4. Benutzereingaben in Schleifen:
//    - Du kannst Benutzereingaben in Schleifen verwenden, um wiederholte Aktionen auszuführen.
//    - Beispiel:

let zahlDerVersuche = 3;

for (let i = 0; i < zahlDerVersuche; i++) {
    let antwort = prompt("Was ist die Hauptstadt von Frankreich?");
    if (antwort.toLowerCase() === "paris") {
        console.log("Korrekt!");
        break; // Beende die Schleife, wenn die richtige Antwort gegeben wurde.
    } else {
        console.log("Falsch. Versuche es erneut.");
    }
}