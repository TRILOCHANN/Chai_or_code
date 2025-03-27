class User {
    constructor(username,email,password){
        this.NameofUser = username;
        this.personalEmail =email;
        this.UserPassword = password;
    }
    encryptopassword(){
        return`${this.UserPassword}abc`
    }
    changeUsername(){
        return`${this.NameofUser.toUpperCase()}`
    }
}

const user1 = new User('chai','chai@gmail.com','123')

// console.log(user1.encryptopassword());
// console.log(user1.changeUsername());


//Behind the scene 

function method2(username,email,password){
    this.nameofuser = username;
    this.useremail = email;
    this.userpassword = password;
}

method2.prototype.encryptopassword = function(){
    return `${this.userpassword}Abc`
}

const user2 = new method2('tea','tea@gmail.com','123')

console.log(user2.encryptopassword());

