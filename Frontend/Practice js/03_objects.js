// singleton or constructor

// const tinderUser = new Object()
// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "sammy"
// tinderUser.isLoggedIn = false


// console.log(tinderUser)

// const regularUser = {
//     fullname:{
//         userfullname: {
//             firstname: "faizan",
//             lastname: "ali"
//         }
//     }
// }

// // console.log(regularUser.fullname.userfullname.firstname);


// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// // const obj3 = {obj1, obj2 }

// // const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

//  const users = [
//     {
//         id: 1, 
//         email: "f@gmail.com"
//     },
//     {
//         id: 1,
//         email: "f@gmail.com"
//     },
//     {
//         id: 1,
//         email: "f@gmail.com"
//     },
//  ]
//  users[1].email
//  console.log(tinderUser);

//  console.log(Object.keys(tinderUser));
//  console.log(Object.values(tinderUser));
//  console.log(Object.entries(tinderUser));

//  console.log(tinderUser.hasOwnProperty('isLogged'));
 
 
 
 const course = { 
    coursename: "js in urdu",
    price: "999",
    courseInstructor:"faizan" 
 }

 const {courseInstructor: instructor} = course

//  console.log(courseInstructor);
 console.log(instructor);
 