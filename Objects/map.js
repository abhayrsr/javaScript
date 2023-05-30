const arr = [1,2,3,4,5,6];

const output = arr.map((num, i) => {
    
    return i * num ** 2;
});

console.log(output);
/* map is a hof. */
