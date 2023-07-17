// let p1 =new Promise((resolve,reject)=>{
// setTimeout(() => {
//     resolve("value 1")
// },1000);
// });
// let p2 =new Promise((resolve,reject)=>{
// setTimeout(() => {
//     resolve("value 2")
// },2000);
// });
// let p3 =new Promise((resolve,reject)=>{
// setTimeout(() => {
//     resolve("value 3")
// },3000);
// });4

// let aa=hello((value)=>{
//      console.log('ejlllo');
// });

// p1.then((value)=>{
//     console.log(value);
// })
// p2.then((value)=>{
//     console.log(value);
// })
// p3.then((value)=>{
//     console.log(value);
// })

// let p4=Promise.all([p1,p2,p3])
// p4.then((value)=>{
//     console.log(value)
// })

// 57 //
// let p1=new Promise((resolve,reject)=>{
//     console.log("i am not  resolved");
// setTimeout(() => {
// resolve(1);
// }, 2000);
// })

// p1.then(()=>{
//     console.log("congratulations this promise is resolved")
// })

// p1.then(()=>{
//     console.log("g promise is hurray")
// })

// // 56 // promise chain
// // 59// Async / Await

// async function adarsh(){

//     let p1 =new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("value 1")
//         },4000);
//         });
//         let p2 =new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("value 2")
//         },7000);
//         });
//         // p1.then(alert);
//         // p2.then(alert);
//         console.log("delhi_val is loading please wait")
//         let delhi_val=await p1 // wait line by line exucation wait until delhe_val geted
//         console.log("Delhi value ="+delhi_val)
//         console.log("mum_val is loading please wait")

//         let mum_val=await p2
//         console.log("mumbai value ="+mum_val)
//         return [delhi_val,mum_val]
// }

// console.log("welcome to showing p1 and p2 ");
// let aa=adarsh()
// console.log(aa);

// 60 // Error handling
// setTimeout(() => {
//     console.log("hacking wifi password don't know who ons")

// }, 1000);

// setTimeout(() => {
//     console.log(" 2 hacking wifi password don't know who ons")

// }, 2000);
// setTimeout(() => {
//     console.log(" 3 hacking wifi password don't know who ons")

// }, 3000);
// try{
//     console.log(adarsh)
// }catch(Error){
// console.log("bale bale adarhs fxn mai error hai bhai")
// }
// setTimeout(() => {
//     console.log(" 4 hacking wifi password don't know who ons")

// }, 4000);

// 61 // error objects

// try {
//     console.log(adad)
//     throw new ReferenceError("adarhs is busy") // custom error
// } catch (error) {

//     console.log(error.name)
//     console.log(error.message)
//     if reference error then we can do other thing

//     console.log("printing of the error is done")
//     console.log(error)
//     console.log(error.stack)
// }
// try {
//     let age=prompt("Enter your age")
//     age=parseInt(age)
//     console.log(age)
//     if(age>18){
//         throw new ReferenceError(" adults are not allowed in the shoe house")
//     }

// } catch (error) {
//     console.log(error)
//     alert(error)
// }

// 62 // Finally cluase-always exucted irrespective of error
// try {
//     let a = 0;
//     // console.log(perform);
//     console.log("program run sucessfully");

//      // finally run even if return    
// } catch (error) {
//     console.log("this is an error");
//     console.log(poeoep);
//     console.log(error)
// } 
// finally {
//     console.log("i am a good boy"); // will run also after the runing of error
//     // colse the loop
//     // close the file
//     // write the log file
// }
// console.log("paka not printed becoz of error");


// practice set 9

// const loadScript=async (src)=>{
//     return new Promise((resolve,reject)=>{
//         let script=document.createElement("script")
//         script.src=src
//         script.onload=()=>{
//             resolve(src+'  done successfully')
//         }
//             document.head.append(script)
//     })
// }

// promblem no1
// let a=loadScript('https://code.jquery.com/jquery-3.4.1.slim.min.js')
// a.then((value)=>{
//     console.log(value+'  done')
// })
// problem no2
// async function main2(){
//     console.log(new Date())
//  let pp=await loadScript("https://code.jquery.com/jquery-3.4.1.slim.min.js")
//  console.log(pp)
// }
// main2();
// promblem 3

// let p=()=>{
//     return new Promise((resolve,reject)=>{
// setTimeout(() => {
//     reject(new Error ("please this is not a acceptable\n"))
// }, 3000)
// })
// }

// let a=async ()=>{
//     try {
//         let c=await p()
//         console.log(c)
        
        
//     }catch (error) {
//         console.log(error+'this error is handled')
//         }
//     }
//     a()

// prolbem 4 
let promise1=async()=>{
return new Promise((resolve,reject)=>{
setTimeout(() => {
    resolve(10)
}, 3000)
})
}
let promise2=async()=>{
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(30)
    }, 1000)
    })
    }
    let promise3=async()=>{
        return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(50)
        }, 2000)
        })
        }

        /*

            REMEMBER ALWAYS USE ARRAY THIS [] AT PROMISE ALL

        */
const run=async()=>{
    console.time('run')
    // let a1=await promise1()
    // let a2=await promise2()// will run in 6 s approx
    // let a3=await promise3()
    let a1=promise1()
    let a2=promise2()// will run in 6 s approx
    let a3=promise3()
    let meme= await Promise.all([a1,a2,a3]); //NOW ALL THE WORKS GOES PARALLE one in 3s
    console.log(meme)
    console.timeEnd('run')

}
run()