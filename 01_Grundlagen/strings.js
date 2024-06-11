// Strings in JavaScript

// 1. Einführung in Strings
//    - Strings sind eine Folge von Zeichen, die in Anführungszeichen eingeschlossen sind.
//    - In JavaScript können Strings mit einfachen, doppelten oder Backticks erstellt werden.
//    - Beispiel:

let singleQuoteString = 'Hallo Welt';
let doubleQuoteString = "Hallo Welt";
let backtickString = `Hallo Welt`;

console.log(singleQuoteString); // Ausgabe: Hallo Welt
console.log(doubleQuoteString); // Ausgabe: Hallo Welt
console.log(backtickString);    // Ausgabe: Hallo Welt

// 2. String-Methoden

// 2.1 Länge eines Strings
//    - Die Länge eines Strings kann mit der `length`-Eigenschaft ermittelt werden.
//    - Beispiel:

let text = "JavaScript";
console.log(text.length); // Ausgabe: 10

// 2.2 Zugriff auf Zeichen
//    - Auf einzelne Zeichen eines Strings kann mit der Index-Syntax zugegriffen werden.
//    - Beispiel:

console.log(text[0]); // Ausgabe: J
console.log(text.charAt(1)); // Ausgabe: a

// 2.3 String-Konkatenation
//    - Strings können mit dem `+` Operator oder `+=` Operator zusammengefügt werden.
//    - Beispiel:

let greeting = "Hallo";
let name = "Alice";
let message = greeting + ", " + name + "!";
console.log(message); // Ausgabe: Hallo, Alice!

// 2.4 Template-Literale
//    - Template-Literale ermöglichen die Interpolation von Variablen und Ausdrücken innerhalb von Strings.
//    - Sie werden mit Backticks erstellt.
//    - Beispiel:

let age = 25;
let info = `Mein Name ist ${name} und ich bin ${age} Jahre alt.`;
console.log(info); // Ausgabe: Mein Name ist Alice und ich bin 25 Jahre alt.

// 2.5 Wichtige String-Methoden

// 2.5.1 toUpperCase und toLowerCase
//    - Konvertieren eines Strings in Großbuchstaben oder Kleinbuchstaben.
//    - Beispiel:

let lower = "hello world";
let upper = lower.toUpperCase();
console.log(upper); // Ausgabe: HELLO WORLD

let mixed = "JavaScript";
let lowerMixed = mixed.toLowerCase();
console.log(lowerMixed); // Ausgabe: javascript

// 2.5.2 includes
//    - Überprüft, ob ein String einen bestimmten Teilstring enthält.
//    - Beispiel:

let sentence = "Das ist ein Test.";
console.log(sentence.includes("Test")); // Ausgabe: true
console.log(sentence.includes("Beispiel")); // Ausgabe: false

// 2.5.3 startsWith und endsWith
//    - Überprüft, ob ein String mit einem bestimmten Teilstring beginnt oder endet.
//    - Beispiel:

console.log(sentence.startsWith("Das")); // Ausgabe: true
console.log(sentence.endsWith("Test.")); // Ausgabe: true

// 2.5.4 substring, substr und slice
//    - Extrahieren eines Teilstrings aus einem String.
//    - Beispiel:

let str = "JavaScript";
console.log(str.substring(0, 4)); // Ausgabe: Java
console.log(str.substr(4, 6)); // Ausgabe: Script
console.log(str.slice(-6)); // Ausgabe: Script

// 2.5.5 split und join
//    - Aufteilen eines Strings in ein Array und Zusammenfügen eines Arrays zu einem String.
//    - Beispiel:

let csv = "Apfel,Banane,Kiwi";
let fruits = csv.split(",");
console.log(fruits); // Ausgabe: ["Apfel", "Banane", "Kiwi"]

let newCsv = fruits.join(";");
console.log(newCsv); // Ausgabe: Apfel;Banane;Kiwi

// 2.5.6 trim
//    - Entfernt Leerzeichen am Anfang und Ende eines Strings.
//    - Beispiel:

let padded = "  Hallo Welt  ";
let trimmed = padded.trim();
console.log(trimmed); // Ausgabe: Hallo Welt

// 3. Funktionen der String-Klasse

// 3.1 String.raw
//    - Erstellt einen String unter Verwendung von Roh-String-Literals, insbesondere nützlich für Template-Strings
//    - Beispiel:

