//object literals

const mySym= Symbol("key1")

const JsUser={
    name:"Elizabeth",
    "Last Name":"Olsen",
    [mySym]:"myKey",
    email:"eli@hollywood.com",
    isLoggedIn:false,
    lastLoginDays:["Saturday","Thursday"]
}

// console.log(JsUser.name);
// console.log(JsUser["Last Name"]);
// console.log(JsUser[mySym]);//we use [] for accessing the symbol

// Object.freeze(JsUser)//further can not change anything after freezing an object
// console.log(JsUser);

 JsUser.greeting= function(){
    console.log("Hello World");
    
}
JsUser.greetingTwo= function(){
    console.log(`Hello ${this.name}`);
    
}

// console.log(JsUser.greeting)
// console.log(JsUser.greeting());

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo())
