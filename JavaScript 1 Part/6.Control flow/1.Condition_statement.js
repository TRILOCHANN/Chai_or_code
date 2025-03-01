// True = 1
// false = 0

// const isUserloggedIn = true 
// const temperature = 52
// if (temperature<50){
//     console.log("less then 50");
// }
// else{
//     console.log("Temperature is greaterthen 50");
// }

// < , > ,<= , >= , != ,== , ===,!==

const score = 200
if (score > 100){
    let power = "fly"
    // console.log(`user power :${power}`);
}
// console.log(`user power :${power}`);   /* this inside of fuction scope when it's not execute */

const balance = 1000

// if (balance >500)console.log("Text"),console.log("test2");        /*This is a implicite scope don't write a multipal line but one line will be execute but in mature code don't use coders */
 
// if (balance < 500){
//     console.log("less then 500");
// }
// else if (balance < 750){
//     console.log("less then 750");

// }
// else if (balance < 900){
//     console.log("less then 900")
// }
// else {
//     console.log("less then 1200")
// }

const userLoggedIn = true
const debitCard = true

const LoggedInfromgoolge = false
const LoggedInEmail = true


if (userLoggedIn && debitCard){
    console.log("Allow to Buy course");
    
}

if (LoggedInEmail || LoggedInfromgoolge){
    console.log("user logged in");
}