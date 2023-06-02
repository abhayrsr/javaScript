let newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 300)
});

newPromise.then((result) =>{
    console.log(result);
    return result*10;
}).then((result) => {
    console.log(result);
    return result*10;
}).then((result) => {
    console.log(result);
    return result*10;
})

/* Promise chaining refers to a way of handling multiple asynchronous task in sequential manner where the output of one 
operation becomes the input of other operation. It allows more readable and organised code when dealing with multiple
asynchronous tasks*/