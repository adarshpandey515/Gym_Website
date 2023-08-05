console.log(a);
//console.log(aa);// let will throw error
// will print undeifned not throw error
great(); // run even if funciton in declared below // KNOWN AS HOISTING
// console.log(me);
// console.log(you);
function great(){
    console.log("hello");
}
let aa=10; // let must be initiliazed before use ///////////////////////////////IMP
// let and const are declared then go in temporal dead zone
var a=10; // Declaration hoisted to top but not initiliazation 
// also const or let funciton are not hoisted
const me=()=>{ // const funciton are not hoisted
    console.log("hello");
}
// also function expersion are not hosted by var 
let you=function(){
    console.log("hello");
}

// INshort:
// 1. funcitons are hosted
// 2. var are hosted
// 3.const and let are not hosted
// 4. function expersion are not hosted by var ,const and let also
// 5. var are initiliazed with undefined in hosting while let and const are not initiliazed they give error