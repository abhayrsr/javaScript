const arr = [1,2,3,4,5];

const output = arr.filter((num) => num > 2).map((num) => num ** 2);
console.log(output);
/* filter is a hof */