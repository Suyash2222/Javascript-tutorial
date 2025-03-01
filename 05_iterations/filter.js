
// filter

const numbers=[1,2,3,4,5,6,7,8,9,10]

// // const newNum=numbers.filter((num)=> num>5)

// const num1=numbers.filter((num) => {
//     return num>6
// })

// console.log(num1);





//chaining
const newNums= numbers
               .map( (num) => num * 10)
               .map( (num) => num +2 )
               .filter( (num) => num >50)

console.log(newNums);
               