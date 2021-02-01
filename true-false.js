// Falsy:
// 0
// ""
// undefined
// null
// NaN
// false

// Truthy:
// '0', " ", [], {}

// let name = "false"
let name = 0;
if (name || name == 0) {
    console.log("condition is true");
}
else{
    console.log("condition is false");
}