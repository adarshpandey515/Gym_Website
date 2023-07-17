// let a=fetch("https://goweather.herokuapp.com/weather/Mumbai")
// console.log(a)
// a.then((value1)=>{
//     // console.log(value1.text())
//     return value1.json()
// }).then((value2)=>{
//     console.log(value2)
// })
// // AJAX  - asynchronous javascirpt and xml - not used  today but this method claled ajax

// post request
// let options={
//     method: "POST",
//     Headers:{
//         "Content-type": " application/json"
//     },
//     body: JSON.stringify({
//     title: 'adarsh',
//     body: 'ram',
//     userId: 1,
//   }),

// }
// fetch('https://jsonplaceholder.typicode.com/posts',options)
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// const create=async()=>{

// }
// let op={
//     method:"POST",
//     headers: {
//       "Content-type": "application/json"
//     },
//     body:JSON.stringify({
//       title:'Adarsh',
//       body: 'hey',
//       userId: 1292,
//     }),
// }
// let p=fetch('https://jsonplaceholder.typicode.com/posts', op)

// let response=await p.json()
// return response
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'PUT',
//   body: JSON.stringify({
//     id: 1,
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// 68 // cookies

// console.log(document.cookie) // to know the cookies on a webpage
// document.cookie = "name=sanika";
// document.cookie = "name2=shwet";
// document.cookie = "nam3=adarsh";
// // new cookies gets added with previous ones
// // let's store the cookies from the user
// let key=prompt("enter your age");
// let value=prompt("Enter your value ");
// document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`       // NOTE THIS CONFIGURATIONa

// console.log(document.cookie)    // if used semicolon in this warning //if encoded then key endocoded and no warning
// decodeURIComponent(key)
// Can't store many cookies at once

// cookie is Storage sended to server

// Locat storage //-----------------------------------------------------------IMP
// localStorage is only on comp and no effect or refresh

// let key = prompt("Enter the key you want to set");
// let value = prompt("Enter the value you want to set ");

// localStorage.setItem(key, value);
// console.log(`The value at ${key} is ${localStorage.getItem(key)}`); 
// // template littral only works with     `   ` not '     ' 
// if(key == "red" || key=="blue"){
//     localStorage.removeItem(key)
// }
// if(key=="0"){
//     localStorage.clear()
// }
// to get keys specific localStorage.key(3) or key  can be puted
// session Storage only survive only current browser tab while localStorage survive All
// all fxn's same for session storage like local same syntax
// sessionStorage.setItem("hello ","world");
// sessionStorage.clear()
// sessionStorage.setItem("hello1","world");
// sessionStorage.setItem("hello3","world");
// sessionStorage.setItem("hello9","world");
// console.log(sessionStorage.getItem("hello1"))
// localStorage.setItem("name-pandey","ada")
// localStorage.setItem("name-pandey","adarsh")
localStorage.clear()
window.onstorage =(e) => {
    alert("changed")
    console.log(e)
}

