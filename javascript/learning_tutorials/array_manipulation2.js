let num=[2,35,2222,5,2.52,3]
console.log(num.length)
delete num[0]

console.log(num,    num.length)
// the len not change in arrays after deletion
let nue=[3,33,6.33,53,3]
let new1=["33,",3,22,33,444,555,88]
let newAsarr=num.concat(nue,new1)
// not change other arrays
console.log("\nthe new arry is ",newAsarr)

// sorting
num[0]=9999
num.sort()

console.log(num) 
       /// modify orginal array
// NOte: the sort method in js for array sorts 
// ACORDING TO THE TREAT THE NO'S AND ALL AS STRING 
// SORTS ALPHABATICALLY 
// THEIR FOR FIRST ALL ONES THEN TWOS THEN THREES
// LIKE 3,35,5 IN THIS

