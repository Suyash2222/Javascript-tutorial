//Immediately Invoked Function Expressions (IIFE)
//()() first paranthesis is function and second is immediate call to that function


(function greet(){
    //named iife
    console.log("Hello User");
    
})();

( () => {
    //unnamed iife
    console.log(`Database Connected`);
    
}  )();

( (dbName) => {
    //parametrized iife
    console.log(`Database Connected to ${dbName}`);
    
}  )('MySQL');