// Q1 and Q2 are already practiced
// let  a=true;
// while(a){
//     console.log("enter the (e) to exit")
//   let b= readline.console();
//    if(b=="exit"){
//     break;
//    }

// }
// Q1 in for normal loop 
let marks={
    adarsh:38,
    pk:38,
    sanika:39,
    zaheer:30,
    shikah:33,
    abhishek:33
}   // for loop for maps or objects

for(let i=0;i<Object.keys(marks).length;i++)
{
    console.log("the marks of vcet stud. :"+ Object.keys(marks)[i]+" ="+marks[Object.keys(marks)[i]])
}
// shrcut is for in loop 
for(let i in marks){
    console.log("the marks of vcet std :  "+ i+" are ="+ marks[i])
}
// put in console of chrome 
let a=prompt("enter false for exit")
while(!a){
    console.log("a d a r s h ")
}

