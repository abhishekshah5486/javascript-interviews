// console.log("Hello World !");
var str = "Harvard";
console.log(str);
console.log(str);

console.log(str);

console.log(str);

// Storing a numeric
var num = 10;
console.log(num);
// Storing a character or string
var str = "a";
console.log(str);
// Storing a boolean value
var bool = true;
var b2 = false;
console.log(b2);

// for loop
for (var i=0; i<=5; i++)
{
    console.log(i);
}

// While loop
var i = 0;
while (i <= 5)
{
    console.log(i);
    i++;
}

// do-while loop
// Runs the loop at least once, even if the condition is false.
var i = 6;
do {
    console.log(i); 
    i++;
}
while (i <= 5);

// enhanced loop
var arr = [1, 3, 4, -1, 0, 8, 5];
for (var item of arr) {
    console.log(item);
}

var count = 10;
while (count > 0) {
    console.log(count);
    count--;
}
if (count == 0) {
    console.log("Count is zero.");
}
else console.log("Count is not zero.");