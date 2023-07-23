class Railwayform{
    constructor(givenname){
        console.log("constructor called   with "+givenname)
        this.name=givenname
    }
    sumbit(){
        console.log("form summited  "+this.name)
    }
    cancel(){
    console.log("form cancelled  "+this.name)

}

}
let harryform=new Railwayform("adarsh  1");
let harryform2=new Railwayform("adarsh  2");



let rohanform=new Railwayform("rohan");
let rohanform2=new Railwayform("rohan2");
harryform.sumbit();         
harryform2.cancel();
rohanform.sumbit();
rohanform2.cancel();