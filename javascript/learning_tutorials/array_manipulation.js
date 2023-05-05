let num=[1,2,3,4,5,55]
console.log(num)
let b = num.toString()
console.log(b) 
// to join it with  seprater
let c=num.join("-")
console.log(c,typeof(c))
let r=num.pop() // RETURNS THE POPED ELEMENT
console.log(num, "\nthe return of pop element",r)

// Note : some of arrays  fxn change array some just create new some returns something
//  see the notes for more info


let rr=num.push(57) // RETURNS NEW ELEMENT
console.log("the length of new arrayis :",rr)
console.log(num)


let e=num.shift() // returns first elemnet and remove from array 
console.log(e)
console.log(num)  // 1 is removed
 
let o=num.unshift(1) // add elemnt to new arry starting pos and return new length
console.log(o,num);

// shift and unshift are similar to push and pop

console.log("printing the num",num)   
num.reverse()
console.log('reverse',num)
