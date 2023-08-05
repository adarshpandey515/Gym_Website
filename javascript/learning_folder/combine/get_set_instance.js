class Animal{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }
    fly(){  
        console.log(this.name+"  udh raha hai");
    }
    get name(){
        return this._name;
    }
    set name(newName){
    this._name=newName;
    }
}

class Rabbit extends Animal{
    eatCarrot(){
        console.log("eating the carrot");
    }
}
let a=new Animal("mai","black");
let r=new Rabbit("muu","white")
a.fly();
console.log(a.name) // shows classes name mai
a.name="yellow " // yellow is not given to class directly used 
console.log(a.name)
console.log(a  instanceof Animal);
console.log(a instanceof Animal)