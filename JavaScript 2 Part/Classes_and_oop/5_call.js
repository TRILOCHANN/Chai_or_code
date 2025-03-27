function setUsername(username){
    this.name = username 
}

function createUser(username, email,password){
    setUsername.call(this.username)

    this.uesremail = email
    this.userpassword = password
}

const chai = new createUser('chai',"chai@gmail.com",'22321')
console.log(chai);
