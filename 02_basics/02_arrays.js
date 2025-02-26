const marvel_Heros=["IronMan","Thor","Captain"]
const dc_Heros=["Superman","Batman","Flash"]

// marvel_Heros.push(dc_Heros)//it adds array as an element 
// console.log(marvel_Heros);


// const allHeros=marvel_Heros.concat(dc_Heros)
// console.log(allHeros);

// const all_new_Heros=[...marvel_Heros,...dc_Heros]//spread operator
// console.log(all_new_Heros);

const another_array=[1,2,3,[4,5,6],7,8,[9,10,[11,12]]]

const real_another_array=another_array.flat(Infinity)//flat returns the all sub arrays as single array
console.log(real_another_array);

console.log(Array.isArray("Suyash"))
console.log(Array.from("Suyash"))//convert to array


let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));//convert to array 
