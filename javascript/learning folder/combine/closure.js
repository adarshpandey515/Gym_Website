// default delcaration of any name is var 
hh=10; // this is global variable 
// it is not declared but it is declared by default as var
// var hh=10; // this is same as above
// let hh=10; // this is not global variable
// const hh=10; // this is not global variable
console.log(hh);
// lexical environment 
// // lexical environment

function init(){
    var firstName="adarsh";
    function display(){
        console.log(firstName);
    }    
    firstName="pandey";
    return display;

} 

let c=init();
c();
// function retured with its lexical environment Of parent funtion 
// clousre is a function with its lexical environment
// nested function is a closure with its lexical environment