//Arrays are resizable in javascript
//ti can contain different data types

const myArr=[2,5,8]

// const myLaptops=["Hp","Asus","Samsung"]

// console.log(myArr);
// console.log(myLaptops);
// console.log(myLaptops[1]);

// const myArr2=new Array("Pooja","Komal","Hema")
// console.log(myArr2);

// *********Array Methods*************

// myArr.push(10)
// console.log(myArr);
// myArr.pop()//removes last element from array
// console.log(myArr);

// myArr.unshift(9)
// myArr.shift()//removes elemet at first position from array
// console.log(myArr);//add element at first position of array

//slice and splice

const arr1=[0,1,2,3,4,5]
console.log("A: ",arr1);

const newArr1=arr1.slice(1,3)

console.log("B: ",newArr1);

const newArr2= arr1.splice(1,3)//splice manipulate the original array it make different part of array
console.log(arr1);

console.log("C: ",newArr2);
