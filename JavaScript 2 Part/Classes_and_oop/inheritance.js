class User {
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email;
        this.password = password;   
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const newuser = new Teacher ('chai', 'chai@gmail.com','123')

newuser.addCourse()