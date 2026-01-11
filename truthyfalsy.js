if ('a') {
    console.log("Truthy value.");
}
else console.log("falsy value");

if (0) {
    console.log("truthy value.");
}
else console.log("falsy values");

var val = null;
if (val) {
    console.log("truthy value.");
}
else console.log("falsy value");

// All falsy values in JS
// false
// 0
// -0
// 0n (BigInt zero)
// "", '', `` (empty strings)
// null
// undefined
// NaN
