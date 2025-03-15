const descriptor= Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);


// console.log(Math.PI);
// Math.PI=6;
// console.log(Math.PI);


const coffee = {
    name:"Cold Coffee",
    price:300,
    isAvailable:true,

    OrderCoffee :function(){
        console.log("Cofee not available");
        
    }
}

// console.log(Object.getOwnPropertyDescriptor(coffee,"name"));

// Object.defineProperty(coffee,"name",{
//     //to configure the properties
//     writable:false,//using it we can not change the name again
//     enumerable:false//can not iterate
// })

console.log(Object.getOwnPropertyDescriptor(coffee,"name"));

for (const [key,value] of Object.entries(coffee)) {
    if( typeof value !== 'function'){
        console.log(`${key}:${value}`);
        
    }
    
}

