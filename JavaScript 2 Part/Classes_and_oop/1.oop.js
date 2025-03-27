// Object literal
const user = {
    userName:'Hitesh',
    loginCount:7,
    signedIn:true,

    getUserDetails:function(){
        console.log('Got user details from database');
        console.log(`userName:${this.userName}`);
        
    }
}


console.log(user.userName);
console.log(user.getUserDetails());


//Constroctor function

// const promiseOne = new promise()
// const data = new Date()

function User(userName,loginCount,isLoggIn){
    this.usesName = userName
    this.loginCount= loginCount
    this.isLoggIn = isLoggIn

    return this
}
const userOne = new User('hitesh',12,true)
const userTwo= new User('hari',10,true)

// console.log(userOne);
// console.log(userTwo);

//you use new keyword then create a empty objecte instance 
//create a constroctor function  call new keyword all argument are return 

console.log(userOne.constructor);  //constructor method is reference to itself
