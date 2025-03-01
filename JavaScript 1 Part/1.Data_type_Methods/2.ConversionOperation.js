let score = 33;
console.log(typeof score);
console.log(typeof (score));


let score1 = "44";
let converNumber = Number(score1);
console.log(score1);
console.log(converNumber);  //44 is number not string


let score2 = "33abc";
let chageValue = Number(score2);
console.log(chageValue);  //NaN


const score3 = null;
const chageNumber = Number(score3);
console.log(score3);        //null
console.log(chageNumber);  //0


let scoreundefine = undefined;
let undefinedScore = Number(scoreundefine);
console.log(undefinedScore);  //NaN  => Full from Not a number

let value = true;
let converValue = Number(value);
console.log(converValue); //1 Numerical value

let converBoolean = 1;
let convertedbool = Boolean(converBoolean);
console.log(convertedbool);     //true



// 1=>true;0=>false
// ""=>false
// "Trilochan" =>true


let value2 = 55;
let converString = String(value2);
console.log(converString);
console.log(typeof converString);


let negval = 44
let convertNeg = -negval
console.log(convertNeg)


