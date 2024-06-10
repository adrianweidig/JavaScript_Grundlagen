// Operatoren in JavaScript

// 1. Arithmetische Operatoren:
//    - Addition (+), Subtraktion (-), Multiplikation (*), Division (/), Modulo (%)
//    - Beispiel und Konsolenausgabe:

let x = 10;
let y = 5;
let addition = x + y; // 15
console.log("Addition:", addition);

let subtraktion = x - y; // 5
console.log("Subtraktion:", subtraktion);

let multiplikation = x * y; // 50
console.log("Multiplikation:", multiplikation);

let division = x / y; // 2
console.log("Division:", division);

let modulo = x % y; // 0
console.log("Modulo:", modulo);

// 2. Zuweisungsoperatoren:
//    - Zuweisung (=), Additionzuweisung (+=), Subtraktionzuweisung (-=), Multiplikationszuweisung (*=), Divisionszuweisung (/=)
//    - Beispiel und Konsolenausgabe:

let a = 10;
console.log("a vor Addition:", a);
a += 5; // a ist jetzt 15
console.log("a nach Addition:", a);

console.log("a vor Subtraktion:", a);
a -= 3; // a ist jetzt 12
console.log("a nach Subtraktion:", a);

console.log("a vor Multiplikation:", a);
a *= 2; // a ist jetzt 24
console.log("a nach Multiplikation:", a);

console.log("a vor Division:", a);
a /= 4; // a ist jetzt 6
console.log("a nach Division:", a);

// 3. Vergleichsoperatoren:
//    - Gleich (==), Ungleich (!=), Strikte Gleichheit (===), Strikte Ungleichheit (!==), Größer (>), Größer oder gleich (>=), Kleiner (<), Kleiner oder gleich (<=)
//    - Die Operatoren == und != vergleichen nur die Werte, während === und !== sowohl die Werte als auch die Datentypen vergleichen.
//    - Verwende === und !==, um unerwartete Typkonvertierungen zu vermeiden, und == und != nur, wenn bewusst eine Typkonvertierung gewünscht ist.
//    - Beispiel und Konsolenausgabe:

let b = 10;
let c = '10';
let d = 5;

let gleich = b == c; // true (vergleicht nur den Wert, Typkonvertierung findet statt)
console.log("Gleich (==):", gleich);

let striktGleich = b === c; // false (vergleicht Wert und Typ, keine Typkonvertierung)
console.log("Strikte Gleichheit (===):", striktGleich);

let ungleich = b != c; // false (vergleicht nur den Wert, Typkonvertierung findet statt)
console.log("Ungleich (!=):", ungleich);

let striktUngleich = b !== c; // true (vergleicht Wert und Typ, keine Typkonvertierung)
console.log("Strikte Ungleichheit (!==):", striktUngleich);

let größer = b > d; // true
console.log("Größer (>):", größer);

let kleinerOderGleich = b <= d; // false
console.log("Kleiner oder gleich (<=):", kleinerOderGleich);

// 4. Logische Operatoren:
//    - Logisches Und (&&), Logisches Oder (||), Logisches Nicht (!)
//    - Beispiel und Konsolenausgabe:

let istWahr = true;
let istFalsch = false;
let logischesUnd = istWahr && istFalsch; // false
console.log("Logisches Und (&&):", logischesUnd);

let logischesOder = istWahr || istFalsch; // true
console.log("Logisches Oder (||):", logischesOder);

let logischesNicht = !istWahr; // false
console.log("Logisches Nicht (!):", logischesNicht);

// 5. Inkrement- und Dekrementoperatoren:
//    - Inkrement (++), Dekrement (--)
//    - Beispiel und Konsolenausgabe:

let nummer = 10;
console.log("Nummer vor Inkrement:", nummer);
nummer++; // nummer ist jetzt 11
console.log("Nummer nach Inkrement:", nummer);

console.log("Nummer vor Dekrement:", nummer);
nummer--; // nummer ist jetzt 10
console.log("Nummer nach Dekrement:", nummer);

// 6. Konditioneller (ternärer) Operator:
//    - Syntax: bedingung ? ausdruck1 : ausdruck2
//    - Beispiel und Konsolenausgabe:

let alter = 20;
let status = (alter >= 18) ? 'Erwachsener' : 'Kind'; // 'Erwachsener'
console.log("Status:", status);

// 7. Bitweise Operatoren:
//    - Bitweises Und (&), Bitweises Oder (|), Bitweises Nicht (~), Bitweises XOR (^), Linksverschiebung (<<), Rechtsverschiebung (>>), Unsigned Rechtsverschiebung (>>>)
//    - Beispiel und Konsolenausgabe:

let bitweiseUnd = 5 & 1; // 1 (0101 & 0001 = 0001)
console.log("Bitweises Und (&):", bitweiseUnd);

let bitweiseOder = 5 | 1; // 5 (0101 | 0001 = 0101)
console.log("Bitweises Oder (|):", bitweiseOder);

let bitweisesNicht = ~5; // -6 (~0101 = 1010, Zweierkomplement)
console.log("Bitweises Nicht (~):", bitweisesNicht);

let bitweiseXOR = 5 ^ 1; // 4 (0101 ^ 0001 = 0100)
console.log("Bitweises XOR (^):", bitweiseXOR);

let linksverschiebung = 5 << 1; // 10 (0101 << 1 = 1010)
console.log("Linksverschiebung (<<):", linksverschiebung);

let rechtsverschiebung = 5 >> 1; // 2 (0101 >> 1 = 0010)
console.log("Rechtsverschiebung (>>):", rechtsverschiebung);

let unsignedRechtsverschiebung = 5 >>> 1; // 2 (0101 >>> 1 = 0010)
console.log("Unsigned Rechtsverschiebung (>>>):", unsignedRechtsverschiebung);
