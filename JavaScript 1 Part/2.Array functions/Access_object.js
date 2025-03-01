const user = {
    username:"Trilochan",
    price:999,
    WelcomeMessage:function(){
        console.log(`${this.username} , Welcome to website`);
        console.log(this);
    }
}
// user.WelcomeMessage()
// user.username = "sam"
// user.WelcomeMessage()


// const user1 ={
//     FullName:"Trilochan",
//     LastName:"Pradhan",
//     age:21,
//     Gender:"Male",
    
//     Studentdeta:function(){
//         console.log(this.FullName);
//     } 
// }

// user1.Studentdeta()


// console.log(this)        /*out side of scope it will be execute empty object but inside of object*/ 


// function one(){
//     let username = "Trilchan"
//     console.log(this);           /*it don't execute in function show in undefine but execute in object */
// }
// one()


const one = function (){
    let username = "Trilchan"
    console.log(this.username);     /*this.username output is undefined but only input inside paranthesis it will be execute some rendom text  */
}
// one()

