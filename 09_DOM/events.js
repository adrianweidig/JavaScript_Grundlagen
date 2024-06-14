// Benutzereingabe verarbeiten und grüßen

// Funktion zur Verarbeitung der Benutzereingabe
function greetUser() {
    // Holt das HTML-Element mit der ID 'nameInput'
    let nameInput = document.getElementById('nameInput');

    // Holt das HTML-Element mit der ID 'greeting'
    let greeting = document.getElementById('greeting');

    // Holt den Wert (Text) des 'nameInput' Elements
    let name = nameInput.value;

    // Überprüft, ob der eingegebene Name nur aus Leerzeichen besteht
    if (name.trim() === '') {
        // Setzt den Textinhalt des 'greeting' Elements auf eine Aufforderung zur Eingabe eines Namens
        greeting.textContent = 'Bitte gib einen Namen ein.';
    } else {
        // Setzt den Textinhalt des 'greeting' Elements auf eine Begrüßungsnachricht mit dem eingegebenen Namen
        greeting.textContent = 'Hallo, ' + name + '!';
    }
}

// Event Listener für die Eingabe (Siehe Ereignisse)
document.getElementById('nameInput').addEventListener('input', greetUser);

// Konsolen-Ausgabe zur Demonstration
console.log('DOM Ereignisse Beispiel geladen.');
