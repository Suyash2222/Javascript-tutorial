class User {
    constructor(username) {
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}


class Teacher extends User {
    constructor(username,email,pass) {
        super(username)
        this.email=email;
        this.pass=pass;
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`);
        
    }

}

const u1= new Teacher("Zoya","z@wipro.com","7890")
u1.addCourse()

console.log(u1 instanceof Teacher);
