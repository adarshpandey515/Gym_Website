const fs = require("fs");
let text=fs.readFileSync("thefile.txt","utf-8");
text=text.replace("world","Adarsh");
text=text.split("\n \t");
console.log(text);
fs.writeFileSync("thefile.txt",text);

// let text = fs.readFileSync("dele.txt", "utf-8");
// text = text.replace("browser", "Rohan");

// console.log("The content of the file is")
// console.log(text);

// console.log("Creating a new file...")
// fs.writeFileSync("rohan.txt", text);