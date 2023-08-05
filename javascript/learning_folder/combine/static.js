class Animal {
    constructor(name, color) {
        
        this.name=Animal.capitalize(name);
        this.color = color;
    }
    run() {
        console.log(this.name + " running");
    }
    shout() {
        console.log(this.name + " SShouting");
    }
    walk() {    
        console.log(this.name + " walking");
    }
    // capitalize(name) is only used in this class not outside
    static capitalize(){
        console.log(this.name.toUpperCase())
        return this.name.toUpperCase()
    }
}
chinku=new Animal("chinku","black");
chinku.walk();

// chinku.capitalize("you"); this does not work