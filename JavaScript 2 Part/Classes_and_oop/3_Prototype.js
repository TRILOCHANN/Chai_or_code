let myName = 'hitesh    '
let myChannel = 'chai    '

// console.log(myName.trueLength);

let myHeros = ['thor','spaider']

let heroPower = {
    thor:'hammer',
    spiderman:'sling',

    getSpaiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.trilochan = function(){
    console.log(`Trilochan`);
    
}

Array.prototype.HeyTrilochan = function(){
    console.log(`Trilochan says Hello `);
    
}
// heroPower.trilochan()
// myHeros.trilochan()
// myHeros.HeyTrilochan()



//inheritance

const user = {
    name:'chai',
    email:"code@gmail.com"
}

const Teacher = {
    makevideo : true
}
const TeachingSupport = {
    isAvailable:false
}
const TASupport = {
    makeAssignment:'js assignment',
    fulltime:true ,
    __proto__:TeachingSupport
}

Teacher.__proto__ = user


// modern syntax 
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = 'chai aur code   '

String.prototype.trueLength = function(){
    // console.log(`${this}`);
    // console.log(`${this.name}`); 
    console.log(`True length is:${this.trim().length}`);
    
}
anotherUsername.trueLength()