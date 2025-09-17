//  Primitive
// Primitive has 7 types :  String, Number, boolean, Null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const BigNumber = 23328437556459434798n;

// Refrence (Non Primitive)
// Array, Object, Functions

// Array
const heros = ["oggy", "taploo", "jhaploo"];
// Object
let myObj = {
  name: "faizan",
  age: 24,
};
// Function as variable
const myFunction = function () {
  console.log("Hello world");
};

// console.log(typeof BigNumber);

// *******************************MEMORY********

// Two Types: 1- Stack: It uses in all Primitive types,
// The value from Stake is always a copy.

// 2- Heap: It uses in all Non-primitive/Refrence types,
// The value from Non-primitive/Refrence is always a refrence (original).

let myYoutubename = "faizebhai";

let anothername = myYoutubename;
anothername = "chaiaurcode";

console.log(myYoutubename);
console.log(anothername);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "faizan@google.com";

console.log(userOne.email);
console.log(userTwo.email);

const name = "faizan";
const repoCount = 50;

// console.log(name + repoCount + "Value");

// string interpolation modren way to describe
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('faizan')

console.log(gameName [0]);
console.log(gameName. __proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(5));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(1, 5)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "     faizan      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://faizan.com/faizan%20rajput"

console.log(url.replace('%20', '-'));
console.log(url.includes('faizan'));









