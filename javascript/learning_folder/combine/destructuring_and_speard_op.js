// DEstructuring
let arr=[3,34,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9];
// let [a,b,...rest]=arr;
// console.log(a);
// console.log(b);
// console.log(rest);
// let [a, , , , ... rest] = arr;
// console.log(a);
// console.log(rest);
let {a,b,c} ={a:1,b:2,c:3};
console.log(a);
    console.log(b);
    console.log(c);

    // sperad operator
    let arr1=[13,32,33,324,542,426,7,834,92];
    let obj1={...arr1};
    console.log(obj1);

    function sum(v1,v2,v3){
        return v1+v2+v3
    }
    console.log(sum(...arr1));

    let obj2={
        name :"adarsh",
        Company:"google",
        address:"india"
        
    }
    console.log({...obj2,name:"zaheer",Company:"microsoft"});