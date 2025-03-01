//For Of

const arr=[1,2,3,4,5,6]

for (const num of arr) {
    // console.log(num);
    
}

const greeting="Welcome to our Website"
for (const greet of greeting) {
    // console.log(`Each character is ${greet}`);
    
}

const map = new Map()
map.set('IN','India')
map.set('USA','United States Of America')
map.set('UAE','United Arab Emiraties')
map.set('FR','France')
map.set('IN','India')

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ': ', value);
    
}

const myObject={
    game1:"NFS",
    game2:"GTA"
}

// for (const [key,value] of myObject) {
//     // console.log(key,":",value) we can not itterate objects using for each loop
    
// }

const object1={
    js:"javascript",
    cpp:"C++",
    rb:"ruby"
}

// for (const key in object1) {
//    console.log(`${key} is shortcut for ${object1[key]}`);
   
// }


const language=["c","c++","java","python","javascript"]

// for (const key in language) {
//     console.log(language[key]);
    
// }

// language.forEach(function (value){
//     console.log(`languages are ${value}`);
    
// })

// language.forEach((items) => {
//     console.log(items);
    
// })

// function printMe(item){
//     console.log(item);
// }

// language.forEach(printMe)

// language.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })

const myCoding=[
    {
        lanuageName:"Java",
        extension:".java"
    },
    {
        lanuageName:"Javascript",
        extension:".js"
    },
    {
        lanuageName:"C",
        extension:".c"
    },
    {
        lanuageName:"Python",
        extension:".py"
    },
    
]

myCoding.forEach((item) =>{
    console.log(item.lanuageName);
    
})