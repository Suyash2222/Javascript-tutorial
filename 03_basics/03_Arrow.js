const user={
    username:"Pooja",
    email:"pooja@google.com",

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()

// user.username="Poojitha"
// user.welcomeMessage()

// ***********Arrow Function***************

// const add=(num1,num2) =>{
//     return num1 + num2
// }

// const add=(num1,num2) => num1 + num2 //implicite retutn
const add=(num1,num2) => (num1 + num2)
console.log(add(5,3));

const newUser =() => ({username:"Pooja"})
console.log(newUser());

