const mod=require('./tut-6-avg');

// console.log(avg([1,2,3,4,5,6,7,8,9,10])); // single function exported
//if we want to use this function in another file we have to export it

console.log(mod.avg([1,2,3,4,5,6,7,8,9,10])); // multiple functions exported
console.log(mod.name);
console.log(mod.repo);