var arr = [1, 2, 3, 0, -4, true, false, "a"];
console.log(arr);

var arr2 = [];
var arr3 = [1, 2, [true, 0], ["a", "Abhishek"], -1, "b", false];
console.log(arr3);
arr3[4] = "Hello World.";
console.log(arr3);

var carCollection = ["Mercedes", "Tesla", "Ferrari", "Lamborghini"];
console.log(carCollection);
// Array static methods
console.log(Array.isArray(arr3[2]));
var arr4 = Array.from("^abc");
console.log(arr4);
var arr5 = Array.of([1, true], -1, false, "abc", undefined);
console.log(arr5);

// Array mutating methods
carCollection.push("Hyundai");
console.log(carCollection);
carCollection.pop();
console.log(carCollection);
carCollection.unshift("BMW");
console.log(carCollection);
carCollection.shift();
console.log(carCollection);
// splice is used to add, remove or replace elements in an array. It returns an array of removed elements.
// adding an element using splice
arr.splice(2, 0, "Audi", [true, -1]);
console.log(arr);
// removing multiple elements using splice
var removedElems = arr.splice(1, 3);
console.log(arr);
console.log(removedElems);
// replacing elements using splice
arr.splice(2, 2, "Replaced", 100, false);
console.log(arr);

// REORDER / MODIFY ARRAY (MUTATES)
arr = [1, -1, 0, 0, 6, -6];
arr.sort((a, b) => a-b); // ascending order
arr.sort((a, b) => b-a); // descending order
console.log(arr);
arr.reverse();
console.log(arr);