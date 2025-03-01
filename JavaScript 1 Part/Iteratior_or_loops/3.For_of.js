// for of 

[{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr){
    // console.log(num);
    
}

// const greetings = "Hello world"
// for (const greet of greetings){
//     if (greet==" "){
//         console.log("Find the space")
//         break
//     }
//     console.log(`Each char is ${greet}`)
// }

// maps 


const map = new Map()
map.set('IN','INDIA') 
map.set('USA','UNITED STATE OF AMERICA')
map.set('FR','FRANCE')

// console.log(map) 

// for (const key of map){              /* it's output will be array format*/
//     console.log(key);
// }


for (const [key,value]of map){
    // console.log(key,":-",value);
}

const myObject = {
    game1: 'freefire',
    game2:'callof duety'
}

// for (const [key,value]of myObject){              /*Not executed in method intiration*/
//     console.log(key,":-",value);
// }

for (const key in myObject) {
    console.log(key,"=>",myObject[key])
}