let rawString = String.raw`C:\Entwicklung\Beispiel`;
console.log(rawString); // Ausgabe: C:\Entwicklung\Beispiel

// 3.2 String.fromCharCode
//    - Erstellt einen String aus UTF-16 Code Units
//    - Beispiel:

let charCodeString = String.fromCharCode(72, 101, 108, 108, 111);
console.log(charCodeString); // Ausgabe: Hello

// 3.3 String.fromCodePoint
//    - Erstellt einen String aus Unicode-Codepunkten
//    - Beispiel:

let codePointString = String.fromCodePoint(128512);
console.log(codePointString); // Ausgabe: 😀

// 3.4 String.prototype.concat
//    - Verkettet zwei oder mehr Strings und gibt einen neuen String zurück.
//    - Beispiel:

let string1 = "Hello";
let string2 = "World";
let concatenatedString = string1.concat(" ", string2);
console.log(concatenatedString); // Ausgabe: Hello World

// 3.5 String.prototype.replace
//    - Ersetzt ein Teilzeichen oder ein Muster in einem String durch einen anderen String.
//    - Beispiel:

let originalString = "Ich liebe JavaScript";
let newString = originalString.replace("JavaScript", "Programmierung");
console.log(newString); // Ausgabe: Ich liebe Programmierung

// 3.6 String.prototype.match
//    - Sucht in einem String nach Übereinstimmungen mit einem regulären Ausdruck und gibt das Ergebnis als Array zurück.
//    - Beispiel:

let regexString = "123-456-7890";
let regexPattern = /\d{3}/g;
let matches = regexString.match(regexPattern);
console.log(matches); // Ausgabe: ["123", "456", "789"]

// 3.7 String.prototype.search
//    - Sucht nach einem regulären Ausdruck in einem String und gibt den Index der ersten Übereinstimmung zurück.
//    - Beispiel:

let searchString = "JavaScript ist großartig";
let searchPattern = /ist/;
let searchIndex = searchString.search(searchPattern);
console.log(searchIndex); // Ausgabe: 11

// 3.8 String.prototype.startsWith
//    - Prüft, ob ein String mit den angegebenen Zeichen beginnt.
//    - Beispiel:

let startsWithString = "Hello World";
console.log(startsWithString.startsWith("Hello")); // Ausgabe: true
console.log(startsWithString.startsWith("World")); // Ausgabe: false

// 3.9 String.prototype.endsWith
//    - Prüft, ob ein String mit den angegebenen Zeichen endet.
//    - Beispiel:

let endsWithString = "Hello World";
console.log(endsWithString.endsWith("World")); // Ausgabe: true
console.log(endsWithString.endsWith("Hello")); // Ausgabe: false

// 3.10 String.prototype.includes
//    - Prüft, ob ein String eine bestimmte Zeichenfolge enthält.
//    - Beispiel:

let includesString = "JavaScript ist toll";
console.log(includesString.includes("toll")); // Ausgabe: true
console.log(includesString.includes("langweilig")); // Ausgabe: false

// 3.11 String.prototype.repeat
//    - Wiederholt einen String eine bestimmte Anzahl von Malen und gibt ihn zurück.
//    - Beispiel:

let repeatString = "Ha";
console.log(repeatString.repeat(3)); // Ausgabe: HaHaHa

// 3.12 String.prototype.padStart
//    - Füllt den aktuellen String von Anfang an mit einer bestimmten Zeichenfolge bis zur gewünschten Länge auf.
//    - Beispiel:

let padStartString = "5";
console.log(padStartString.padStart(3, "0")); // Ausgabe: 005

// 3.13 String.prototype.padEnd
//    - Füllt den aktuellen String von Ende an mit einer bestimmten Zeichenfolge bis zur gewünschten Länge auf.
//    - Beispiel:

let padEndString = "5";
console.log(padEndString.padEnd(3, "0")); // Ausgabe: 500

// 3.14 String.prototype.codePointAt
//    - Gibt einen nicht-negativen ganzzahligen Wert zurück, der den Unicode-Codepunkt für die Einheit darstellt.
//    - Beispiel:

let codePointString2 = "ABC";
console.log(codePointString2.codePointAt(1)); // Ausgabe: 66

