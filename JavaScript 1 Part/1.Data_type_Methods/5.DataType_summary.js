// primitive 

// 7 types: string, Number,Boolearn, null, Undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123');
const anotherId = Symbol('123')

// console.log(id === anotherId);

const BigInt = 488556567n

// Reference  (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman","Nagraj","doga"];
let myObj = {
    name : 'Trilochan',
    age : 22,
    Gender : "male" 
}

const firstFuntion = function(){
    console.log("Hello world");   
}

console.log(typeof heros)



// Note 

// undefined => "undefined"
// Null =>"object"
// Boolean => "boolean"
// string => "string"
// Number => "number"
// function => "function"
// object => "object"
// Array => "object"t

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive) =>  7 types: string, Number,Boolearn, null, Undefined, symbol, BigInt  "copy value"


let myYoutubeName = "Speritual"

let anotherName = myYoutubeName

anotherName = "trilochan"
console.log(anotherName);

// Heap (non-primitive) => Array, Objects, Functions  "Orginal value"


let userOne = {
    email : "user@google.com",
    upi: "user@ybl"
}
console.log(userOne);


let userTwo = userOne
userTwo.email = "trilochan@google.com"
userTwo.upi = "trilochan@ybl"
console.log(userTwo);
