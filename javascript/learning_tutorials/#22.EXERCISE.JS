// let a=Math.random()*100;
// console.log(a)
// // for 0 to 100 
// // Math.random()*100
// // for 1 to 100
// // Math.random()*(highest_100-lowest_1)+lowest
// let aa=Math.random()*(100-1)+1
// console.log(aa)

// for integer
let no=Math.floor((Math.random())*(100-1)+1)
console.log(no)
let guess
let i=0
while (guess!=no) {

guess=prompt("enter the number")
guess=Number.parseInt(guess)
i++
if(guess<no){
    console.log("number is greater than guessed number",guess)

}else if(guess>no){
    console.log("number is less than guessed number:",guess)

}else if(guess==no){
    console.log("you have guessed correct number :",no)
    console.log("your score is :",i)
}

}