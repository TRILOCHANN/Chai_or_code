// singleton method
// object.creat    /*constrocter method */


// object literals
const Sym = Symbol("key1")


const Useer1 = {
    Name  : "Trilochan",
    "full name" :"Trilochan Pradhan",
    age : 20,
    Location : "Odisha",
    Email : "Trilochan@google.com",
    [Sym]:"key1",
    isLoggedIn : false ,
    lastLoginDays : ["Monday","saturday"]
}

// console.log(Useer1.Email)                  /*this is most uses decleartion */
// console.log(Useer1["Email"])                 /*it is most convinient and relative decleartation*/
// console.log(Useer1["full name"])
// console.log(Useer1[Sym])                   /*symbol declear in symbole javascript*/

// Object.freeze(Useer1)                   /*  its value can't change the vlaue from this objects */
Useer1.Email = "Trilochan@microsoft.com"           /* To assign the vlaue but can't be change the main vlaue for this object */
// console.log(Useer1["Email"])


Useer1.greeting = function(){
    console.log("Hello JS user")
}

console.log(Useer1.greeting)

// Useer1.greetingtwo = function(){         /*it is a declear a function */

/*String interpolation is a way to include variables or expressions inside a string. In JavaScript, you use template literals to achieve string interpolation. Template literals are enclosed by backticks (`), and you include variables or expressions inside ${}.*/ 

// console.log(`Hello JS user my name  is ,${this.Name}`);   
    
// }

// console.log(Useer1.greeting())
// console.log(Useer1.greetingtwo())






