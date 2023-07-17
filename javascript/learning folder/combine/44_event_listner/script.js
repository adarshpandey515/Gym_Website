// alert('hello world')
// const sum=(a,b)=> {
//     console.log('yes i am requestAnimationFrame')
    
//     console.log("the sum is "+( a+b));
//     document.write(a+b);
// }

// setInterval(sum,2000,1,2);
// clearInterval(1);
//  let a =setTimeout(() => {
//     alert(' i am in time out');
// },6000);
// clearTimeout(a);
// document.write('hello world ')
// console.log(a);

// next episode
let me=document.getElementsByClassName('me')[0]
console.log(me);
let x=function(event){
    var btn=event;
    console.log(btn);
    // alert('hello world 1');
}
let y=function(event){
    
    console.log(event.currentTarget,event.clientX,event.clientY);
    // alert('hello world 2');
}
me.addEventListener('click',x)
me.addEventListener('click',y)

// let check=prompt('enter your choice 1 or 2');
// if(check=="2"){
//     me.removeEventListener('click',y)
// }else{
//     me.removeEventListener('click',x)
// }
