// const obj= new Object();//singleton object
// console.log(obj);

const AppUser={
    email:"elie@max.com",
    UserDetails:{
        fullName:{
            FirstName:"Elizabeth",
            LastName:"Maxihoff"
        }
    }
}

// console.log(AppUser);


// console.log(AppUser.UserDetails.fullName.FirstName);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3=Object.assign({},obj1,obj2)
//The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. 
// It returns the modified target object.
const obj3={...obj1,...obj2}
// console.log(obj3);


// console.log(Object.keys(AppUser));
// console.log(Object.values(AppUser));
// console.log(Object.entries(AppUser));

//****************Object Destructuring***************************

const course={
    courseName:"FullStack",
    coursePrice:49999,
    courseInstructor:"Komal"
}

// console.log(course.courseInstructor);

const {courseInstructor: instructor} = course

console.log(instructor);
