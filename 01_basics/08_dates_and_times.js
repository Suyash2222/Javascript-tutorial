// Dates 

let myDate= new Date()
// console.log(myDate);
// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2024,0,15)
// let myCreatedDate = new Date(2024,0,15,4,2)
let myCreatedDate = new Date("02-22-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

console.log(myDate.toLocaleString('default',{
    weekday:"long",
    month:"short",
    year:"numeric"
})
);

