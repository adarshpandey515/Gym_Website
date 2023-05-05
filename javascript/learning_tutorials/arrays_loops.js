let arr=[2,35.2,3.52,22,5,2.5,2,835,2,522,5,5,222,555,3,11,5]
// normal loop
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)
}
// for each loop : to direct treat element
 
arr.forEach(element => {
    console.log("SQUARE OF ",element," = "  ,element* element)
});
// ARRAY FORM A.(OBJECT WHICH CAN CONVERTED INTO AN ARRAY)

// better then for normal loop :for of loop: very used
for(let i of arr){
    console.log("for of",i)
}

// for in same as for of : i is indx here
for(let i in arr){
    console.log("for in ",i)        
}
