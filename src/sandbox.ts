// let character = 'mario';
// let age = 30;
// let isB = false;
// const circ = (diameter:number) => { // circ is a function
//   return diameter * Math.PI;
// }
// console.log(circ(7)); // circ is a function
//////////////////////////////////////////////////
let names = ['Bob', 'Tom', 'Phill'];
names.push('Frank');
// names.push(3) // errors not compiled

let mixed = ['Apple', 5, false]; // ts detects mutiple data types at start, that ok now
mixed.push('Blue')
mixed[0] = 3;
//////////////////////////////////////////////
let v1 = {
  name: 'VI', // property type too cant change once declared
  class: 1,
};
v1.name = 'V2';
// v1.name = 5; // no work! see?
// v1.skill = ['now', 'tmr'] // cant add new properties
// v1 = {
//   name: 'VI', // properties cant be removed/added once declared
// };
/////////////////////////////////////////////////
let char: string; // can predefine even without actual data in variable
let age: number;
let bob: boolean;

age = 30;

let ninjas: string[]; // array will only contain strings //array not actually empty (must be declared)
let ninjas2: string[] = []; // can push to this
ninjas2.push('bob');
console.log(ninjas2);

let mixedAr: (string|number)[] = []; // can have both strings and numbers // called union types
mixedAr.push('Hi');
mixedAr.push(3);
console.log(mixedAr);

// let vv2: string|number; //no need for parenthasis when using a variable
// vv2 =  1;
// vv2 = 'working';
// console.log(vv2)
let mixedArVar: object;
mixedArVar = {name: 'bob', age:34}
// mixedArVar = 'no string' // cant convert object to string
mixedArVar = [] //array counts as object

let mixedArVar2: { // preditermine that it must be an object with these 3 properties and their corrlating types
  name: string;
  age: number;
  drink: string;
}
// mixedArVar2 = {} //missing properties
mixedArVar2 = { 
  name: 'Billy',
  age: 40,
  drink: 'blueberry'
}
///////////////////////////////////
let ageV1: any = 25; //any says it all
let mixedV: any[] = [];
let OBJv1: { name: any, age: any};
OBJv1 = { name: 30, age: true}
OBJv1 = { name: 'Billy', age: 50}
/////////////////////////////////
console.log('config is working')
/////////////////////////////////
let greet = () => {
  console.log('hello world')
}
// greet = 'hello' //cant change type
let greet2: Function; //yes, capital F
greet = () => {
  console.log('rolling back prices')
}
const add = (a: number, b: number, c: number| string = 10) => { //c?: optional (should be passed last), can also be a num or string. default set to 10, remove ? then 
  console.log(a+b);
  console.log(c) //will return undefined
}

add(5, 10, 'string passed ')

const minus = (a: number, b:number) => {
  return a + b;
}
let result = minus(10, 7); // knows result will be number type bassed on what what was passed
////////////////////////////////////////
