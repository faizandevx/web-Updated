//  for of loop

// ["",  "", ""]
// [{}, {}, {}]

// for (const element of object) {
    
// }


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num );
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}


// Map

const map = new Map()
map.set(`PAK`, "Pakistan")
map.set(`USA`, "United States Of America")
map.set(`FA`, "France")
map.set(`IN`, "India")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}




