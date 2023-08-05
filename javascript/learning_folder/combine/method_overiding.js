class Employee {
  constructor(name, experience, division) {
    console.log("constructor called   with " + name);
    this.name = name;
    this.experience = experience;
    this.division = division;
  }
  slogan() {
    return `I am ${this.name} and this company is best`;
  }
  joiningyear() {
    console.log(this.name + " joining year is " + (2020 - this.experience));
    return 2020 - this.experience;
  }
  static add(a, b) {
    return a + b;
  }
  requestleaves(leaves) {
    console.log("\n \n employee want leaves " + (leaves + 1) + " \n \n");
  }
}
class Programmer extends Employee {
    // super constructore automatically will be called
    constructor(name,experience,division){
        // this.name="you" throws a error
        super(name,experience,division);
        console.log("\n this is programer\n")
    }
  requestCoffe(x) {
    console.log(`${x} want coffee`);
  }

  requestleaves(leaves) {
    super.requestleaves(leaves - 1);
    //method overiding is done with super keyword in javascript
    console.log("one extra not granted only " + leaves + " granted");
  }
}
let adarsh = new Programmer("adarsh", 10, "administrator");
console.log(adarsh.joiningyear());
console.log(Employee.add(5, 7));
console.log(adarsh.slogan());
console.log(adarsh);
adarsh.requestCoffe("adarsh");
adarsh.requestleaves(5);
let rohan = new Programmer("rohan", 10, "worker");
console.log(rohan.joiningyear());
