let string = "Hello World";
console.log("Original string:", string);

// Concatenation
let concatenatedString = string + "!";
console.log("Concatenated string:", concatenatedString);

// Substring
let substring = string.substring(0, 5);
console.log("Substring:", substring);

// IndexOf
let index = string.indexOf("o");
console.log("Index of 'o':", index);

// Replace
let replacedString = string.replace("World", "Universe");
console.log("Replaced string:", replacedString);

// toUpperCase/toLowerCase
let upperCaseString = string.toUpperCase();
console.log("Uppercase string:", upperCaseString);
let lowerCaseString = string.toLowerCase();
console.log("Lowercase string:", lowerCaseString);

// Trim
let trimmedString = "   Hello World   ".trim();
console.log("Trimmed string:", trimmedString);

let strin = "Hello World";
let slicedString = strin.slice(0, 5); // "Hello"
console.log(strin);

let stri= "Hello World";
let startsWithHello = stri.startsWith("Hello"); // true
let endsWithWorld = stri.endsWith("World"); // true
console.log(stri);
let stringss = "Hello World";
let includesWorld = stringss.includes("World"); // true
let includesUniverse = stringss.includes("Universe"); // false



