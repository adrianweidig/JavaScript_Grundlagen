// Benutzereingabe verarbeiten und grüßen

// Funktion zur Verarbeitung der Benutzereingabe
function greetUser() {
    let nameInput = document.getElementById('nameInput');
    let greeting = document.getElementById('greeting');
    let name = nameInput.value;

    if (name.trim() === '') {
        greeting.textContent = 'Bitte gib einen Namen ein.';
    } else {
        greeting.textContent = 'Hallo, ' + name + '!';
    }
}

// Event Listener für die Eingabe
document.getElementById('nameInput').addEventListener('input', greetUser);

// Konsolen-Ausgabe zur Demonstration
console.log('DOM Ereignisse Beispiel geladen.');
