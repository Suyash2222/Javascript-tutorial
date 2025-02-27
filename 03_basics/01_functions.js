

function sayMyName() {
    console.log("S")
    console.log("u")
    console.log("y")
    console.log("a")
    console.log("s")
    console.log("h")
}

// sayMyName()

function addNumber(num1,num2){
    // const result=num1+num2
    // return result

    return num1+num2
}
const result = addNumber(5,8)
// console.log("Result: ",result);

function userLogin(username){
    if(username === undefined /* or !username*/ ){
        console.log("Please enter a username");
        return
        
    }
    return`${username} you have logged in.`
}

// console.log(userLogin());

function calculateCartPrice(...price){// ... is spread or rest operator
    return price
}

// console.log(calculateCartPrice(100,200,300,400));

const product={
    pname:"Apple",
    price:150
}

function handleObject(anyObject){
    return`Product ${anyObject.pname} Price is ${anyObject.price}`
}

// console.log(handleObject(product));
// console.log(handleObject({
//     pname:"Laptop",
//     price:50000
// }));


const myNewArray=[100,200,400,600]

function getSecondValue(getArray){
    return getArray[1]
}
console.log(getSecondValue(myNewArray));
console.log(getSecondValue([500,800,900]));
