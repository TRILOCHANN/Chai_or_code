 
// let a = 10
// const b = 20        /*That are globle variable*/
// var c = 40


// console.log(a)
// console.log(b)
// console.log(c)

let a = 20      /*global veriabla*/
if (true){              /*end of breakt when scope end */
let a = 70
const b = 80
var c = 90
// console.log(a)
}

// console.log(a)
// console.log(b)
// console.log(c)


function addno(num){
    return num + 1
}
    // console.log(addno(10));


const addnumber = function(num){
    return num + 2
}
// console.log(addnumber(8))

function one (){
    const users = "Trilochan"
    
    function two(){
        const websites = "youtube"
        console.log(users);
        
    }
    // console.log(websites);
    two()
    
}
// one()



if (true){
    const username = "Trilochan"
    if (username ==="Trilochan"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website)
}
// console.log(username) 

// +++++++++++++++++++++++++++++++++++++++++++

// Methods No-1
// console.log(addone(5))       /*This function will be execute*/
function addone(num){
    return num + 1
}

//Method No-2
const addtwo = function(num){
    return num + 2 
}
// console.log(addtwo(5))

