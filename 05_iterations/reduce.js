
const num=[1,2,3]

const myTotal=num.reduce(function(acc,currVal) {

    // console.log(`acc: ${acc}, currVal: ${currVal}`);
    
    return acc+currVal
},0)

// console.log(myTotal);

const courses=[
    {
        name:"Web Dev",
        price:500
    },
    {
        name:"Data Science",
        price:200
    },
    {
        name:"AL/ML",
        price:700
    },
    {
        name:".Net",
        price:300
    },
]


const cartTotal=courses.reduce((acc,item) => acc + item.price, 0)

console.log(`Total price of all courses : ${cartTotal}`);
