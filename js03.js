function sayHi() {
    console.log("Welcome to Harvard.");
}

sayHi();

function serveBevarages(drink, quantity) {
    console.log("Here is your " + drink + "," + " qty-" + quantity);
}
serveBevarages("cold coffee", 3);

var varFunction = function (){
    console.log("I am a function expression.");
}
varFunction();

var arrowFunction = () => {
    console.log("I am an arrow function.");
}
arrowFunction();

var hof = (func)=>{
    console.log("This is a higher order function.");
    func();
    console.log("HOF takes another func as a argument.");
}
hof(arrowFunction);

// IIFE: Immediately invoked function
(function iife(){
    console.log("I am an IIFE function.");
})();

function sum(nm1, nm2) {
    return nm1 + nm2;
}
console.log(sum(3, -7));