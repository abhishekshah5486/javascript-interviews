// ==, ===

console.log(10+"30");
console.log(10+23+"2"); // expected output: 332

var a = 30;
var b = "10";
console.log(a - b); // expected output: 20
console.log(a * b); // expected output: 300
console.log(a / b); // expected output: 3

console.log(typeof(typeof(NaN)));

var a = 10;
var b = "I am a string";
console.log(a*b); // Expected output: NaN

// true false
var a = true;
var b = "I am a string";
console.log(a+b);
console.log(a*b);
console.log(2*true*20);
console.log(2*false);

console.log(true + 23);
console.log(false + 12);
console.log(true + true);

// comparative operators (==, ===)
// == :  checks only the value and not type
// === : checks value + type

if (3 == '3') {
    console.log("equal");
}
else {
    console.log("not equal.");
}
if (3 === '3') {
    console.log("equal");
}
else {
    console.log("not equal.");
}
if (NaN == NaN) {
     console.log("equal");
}
else {
    console.log("not equal.");
}
console.log(undefined==undefined);
console.log(undefined===undefined);