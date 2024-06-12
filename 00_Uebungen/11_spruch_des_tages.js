// sprueche.js

// Array mit verschiedenen Sprüchen
const sprueche = [
    "Der frühe Vogel fängt den Wurm.",
    "Wer wagt, gewinnt.",
    "Ohne Fleiß kein Preis.",
    "Der Weg ist das Ziel.",
    "Träume nicht dein Leben, lebe deinen Traum.",
    "Wer anderen eine Grube gräbt, fällt selbst hinein.",
    "Man soll den Tag nicht vor dem Abend loben.",
    "In der Ruhe liegt die Kraft."
];

// Funktion, die einen zufälligen Spruch zurückliefert
function getSpruchDesTages() {
    const randomIndex = Math.floor(Math.random() * sprueche.length); // Wählt einen zufälligen Index
    return sprueche[randomIndex]; // Gibt den Spruch am zufälligen Index zurück
}

// Ausgabe des Spruchs des Tages, wenn das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", function() {
    const spruch = getSpruchDesTages(); // Holt den Spruch des Tages
    document.getElementById("spruchDesTages").innerText = spruch; // Setzt den Spruch in das HTML-Element
});