// 3.15 String.prototype.normalize
//    - Gibt eine Unicode-Normalisierung der Zeichenfolge zurück.
//    - Beispiel:

let normalizeString = "\u1E9B\u0323";
console.log(normalizeString.normalize("NFC")); // Ausgabe: ẛ̣

// 3.16 String.prototype.localeCompare
//    - Vergleicht zwei Strings und gibt eine Zahl zurück, die angibt, ob der referenzierte String vor, nach oder gleich dem verglichenen String ist.
//    - Beispiel:

let stringA = "a";
let stringB = "b";
console.log(stringA.localeCompare(stringB)); // Ausgabe: -1 (a kommt vor b)
console.log(stringB.localeCompare(stringA)); // Ausgabe: 1 (b kommt nach a)
console.log(stringA.localeCompare("a")); // Ausgabe: 0 (Strings sind gleich)

// 3.17 String.prototype.valueOf
//    - Gibt den primitiven Wert des String-Objekts zurück.
//    - Beispiel:

let primitiveString = new String("Hello World");
console.log(primitiveString.valueOf()); // Ausgabe: Hello World

// 3.18 String.prototype.trimStart
//    - Entfernt Leerzeichen vom Anfang eines Strings.
//    - Beispiel:

let trimStartString = "   Hallo Welt";
console.log(trimStartString.trimStart()); // Ausgabe: "Hallo Welt"

// 3.19 String.prototype.trimEnd
//    - Entfernt Leerzeichen vom Ende eines Strings.
//    - Beispiel:

let trimEndString = "Hallo Welt   ";
console.log(trimEndString.trimEnd()); // Ausgabe: "Hallo Welt"

// 3.20 String.prototype.at
//    - Gibt das Zeichen an der angegebenen Position zurück.
//    - Beispiel:

let atString = "JavaScript";
console.log(atString.at(4)); // Ausgabe: S
console.log(atString.at(-1)); // Ausgabe: t (negative Indexe sind erlaubt)

// 3.21 String.prototype.replaceAll
//    - Ersetzt alle Vorkommen eines Teilstrings durch einen neuen String.
//    - Beispiel:

let replaceAllString = "Die Katze saß auf der Matte. Die Katze schnurrte.";
let newReplaceAllString = replaceAllString.replaceAll("Katze", "Hund");
console.log(newReplaceAllString); // Ausgabe: Die Hund saß auf der Matte. Die Hund schnurrte.

// 3.22 String.prototype.toLocaleLowerCase und toLocaleUpperCase
//    - Konvertiert den String unter Berücksichtigung der aktuellen Gebietsschema-Einstellungen in Kleinbuchstaben oder Großbuchstaben.
//    - Beispiel:

let localeString = "İstanbul";
console.log(localeString.toLocaleLowerCase('tr-TR')); // Ausgabe: istanbul (Türkische Kleinbuchstaben)
console.log(localeString.toLocaleUpperCase('tr-TR')); // Ausgabe: İSTANBUL (Türkische Großbuchstaben)

// 3.23 String.prototype.matchAll
//    - Gibt alle Ergebnisse, einschließlich Capturing-Gruppen, eines übereinstimmenden Strings zurück.
//    - Beispiel:

let matchAllString = "test1test2";
let regex = /t(e)(st(\d?))/g;
let matchArray = [...matchAllString.matchAll(regex)];
console.log(matchArray);
// Ausgabe:
// [
//   ["test1", "e", "st1", "1", index: 0, input: "test1test2", groups: undefined],
//   ["test2", "e", "st2", "2", index: 5, input: "test1test2", groups: undefined]
// ]

// 3.24 String.prototype.toString
//    - Gibt eine Zeichenfolge zurück, die den angegebenen String darstellt.
//    - Beispiel:

let stringObject = new String("JavaScript");
console.log(stringObject.toString()); // Ausgabe: JavaScript

// 4. Abschluss
//    - Strings sind grundlegende Bausteine in JavaScript, die viele nützliche Methoden zur Manipulation und Untersuchung bieten.
//    - Die String-Klasse bietet zusätzliche Funktionen, die bei der Arbeit mit Strings nützlich sein können.
//    - Das Verständnis dieser Methoden ermöglicht es Ihnen, effektiv mit Texten und Daten zu arbeiten.
