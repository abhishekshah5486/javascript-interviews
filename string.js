var str = "Congratulations on getting accepted to Harvard!";
console.log(str);
// Final output should be: ["Congratulations", "on", "getting", "accepted", "to", "Harvard!"]
var wordsArr = Array.from(str);
console.log(wordsArr);
console.log(wordsArr.join(" "));
var wordsArr = str.split(" ");
console.log(wordsArr);

var arr = [];
var startIdx = 0;
for (var i=0; i<str.length; i++) {
    if (str.charAt(i) == " "){
        arr.push(str.substring(startIdx, i));
        startIdx = i+1;
    }
    else if (i == str.length-1) {
        arr.push(str.substring(startIdx, i));
    }
}
console.log(arr);

// CHECK / SEARCH STRING METHODS
console.log(str.length);
var str2 = " gotcha try something new . ";
// Trimming Spaces.
console.log(str2.trim());
console.log(str2.trimEnd());
console.log(str2.trimStart());
// Case conversion
console.log(str2.toLowerCase());
console.log(str2.toLocaleUpperCase());
// Searching 
console.log(str2.startsWith(" got"));
console.log(str2.endsWith("w."));
console.log(str2.lastIndexOf("e"));
console.log(str2.indexOf("tr"));
console.log(str2.includes("ings"));

// REPLACING 
var nstr = str.replace("Harvard", "Stanford Sloan");
console.log(nstr);
var nstr = str.replaceAll("c", "C");
console.log(nstr);
var narr = str2.trim().split(" ");
console.log(narr);
var nstr = str2.trim().split(" ").join("_");
console.log(nstr);

// Extract / Slice Methods
console.log(str.indexOf("accepted"));
var str3 = str.slice(-6, -1);
console.log(str3);
var str3 = str.substring(4, 10);
console.log(str3);

// padstart and padend
var str4 = "siddham".padStart(0, "0");
console.log(str4);
var str4 = "siddham".padStart(10, "0");
console.log(str4);
var str4 = "siddham".padEnd(15, "*");
console.log(str4);

// CONCATENATION
var firstName = "Abhishek";
var lastName = "Shah";
var fullName = firstName.concat(" ", lastName);
console.log(fullName);
var fullName2 = `${firstName} ${lastName}`;
var fullName2 = firstName + " " + lastName;
console.log(fullName2);

var str5 = firstName.repeat(3);
console.log(str5);
console.log(str5.charAt(5)); // does not -ve index
console.log(str5.at(-1)); // supports negative indexes.