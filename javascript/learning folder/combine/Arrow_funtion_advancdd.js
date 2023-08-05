
// var name = "John Doe";
// const sayHello = name => console.log(name); // will work
//     sayHello(name);
// const youuu = (name, great) => console.log(name); //more than one argument require paranthesis ()
// console.log(youuu(name,  "hello")); 

const x={
    name: "John Doe",
    role: "admin",
    experience: 3,
    show:function(){
        console.log(this.name+" "+this.role+" "+this.experience);
        setTimeout(function(){ // will not work because this is not defined in this function
            // will work if we use arrow function
            // arrow function will not create its own this keyword it will use the this keyword of its parent function this lexical scope of parent function is used by arrow function
            console.log(this.name+" "+this.role+" "+this.experience);
        },2000);

    }
}
x.show();