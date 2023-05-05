// for loop
// for in loop // deal with key 
// for of loop // deal with values
// while
// do while
let a=1;
for(let i=1;i<=5;i++){
a*=i;

}
console.log(a)
let obj={
    adarsh:87,
   
    shankar:39,
    rohit:32,
    shivangi:000,
    sanika:00000,
    zaheer:99,
    harsh:83,
    yogita:98,
    shikha:00
}
// always use let in loop not var becau. the var values will remain thourgh the entier code and let destorys after the brackets

// for in loop 
for(let a in obj){
    console.log("marks of "+a+" are "+obj[a])
}
// for of loop // only for iterable things like strigngs or array etc not objects
for(let b of "adfarsh "){
    console.log(b)
}
// let is only localy not globaly 
//if you declare in { let a } then it remains in that block only
// oppsite is var declare multiple times and change any where 
let i=5;
do{
console.log(i);
}while(--i)
