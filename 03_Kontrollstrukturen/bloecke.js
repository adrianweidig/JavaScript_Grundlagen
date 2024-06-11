// 1. Grundlagen von Blöcken in JavaScript

// 1.1 Was sind Blöcke?
//    - Ein Block ist eine Anweisung, die aus null oder mehr Anweisungen besteht, die von geschweiften Klammern `{}` eingeschlossen sind.
//    - Blöcke werden häufig in Funktionen, Schleifen und Kontrollstrukturen verwendet.
//    - Beispiel:
{
    let x = 10;
    console.log(x); // 10
}

// Verwendungszweck: Blöcke helfen, den Gültigkeitsbereich von Variablen und Konstanten zu begrenzen und Code logisch zu gruppieren.

// 2. Block-Scope und Variablen

// 2.1 Block-Scope mit `let` und `const`
// Verwendungszweck: `let` und `const` haben Block-Scope, was bedeutet, dass sie nur innerhalb des Blocks zugänglich sind, in dem sie deklariert wurden.
{
    let y = 20;
    const z = 30;
    console.log(y); // 20
    console.log(z); // 30
}
// console.log(y); // ReferenceError: y is not defined
// console.log(z); // ReferenceError: z is not defined

// 2.2 Unterschiede zu `var`
// Verwendungszweck: `var` hat keinen Block-Scope, sondern einen Funktions- oder globalen Scope.
{
    var a = 40;
    console.log(a); // 40
}
console.log(a); // 40

// 3. Blöcke in Schleifen und Konditionalen

// 3.1 Blöcke in Schleifen
// Verwendungszweck: Blöcke werden häufig in Schleifen verwendet, um den Gültigkeitsbereich von Variablen zu begrenzen.
for (let i = 0; i < 3; i++) {
    let loopVar = i * 2;
    console.log(loopVar); // 0, 2, 4
}
// console.log(loopVar); // ReferenceError: loopVar is not defined

// 3.2 Blöcke in `if`-Anweisungen
// Verwendungszweck: Blöcke werden in `if`-Anweisungen verwendet, um Code nur unter bestimmten Bedingungen auszuführen.
let condition = true;
if (condition) {
    let message = 'Bedingung ist wahr';
    console.log(message); // Bedingung ist wahr
}
// console.log(message); // ReferenceError: message is not defined

// 4. Verschachtelte Blöcke

// 4.1 Verschachtelte Blöcke und Gültigkeitsbereiche
// Verwendungszweck: Verschachtelte Blöcke ermöglichen es, den Gültigkeitsbereich von Variablen weiter zu begrenzen.
{
    let outerVar = 'außen';
    {
        let innerVar = 'innen';
        console.log(outerVar); // außen
        console.log(innerVar); // innen
    }
    // console.log(innerVar); // ReferenceError: innerVar is not defined
}

// 5. Temporärer Totraum (Temporal Dead Zone)

// 5.1 Erklärung und Beispiel
// Verwendungszweck: Der temporäre Totraum (TDZ) bezieht sich auf den Zeitraum von der Bindung der `let`- oder `const`-Variable bis zu ihrer Initialisierung, währenddessen die Variable nicht zugänglich ist.
{
    // console.log(tempVar); // ReferenceError: Cannot access 'tempVar' before initialization
    let tempVar = 'TDZ Beispiel';
    console.log(tempVar); // TDZ Beispiel
}

// 6. Abschluss
//    - Blöcke sind ein grundlegendes Konzept in JavaScript, das hilft, den Gültigkeitsbereich von Variablen zu steuern und Code logisch zu strukturieren.
//    - Die Verwendung von `let` und `const` innerhalb von Blöcken ist vorzuziehen, um unvorhersehbare Fehler zu vermeiden, die durch `var` verursacht werden können.
//    - Das Verständnis von Blöcken und Block-Scope ist entscheidend für das Schreiben von sicherem und lesbarem JavaScript-Code.
