

class UserOne {
    constructor(username,email,password) {
        this.username=username;
        this.email=email;
        this.password=password;
        
    }

    encryptPass(){
        return`${this.password}axy`
    }
}


const chai = new UserOne("Pooja","pooja@google.com","1563");
console.log(chai.encryptPass());

//behind the scene if class was not pressent 

function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}

User.prototype.encryptPass= function(){
    return`${this.password}axy`
}

User.prototype.encryptName = function(){
    return`${this.username.toUpperCase()}`
}

const tea = new User("Komal","komal@amazon.com","4568");
console.log(tea.encryptPass());
console.log(tea.encryptName());

