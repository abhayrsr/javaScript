const arr = [1,2,3,4,5];

const output = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 5);
console.log(output);
/* reduce is also an hof */