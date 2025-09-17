// for(let i = 0 ; i<10 ; i++)
// {
//     console.log(i);
// }

// let i =5;

// do
// {
//     console.log(i);
//     i = i*3;
// } while(i<100)



// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "* ";
//     }
//     console.log(row);
// }



// // let i = 1;
// while (i <= 5) {
//     let j = 1;
//     let row = "";
//     while (j <= i) {
//         row += "* ";
//         j++;
//     }
//     console.log(row);
//     i++;
// }




// let i = 1;
// do {
//     let j = 1;
//     let row = "";
//     do {
//         if (j > i) break;
//         row += "* ";
//         j++;
//     } while (true);
//     console.log(row);
//     i++;
// } while (i <= 5);



// Arrays

// const myArr = [0, 1, 2, 3, 4, 5]
// const myHeros = ["oggy", "jack"]

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()


// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

 
// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);


const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "barman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);

marvel_heros.concat(dc_heros)
console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Faizan"));
console.log(Array.from("Faizan"));
console.log(Array.from({name: "Faizan"})); //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));










// slice splice

// console.log("A", myArr);


// const myn1 = myArr.slice(1, 3)

// console.log(myn1)
// console.log("B", myArr);

// const myn2 = myArr.splice(1, 3)
// console.log("C", myArr);

// console.log(myn2);


