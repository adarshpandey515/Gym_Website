// #75 prototype
let a ={
    name:"adarsh",
    language:"js",
    run:()=>{
        console.log("run in a ")
    
}
}
console.log(a)


let p={
    run: ()=>{
        console.log("run");
    }
}
a.__proto__=p
a.run()
p.__proto__ ={
    name2:"adarsh in funland"
}
console.log(a.name2);
 