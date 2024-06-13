// CSS Klassen Manipulation Beispiel: CSS Klassen ändern

// Funktion zum Hinzufügen, Entfernen und Toggeln von CSS Klassen
function manipulateClasses() {
    let output = document.getElementById('output');
    output.classList.add('highlight');
    console.log('CSS Klasse "highlight" hinzugefügt.');

    setTimeout(function() {
        output.classList.remove('highlight');
        console.log('CSS Klasse "highlight" entfernt.');
    }, 2000);

    let button = document.createElement('button');
    button.textContent = 'Toggle-Klasse';
    button.classList.add('toggleButton');
    button.addEventListener('click', function() {
        output.classList.toggle('highlight');
        console.log('CSS Klasse "highlight" getoggelt.');
    });
    document.body.appendChild(button);
}

// Event Listener für Ausführung beim Laden der Seite
document.addEventListener('DOMContentLoaded', manipulateClasses);

// Konsolen-Ausgabe zur Demonstration
console.log('CSS Klassen Manipulation Beispiel geladen.');
