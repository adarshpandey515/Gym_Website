// class Railwayform{
//     constructor(givenname){
//         console.log("constructor called   with "+givenname)
//         this.name=givenname
//     }
//     sumbit(){
//         console.log("form summited  "+this.name)
//     }
//     cancel(){
//     console.log("form cancelled  "+this.name)

// }

// }
// let harryform=new Railwayform("adarsh  1");
// let harryform2=new Railwayform("adarsh  2");



// let rohanform=new Railwayform("rohan");
// let rohanform2=new Railwayform("rohan2");
// harryform.sumbit();         
// harryform2.cancel();
// rohanform.sumbit();
// rohanform2.cancel();
class Animal{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }
    run(){
        console.log(this.name+" running")
    }   
    shout(){    
        console.log(this.name+" SShouting")
    }   
}

class Monkey extends Animal{

    climb(){
        console.log(this.name+" climbing")
    }   
    eatfood(){   
        console.log(this.name+" eating food banana")
    }
    hide(){ 
        console.log(`${this.name}+ is  hiding`)
    }
  
}

let ani=new Monkey("monkey1","black");
let cani=new Animal("monkey2","orange");
let peny=new Monkey("monkey3","white");

ani.shout();
ani.run();
peny.eatfood();
// cani.climb(); This will give error