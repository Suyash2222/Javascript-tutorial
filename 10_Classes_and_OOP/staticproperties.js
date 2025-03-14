class User {
    constructor(username) {
        this.username=username;
    }

    logMe(){
        console.log(`username: ${this.username}`);
        
    }

    static createID(){// static belong to the class itself rather than instances of the class
        return `123`
    }
}

const s = new User("Suyash")
// console.log(s.createID());

console.log(User.createID());
