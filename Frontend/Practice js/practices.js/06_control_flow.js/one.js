// if Statment

// <, >, <=, >=, !=, ==, ===, !==
const isUserloggedIn = true;
const temperature = 33;

if (temperature === 40) {
  console.log("less than 40");
} else {
  console.log("temperature is greater than 40");
}

const score = 200;
if (score > 100) {
  const power = "fly";
  console.log(`user power: ${power}`);

}

const balance = 1000
// if (balance > 500) console.log("text");

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
    
} else {
    console.log("less than 1200");
}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
    
}


