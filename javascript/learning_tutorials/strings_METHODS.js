let name="Adarsh";
console.log(name.length);
// if quotes are used in lenGth is  counted ONLY SINGLE /n \t " etc

name1="Adarsh\n";
console.log(name1.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
// to slice the string 
console.log(name.slice(2,4));
// or use the end 
console.log(name.slice(2));   
// name="Adarsh"  
console.log(name.replace("Ada","ryp")) // THE FIRST input shd present in the string to continue;
console.log(name);
let friend="santosh"
console.log(name.concat("is a friend of ",friend,"  ok"))
let gfriend='             star      ***      ';
console.log(gfriend);
console.log(gfriend.trim()) // clear only starting and ending of the string
  
 

// ------THERE ARE MORE MANY  STRINGS METHODS IN JS
// ------SEARCH"REPLACE STRING METHOD IN JAVASCRIPT"

let fr='zaheer_shwet_tiwari'+'_sab pe bhari'; // CALLED CONCATINATE
console.log(fr);
//NOTE: -----------STRINGS ARE NOT CHANGED IN JS---------
// LIKE : fr[3]=d;
// BY SLICING OR OTHER METHODS STRINGS REMAINS SAME 
// THEREFORE  STRINGS ARE INVATABLE
// BUT NEW STRINGS CAN BE RETURNED

// includes
let aaa='the fox is true but not telling the false statement'
console.log(aaa.includes("fox"))  // returns true /false the condition on fox prsent 
// start_with and ends_with
console.log(aaa.startsWith("the")) // same endwith //returns true/false 

/* can't do aaa[2]="r" strigs are invatable       */
