class Railwayform{
    Railwayform(){

    }
    sumbit(){
        console.log("form summited")
    }
    cancel(){
    console.log("form cancelled")
}
fill(givenname){
    this.name=givenname
}
}
let harryform=new Railwayform();
let harryform2=new Railwayform();


harryform.fill("harry")
let rohanform=new Railwayform();
let rohanform2=new Railwayform();
rohanform.fill("rohan")
harryform.sumbit();         
harryform.cancel();
rohanform.sumbit();
rohanform2.cancel();