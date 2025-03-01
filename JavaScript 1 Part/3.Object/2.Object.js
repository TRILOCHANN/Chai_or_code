
// how to declear a constrocto or single turn


const tinderUser =  new Object()

tinderUser.id = "123abc"
tinderUser.name = "john"
tinderUser.isLoggedIn = false               

// console.log(tinderUser)               /*That can basics */


const regualrUser = {
    email:"Sam@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Samm",
            lastname:"kumar"
        } 
    }
}

// console.log(regualrUser.fullname.userfullname)


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

const obj3 = {obj1,obj2}           /*separate in the two part in  object type */


const obj5 = Object.assign({},obj1,obj2)     /*To add the object in the assign method it's called deep cloning */
// console.log(obj5)

const obj4={...obj1,...obj2}                /*this is a second method in assignment in javascript */
// console.log(obj4) 

// console.log(Object.keys(tinderUser))    

                       /*it will be answer from object for keys, value and keys & value pair in this object method it's return in array from*/

// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(Object.hasOwnProperty("name"))



let user1 = [
    {    ID:  100 ,
        Email : "Pradhan@gmail.com",
        Name :"Trilochan Pradhan",
    },
    {    ID:  101 ,
        Email : "rabindra@gmail.com",
        Name :"Rabindra Pradhan",
    },
    {    ID:  102 ,
        Email : "kanhu@gmail.com",
        Name :"Kanhu Pradhan",
    },
    ]
    
    // console.log(user1[1].Email)
    // console.log(user1[2].Name)
    // console.log(Object.keys(user1));
    // console.log(Object.values(user1));
    // console.log(Object.entries(user1));
    console.log(user1.hasOwnProperty("ID"));
    // console.log(user1.hasOwnProperty("phone no"));