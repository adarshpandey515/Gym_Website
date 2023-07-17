let aa = document.getElementsByTagName('h3');
console.log(aa);
// aa[0].innerHTML = 'Hello, World!';

let q=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(aa[0])
            aa[0].innerHTML=" Intializing the program "
        },1000);
        resolve(99)
    })
}
let w=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(aa[1])
            aa[1].innerHTML=" Hacking the Shwet username in instragram"
        },2000);
        resolve(55)
    })
}
let e=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(aa[2])
            aa[2].innerHTML=" Username found shwet Tiwari 23"
        },3000);
        resolve(34)
    })
}
let r=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(aa[3])
            aa[3].innerHTML="Connecting to shwet facebook account to know passaword"
            resolve(45)
        },4000);
    })
}

async function run(){
 let a1=q();
 let a2=w();
 let a3=e();
 let a4=r();
 let sol= await Promise.all([a1,a2,a3,a4])
 console.log(a1,a2,a3,a4);
}
run();