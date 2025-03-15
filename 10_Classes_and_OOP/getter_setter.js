class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}suyash`
    }

    set password(value){
        this._password = value
    }
}

const p = new User("pooja@eg.com", "abc")
console.log(p.password);