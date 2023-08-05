alert('hello world')
const sum=(a,b)=> {
    console.log('yes i am requestAnimationFrame')
    
    console.log("the sum is "+( a+b));
    document.write(a+b);
}

setInterval(sum,2000,1,2);
// clearInterval(1);
//  let a =setTimeout(() => {
//     alert(' i am in time out');
// },6000);
// clearTimeout(a);
// document.write('hello world ')
// console.log(a);
