// Step-1

// function addTwoNumber(number1,number2){
//     let result =number1+number2                  /*After return keyword not exucute any functions */   
// }
// const result = addTwoNumber(1,20);
// console.log("result:",result);              
// console.log("Result:",addTwoNumber(9,10));

// step-2

// function addTwoNumber(number1,number2){
//     let result =number1+number2                  
//     return result
//     // return number1+number2;
// }
// const result = addTwoNumber(20,50);
// console.log("Result:",result);
// console.log("Result:",addTwoNumber(40,60));



// conditional statement

function loginUserMessage(username){
if(username ===undefined){
    console.log("Please enter a username");
    return
}
return`${username} just logged in`
}
// console.log (loginUserMassage("Trilochan"))
// console.log (loginUserMessage())


// How to call in object in function 


// const user = {
//     userName:"Trilochan",
//     Price:199
// }

function handleObject(anyObject){
// console.log(`User name is ${anyObject.userName} and price is ${anyObject.Price}`)

}

handleObject({
userName:"Krishan",
Price:300,
car: "Thar"
})

// How to call in array function in return function 

const myNewArray = [100,400,300,700]

function returnSecondValue(getArray){
return getArray[3]
}

// console.log(returnSecondValue(myNewArray))
// console.log(returnSecondValue([500,300,200,140]))


function my_name(name){
// console.log(name.fruit);
}

obj = {car: "mercedes", fruit: "apple"};

// my_name(obj);



