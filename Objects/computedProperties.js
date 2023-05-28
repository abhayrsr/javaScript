const readlineSync = require("readline-sync");
const key = readlineSync.question("What do you want to know (mentor or age)?- ");
const course = readlineSync.question("What do you want to learn (html/css/javaScript)? - ");



const obj = {
    mentor: "Abhay",
    age: 24,
    [course]: "not available"
};

console.log(obj[key])
console.log(obj[course]);