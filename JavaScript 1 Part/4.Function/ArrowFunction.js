const user = {
    username:"Trilochan",
    price: 999,
    welcomeMassage:function(){
        console.log(`${this.username} ,Welcome to website`);
        // console.log(this);
        
    }
}
// user.welcomeMassage()
// user.username = "Ram"
// user.welcomeMassage()

// console.log(this);  /*Execute will be empty object  output => {}*/

function chai(){
    let usernames = "Trilochan"
    console.log(this);
}
// chai()


const fun = function chai(){
    let usernames = "Trilochan"
    console.log(this);
}
// console.log(fun);



const No = ()=>{
    let username = "Trilochan"      /* Arrow function will be only "this" print then  input its through empty object or corlibreaket but "this.username" input then will be print undefine both function and arrow function */
    console.log(this)
}
// No()

const addTwo = (num1,num2)=>{               /*first method */
    return num1 + num2
}


const addtwo = (num1,num2)=> num1+num2       /*second method*/ 
// const addtwo = (num1,num2)=> (num1+num2)

console.log(addTwo(20,30))


const username = ()=>({name:"Trilochan"})

// console.log(username())