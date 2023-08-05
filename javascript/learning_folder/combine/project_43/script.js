// 43
// // console.log("hello world ")
// // console.log(document.body.firstElementChild)
// let a =document.getElementsByTagName("div")[0]  
// // a.innerHTML=a.innerHTML+"<h1> hello world </h1>";
// let div=document.createElement('div');
// div.innerHTML='<h2>Adarsh Pandey </h2>';
// a.replaceWith(div);
// 44

// first.insertAdjacentHTML('beforeend','<div class="text"> before end </div>')
// first.insertAdjacentHTML('afterend','<div class="text"> after end </div>')
// document.body.firstElementChild.remove()


//44
 let aa=document.body.getElementsByClassName("yellow")[0];
// aa.className="pink";
// aa.classList.add("text_dark");
// aa.classList.remove("text_dark");

// for(let i=0 ;i<399; i++){
//     aa.classList.toggle("text_dark");
//   // try using sleep
// }

//45


let lov=document.body.getElementsByClassName('love')[0];
console.log(lov);
var i=0;
lov.onclick=()=>{
    aa.classList.toggle("text_dark");
  let b= document.body.getElementsByClassName('yellow')[0]
  i++;
  b.innerHTML=b.innerHTML+"<br> some one clicked buttion  "+i+" times ";
  
    console.log("helolow wold ");
    // b.innerHTML="hello i am clicked";
}