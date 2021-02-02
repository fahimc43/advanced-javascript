const students = [
    {id: 32, name: "Tony"},
    {id: 43, name: "Bony"},
    {id: 54, name: "Sony"},
    {id: 64, name: "Mony"}
]

// const output = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const result = element.name;
//     output.push(result);
    
// }
// console.log(output);



// const name = students.map( s => s.name);
// console.log(name);

// const ids = students.map( s => s.id);
// console.log(ids);

// const bigger = students.filter( s => s.id > 40);
// console.log(bigger);

const biggerOne = students.find( s => s.id > 40);
console.log(biggerOne);