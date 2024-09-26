// Variabler er containere for å lagre data i
// JS variabler kan bli deklarert på 4 måter:
// 1. automatisk
// 2. var
// 3. let
// 4. const

// Automatisk:
/*
x = 5;
y = 6;
z = x + y;
console.log(z);
*/


// Det er ansett som god praksisk å alltid deklarere variabler før bruk.
var x1 = 5;
var y1 = 6;
var z1 = x1 + y1;
console.log(z1);
// OBS
// var nøkkelordet ble brukt i all JS fra 1995 til 2015. var bør bare brukes i kode skrevet for eldre nettlesere.

// Let ble lagt til i JS i 2015
// Let kan tenkes på som "la". "La x2 være 5;"
let x2 = 5;
let y2 = 6;
let z2 = x2 + y2;
console.log(z2);

// let kan endres verdi på ved å redeklarere verdi, men da ved å utelate let-nøkkelordet for å
// redeklarere verdi automatisk:
z2 = 12;
console.log(z2);

// Const ble lagt til i JS i 2015
// Const deklarerer en konstant verdi og kan ikke bli endret.
const x3 = 5;
const y3 = 6;
const z3 = x3 + y3;
console.log(z3);

// z3 = 10; // Gir feilmelding "Attempt to assign to const or readonly variable"

/*
1. Alltid deklarer variabler
2. Alltid bruk const om verdien ikke skal endres.
3. Alltid bruk const om datatypen ikke skal endres (for arrayer og objekter)
4. Bare bruk let om du ikke kan bruke const
5. Bare bruk var om du MÅ støtte eldre nettlesere
*/


// Akkurat som i algebra så holder variabler på verdier
let x = 5;
let y = 6;
// Akkurat som i algebra så brukes variabler i uttrykk
let z = x + y;
console.log(z);

// JavaScript-identifikatorer
/*
Alle JS-variabler må identifiseres via unike navn. Disse unike navnene kalles identifikatorer (eller identifiers).
Identifiers kan være korte navn (som x og y) eller mer beskrive navn (som alder, sum eller totaltVolum). Følgende
ville for eksempel vært naturlige identifiers for å regne ut volum av en eske:
*/

// Angir verdien på lengden på boksen
let box_length = 30;

// Angir verdien på bredden på boksen
let box_width = 15;

// Angir verdien på høyden på boksen
let box_height = 10;

// Mellomrom i regnestykket for god lesbarhet for mennesker:
// Boksens volum = boksens lengde * boksens bredde * boksens høyde
let box_volume = (box_length * box_width * box_height);
console.log("Boksen er",box_volume,"cm^2");

// Tilordningsoperator
/*
I JS er likhetstegnet (=) en tilordningsoperator, ikke en "er lik"-operator. Det er forskjellig fra algebra.
x = x + 5 gir ikke mening i algebra. I javascript derimot betyr det at verdien av x tilordnes x + 5. Altså,
om x = 10 og x = x + 5 blir den nye verdien av x 15.*/
// Initiell verdi av 10 tilordnes variabelen x:
x = 10;
console.log("Nå er x:",x);
// Nå tilordnes x verdien av x (10) + 5;
// 1. x = 10;
// 2. x = 10 + 5
x = x + 5;
console.log("Nå er x:",x);
// 3. x = 15;
// 4. x = x + 5
// 5. x = 15 + 5
x = x + 5;
console.log("Nå er x:",x);
// 6. x = 20

// Apropos algebra kan du også gjøre aritmetikk med JS-variabler ved å bruke operatorer som = og +.
let abc = 5 + 2 + 3;
console.log("5 + 2 + 3 =",abc);

// Du kan også bruke tekststrenger, men de vil bli konkatenert
let tallOgNavn = "John" + " " + "Doe";
// logger John pluss mellomrom pluss Doe
console.log(tallOgNavn);

let tallOgNavn2 = "Jon" + 2;
// logger Jon + integer datatype 2
console.log(tallOgNavn2);

let tallOgNavn3 = "2" + 2;
// logger tekststring datatype 2 og konkatenerer integer datatype 2
console.log(tallOgNavn3)

let tallOgNavn4 = 2 + 2;
// logger summen av integer datatype 2 og integer datatype 2
console.log(tallOgNavn4);

