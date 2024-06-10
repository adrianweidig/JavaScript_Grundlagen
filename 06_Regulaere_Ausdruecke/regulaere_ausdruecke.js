// 1. Grundlagen von regulären Ausdrücken in JavaScript

// 1.1 Was sind reguläre Ausdrücke?
//    - Reguläre Ausdrücke sind Muster, mit denen Sie Text suchen oder manipulieren können.
//    - Sie bestehen aus normalen Zeichen und Metazeichen.
//    - Beispiel:
const regex = /pattern/;
console.log("Test 'this is a pattern':", regex.test("this is a pattern")); // true
console.log("Test 'example text':", regex.test("example text")); // false

// Verwendungszweck: Reguläre Ausdrücke können verwendet werden, um nach bestimmten Zeichenfolgen in Texten zu suchen, z. B. um Schlüsselwörter zu identifizieren oder um bestimmte Muster zu erkennen.

// 2. Metazeichen und Quantifizierer in regulären Ausdrücken

// 2.1 Metazeichen
// Verwendungszweck: Das "." Metazeichen ermöglicht es, nach einem beliebigen Zeichen an einer bestimmten Position im Text zu suchen, was nützlich ist, wenn das genaue Zeichen unbekannt ist.
const dotRegex = /./;
console.log("Test 'abc':", dotRegex.test("abc")); // true
console.log("Test '':", dotRegex.test("")); // false

// 2.2 Quantifizierer
// Verwendungszweck: Quantifizierer ermöglichen es, nach einer bestimmten Anzahl von Wiederholungen eines Elements zu suchen, was nützlich ist, um beispielsweise nach Wörtern mit einer bestimmten Anzahl von Buchstaben zu suchen.
const wordRegex = /\w{5}/;
console.log("Test 'hello':", wordRegex.test("hello")); // true
console.log("Test 'hi':", wordRegex.test("hi")); // false

// 3. Gruppierung in regulären Ausdrücken

// 3.1 Gruppen
// Verwendungszweck: Gruppen ermöglichen es, Teile des regulären Ausdrucks zu gruppieren, um sie als einzelne Einheit zu behandeln, was nützlich ist, wenn bestimmte Muster wiederholt auftreten sollen.
const groupRegex = /(abc)+/;
console.log("Test 'abcabcabc':", groupRegex.test("abcabcabc")); // true
console.log("Test 'xyzxyz':", groupRegex.test("xyzxyz")); // false

// 3.2 Rückwärtsreferenzierung
// Verwendungszweck: Rückwärtsreferenzierung ermöglicht es, auf zuvor in Gruppen gefundenen Text zu verweisen, was nützlich ist, wenn nach wiederholten Mustern gesucht wird, wie beispielsweise doppelten Buchstaben.
const backReferenceRegex = /(\w)\1/;
console.log("Test 'hello':", backReferenceRegex.test("hello")); // true
console.log("Test 'world':", backReferenceRegex.test("world")); // false

// 4. Zeichenklassen in regulären Ausdrücken

// 4.1 Zeichenklassen
// Verwendungszweck: Zeichenklassen ermöglichen es, nach bestimmten Kategorien von Zeichen zu suchen, wie z. B. Vokalen oder Konsonanten, was nützlich ist, um Texte nach bestimmten Mustern zu durchsuchen.
const vowelRegex = /[aeiou]/;
console.log("Test 'apple':", vowelRegex.test("apple")); // true
console.log("Test 'xyz':", vowelRegex.test("xyz")); // false

// 4.2 Negierte Zeichenklassen
// Verwendungszweck: Negierte Zeichenklassen ermöglichen es, nach Zeichen zu suchen, die nicht in einer bestimmten Kategorie enthalten sind, was nützlich ist, um beispielsweise nach Nicht-Ziffern zu suchen.
const nonDigitRegex = /[^0-9]/;
console.log("Test 'hello':", nonDigitRegex.test("hello")); // true
console.log("Test '123':", nonDigitRegex.test("123")); // false

// 5. Assertions in regulären Ausdrücken

// 5.1 Positive Lookahead
// Verwendungszweck: Positive Lookaheads ermöglichen es, nach einem bestimmten Muster zu suchen, das von einem anderen Muster gefolgt wird, ohne das folgende Muster in das Ergebnis einzubeziehen, was nützlich ist, um bestimmte Kontexte zu identifizieren.
const positiveLookaheadRegex = /q(?=u)/;
console.log("Test 'qu':", positiveLookaheadRegex.test("qu")); // true
console.log("Test 'q':", positiveLookaheadRegex.test("q")); // false


// 5.2 Negative Lookahead
// Verwendungszweck: Negative Lookaheads ermöglichen es, nach einem Muster zu suchen, das nicht von einem anderen Muster gefolgt wird, was nützlich ist, um bestimmte Ausnahmen zu identifizieren.
const negativeLookaheadRegex = /q(?!u)/;
console.log("Test 'q':", negativeLookaheadRegex.test("q")); // true
console.log("Test 'qu':", negativeLookaheadRegex.test("qu")); // false
