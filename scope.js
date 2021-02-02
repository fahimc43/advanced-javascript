// // scope 1st part
// function sum (first, second) {
//     let result = first + second;
//     console.log(result);
//     return result;
// }
// const output = sum(3, 7);
// //     console.log(result); (undefined)
// console.log(output);


// // scope 2nd part (global scope)
// let bonus = 20;
// function sum (first, second) {
//     let result = first + second + bonus;
//     console.log(bonus);
//     return result;
// }
// const output = sum(3, 7);
// console.log(bonus);
// console.log(output);


// // scope another part
// function sum (first, second) {
//     let result = first + second;
//     if (result > 9) {
//         const mood = "happy";
//         console.log(mood);
//     }
//     // console.log(mood); (mood is not defined)
//     return result;
// }
// const output = sum(3, 7);


// // block scope (if, for block) (here let variable will be complain )
// function sum (first, second) {
//     let result = first + second;
//     if (result > 9) {
//         let mood = "happy";
//         mood = "fishy"
//         mood = "funky"
//         mood = "cranky"
//         console.log(mood);
//     }
//     console.log(mood);
//     return result;
// }
// const output = sum(3, 7);

// // here var variable will not be complain, it is hoisting.
// function sum (first, second) {
//     let result = first + second;
//     if (result > 9) {
//         var mood = "happy";
//         mood = "fishy"
//         mood = "funky"
//         mood = "cranky"
//         console.log(mood);
//     }
//     console.log(mood);
//     return result;
// }
// const output = sum(3, 7);


// console.log(day);  // undefined
// var day = "friday"

console.log(day);
let day = "friday";