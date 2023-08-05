// there are some js concepts which makes life easier iife is one of them
// iife is a function which is called as soon as it is defined
// iiife is used to make a private scope
let a=()=>{
  return  new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve("hello");
    }, 3000);
})

}
(async function(){
let b= await a();
console.log(b);

let c=await a();
console.log(c);

let d=await a();
console.log(d); 
})();// iffe is used here to make a fxn run immediately wihout calling it and nameing it
