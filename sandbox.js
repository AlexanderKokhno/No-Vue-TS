// let character = 'mario';
// let age = 30;
// let isB = false;
// const circ = (diameter:number) => { // circ is a function
//   return diameter * Math.PI;
// }
// console.log(circ(7)); // circ is a function
//////////////////////////////////////////////////
var names = ['Bob', 'Tom', 'Phill'];
names.push('Frank');
// names.push(3) // errors not compiled
var mixed = ['Apple', 5, false]; // ts detects mutiple data types at start, that ok now
mixed.push('Blue');
mixed[0] = 3;
//////////////////////////////////////////////
var v1 = {
    name: 'VI',
    "class": 1
};
v1.name = 'V2';
// v1.name = 5; // no work! see?
// v1.skill = ['now', 'tmr'] // cant add new properties
// v1 = {
//   name: 'VI', // properties cant be removed/added once declared
// };
/////////////////////////////////////////////////
var char; // can predefine even without actual data in variable
var age;
var bob;
age = 30;
var ninjas; // array will only contain strings //array not actually empty
var ninjas2 = []; // can push to this
ninjas2.push('bob');
console.log(ninjas2);
