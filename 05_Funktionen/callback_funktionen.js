// Callback-Funktionen in JavaScript

// 1. Callback-Funktionen:
//    - Callback-Funktionen sind Funktionen, die als Argumente an andere Funktionen übergeben werden.
//    - Sie werden von der aufgerufenen Funktion ausgeführt, um einen bestimmten Prozess abzuschließen.
//    - Beispiel:

function processArray(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

// Callback-Funktion
function printElement(element) {
    console.log(element);
}

let numbers = [1, 2, 3, 4, 5];

// Aufruf der Funktion mit einer Callback-Funktion
processArray(numbers, printElement);
