// fetch('').then().catch().finally()

const promiseOne = new Promise(function(resolve,reject){
    //do any async task
    //network call , DB calls, cryptography
    setTimeout(function(){
        console.log('async task is completed');
        resolve()//directly connected to then part
    },1000)
});

promiseOne.then(function(){
    console.log("Promise consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async Promise 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async task  2 completed");
    
})

const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName:'Pooja',email:"pooja@example.com"})
    },1000)
})
PromiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({userName:"Komal",passWord:"123"})
        }else{
            reject('ERROR:Something went wrong')
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.userName
    
}).then((username) => {
    console.log(username);
    
}).catch((err) => {
    console.log(err);
    
}).finally(()=> console.log("the promise is finally resolved either rejected")
)


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({userName:"Javascript",passWord:"123"})
        }else{
            reject('ERROR:JS went wrong')
        }
    },1000)
})

async function consumePromisFive(){
    try {
        const response=await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}

consumePromisFive()

// async function getAllUsers() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const data = await response.json()
//     console.log(data);
    
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
    
}).catch((err) => {
    console.log(err);
    
})