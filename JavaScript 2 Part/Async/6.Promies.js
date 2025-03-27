// //method 1
// const promiseOne = new Promise(function(resolve,reject){
//     //Do as asyn tast
//     //DB calls , cryptograpthy ,network
//     setTimeout(function(){
//         console.log('Asyn task is complete');
//         resolve() 
//     },1000)
// })

// promiseOne.then(function(){
//     console.log('Promise consumed');
    
// })


// //method 2    Don't declear variable 
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task 2');
//         resolve()
//     },1000)

// }).then(function(){
//     console.log('Asunc 2 resolved');
// })


// //method 3      create a obj inside of resolve
// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({usernam:'trilochan',email:"trilochan@gmail.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user); 
// })


// // method 4        Create a conditional statement to use resolve and reject 
// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username:'hitesh',password:'123'})
//         }else{
//             reject('ERROR:Something went wrong')
//         }
//     })
// })
// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.username
// })
// .then((username)=>{
//     console.log(username);
    
// })
// .catch(function(e){
//     console.log(e);
    
// }).finally(()=>console.log('The promise is either resolve or rejected '))


// // Method  5        you can use async 
// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error) {
//             resolve({username:'javascript',password:'123'})
//         }else{
//             reject('Error:javascript went wrong')
//         }
//     },1000)
// });

// async function consumePromiseFive(){
//    try {
//     const response = await promiseFive
//     console.log(response);
//    } catch (error) {
//     console.log(error);
//    }
// }

// consumePromiseFive()

async function getAllUsers() {
    try {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary')
        console.log(response);
        
        // const data = await response.json()
        // console.log(data);
    } catch (e) {
        console.log(e);
    }
}

getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))