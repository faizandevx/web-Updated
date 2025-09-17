// // singleton



// // object literals

// const mySym = Symbol("key1")

// const JsUser = {
//     name: "Faizan",
//     "full name": "Faizan Ali Rajput",
//     mySym: "mykey1",
//     age: 20,
//     location: "Sahiwal",    
//     email: "faizan@google.com",
//     isLoggedIn: false,
//     LastLoggedinDays: ["Monday", "Saturday"]
// }

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "faizan@chatgpt.com"
// // Object.freeze(JsUser)
// JsUser.email = "faizan@microsoft.com"
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }

// JsUser.greetingTwo = function(){
//     console.log(`Hello Js user, ${this.name}`);   
// }
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());





// for(let i =0 ; i < fizan.length ; i++ )
// {
//     console.log(fizan[i]);
// }

// let fizan = [120,140,145,136,146,90,95,136];
// let total_marks = 1100;
// let fizan_marks = 0;

// let i = 0;


// while(i< fizan.length)
// {
//         fizan_marks = fizan_marks + fizan[i];
//         i++;
// }

// console.log("faizan_marks", fizan_marks);

// let avg = fizan_marks / fizan.length;
// console.log(avg);

// let percentageAvg = (total_marks % fizan_marks);
// console.log( percentageAvg);




let alphatech = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let total_members = 60;
let present_members = 0;

let i = 0;

while(i< alphatech.length){
        present_members = present_members + alphatech[i];
        i++;
}

console.log("present_members", present_members);

let avg = present_members / alphatech.length;
console.log(avg);

let percentageAvg = (total_members % present_members);
console.log(percentageAvg);



