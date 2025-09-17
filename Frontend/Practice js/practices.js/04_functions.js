// function sayMyName() {
//   console.log("f");
//   console.log("a");
//   console.log("1");
//   console.log("z");
//   console.log("a");
//   console.log("n");
// }

// // sayMyName()


// function addTwoNumbers(number1, number2){
//     //  let result = number1 + number2
//     //  return result

//     return number1 + number2

// }
// const result = addTwoNumbers(3, 5)

// console.log("Resutl: ", result);

// function loginUserMessage(username){
//     if (username) {
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just looged in`
// }

// console.log(loginUserMessage("Faizan"));
// console.log(loginUserMessage("Faizan"));


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 300, 600, 2000));

const user = {
    username: "Faizan",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);  
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));




