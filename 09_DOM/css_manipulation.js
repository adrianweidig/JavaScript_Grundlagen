// CSS Klassen Manipulation Beispiel: CSS Klassen ändern

// Funktion zum Hinzufügen, Entfernen und Toggeln von CSS Klassen
function manipulateClasses() {
    // Holt das HTML-Element mit der ID 'output'
    let output = document.getElementById('output');

    // Fügt die CSS Klasse 'highlight' zum 'output' Element hinzu
    output.classList.add('highlight');
    console.log('CSS Klasse "highlight" hinzugefügt.');

    // Wartet 2 Sekunden (2000 Millisekunden) und entfernt dann die CSS Klasse 'highlight' vom 'output' Element
    setTimeout(function() {
        output.classList.remove('highlight');
        console.log('CSS Klasse "highlight" entfernt.');
    }, 2000);

    // Erstellt ein neues HTML-Button-Element
    let button = document.createElement('button');

    // Setzt den Text des Buttons auf 'Toggle-Klasse'
    button.textContent = 'Toggle-Klasse';

    // Fügt die CSS Klasse 'toggleButton' zum Button hinzu
    button.classList.add('toggleButton');

    // Fügt einen Event Listener zum Button hinzu, der auf Klicks wartet
    // Wenn der Button geklickt wird, wird die CSS Klasse 'highlight' beim 'output' Element getoggelt
    button.addEventListener('click', function() {
        output.classList.toggle('highlight');
        console.log('CSS Klasse "highlight" getoggelt.');
    });

    // Fügt den Button zum Body-Element der Seite hinzu, damit er angezeigt wird
    document.body.appendChild(button);
}

// Fügt einen Event Listener hinzu, der die Funktion 'manipulateClasses' ausführt, wenn die Seite vollständig geladen ist
document.addEventListener('DOMContentLoaded', manipulateClasses);

// Konsolen-Ausgabe zur Demonstration, dass das Skript geladen wurde
console.log('CSS Klassen Manipulation Beispiel geladen.');
