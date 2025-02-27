
var c=200 //var has global scope
let b=100
if(true){
    const a=10;
    let b=20;
    // console.log("In Scope: ",b);
    
     c=30;//var has global scope
}

// console.log(a);
// console.log("global scope ",b);
// console.log(c);




function one(){
    const username="Suyash"

    function two(){
        const website="Youtube"
        console.log(username);
        
    }
    // console.log(website);

    two()
    
}

one()