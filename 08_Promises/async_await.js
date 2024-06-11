// async_await.js: Verwendung von async/await für asynchrone Programmierung mit Promises.

// 1. Verwendung von async/await
//    - async/await ermöglicht eine asynchrone Programmierung mit einer syntaxähnlichen synchronen Programmierung.
//    - async wird vor einer Funktion platziert, um sie in eine asynchrone Funktion zu verwandeln, die immer ein Promise zurückgibt.
//    - await wird innerhalb einer asynchronen Funktion verwendet, um auf das Ergebnis eines Promise zu warten, ohne die .then()-Methode verwenden zu müssen.
//    - Beispiel:

async function fetchData() {
    try {
        const data = await fetchDataFromServer();
        processData(data);
        return true;
    } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error.message);
        return false;
    }
}
