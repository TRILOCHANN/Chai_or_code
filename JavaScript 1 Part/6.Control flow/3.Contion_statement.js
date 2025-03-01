
const userEmail = []

if (userEmail){
    console.log("got user email");
}
else{
    console.log("don't have user email");
}

// falsy values 

// false,0,-0, BigInt 0n, "" , null , undefined,NaN

// truthy value
// "0", "false"," ",[] , {} , function(){}


if (userEmail.length === 0){
    console.log("Array is empty")
}

const emptyobj = {}

if (Object.keys(emptyobj).length ===0){
    console.log("object is empty");
}

// Nullish coalescing Operator  (??): null undefined
// let val1;
// val1 = 5 ?? 10
// val = null ?? 10
// val = undefined ?? 15
// val1 = null ?? 10 ?? 20

// console.log(val1)


// Terniary Operator

// condtion ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less then 80"):console.log("more then 80") 


