const userEmail="abc@ai.co"

if(userEmail){
    console.log("Got user email");
    
}
else{
    console.log("User didn't entered email");
    
}

//Falsy values
/* false, 0, -0, BigInt 0n, null, "",  undefined, NaN, these all are treated as falsy values*/ 

//Truthy values
/* "0",  'false', " ", [], {}, function(){}   */ 

/*const userId=[]
if(userId.length === 0)
{
    console.log("An empty array");
    
}*/


// const emptyObject={}
// if (Object.keys(emptyObject).length === 0) {
//     console.log("Empty object");
    
// }

//Nullish Coalescing Operator (??): for null undefined

let val1;

// val1=5 ?? 10
// val1=null ?? 10
// val1=undefined ?? 15
// console.log(val1);

// Terniry Operator
// Condition ? true : false

let mark=50
mark >=70 ? console.log("Mark is more than 70") : console.log("Mark is less than 70");


