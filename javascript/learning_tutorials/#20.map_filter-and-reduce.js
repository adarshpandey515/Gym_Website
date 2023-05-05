let arr=[23,2,3.2,355,62,61,23,42,1,56,16]
// console.lar(arr)
// map filter etc all fxn in js can used create new fxn like them see #a
// -------------------THIS FXN NOT MODIFY ARRAY-----------------

// --- map -----
// create new arr so you can copy
let a=arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value+1+index
})
console.log("new array ",a)      

// array filter method
let a2=arr.filter((a)=>{
    console.log(a)
    return a<10
}
)
console.log("array filetred",a2)
 
// array reduced method: create two three or more intrator
let a3=arr.reduce((h1,h2)=>{
    return h1 +h2
})
// go through every value and add through next of it
console.log("the sum of all arr values",a3)

//  -----------#a
const reduce_fxn=(h1,h2) =>{
    return h1 +h2
}
let sum=arr.reduce(reduce_fxn) // reduce fxn used to create similar new fxn work same
console.log("THE SUM IS ",sum)
