let completed = false;

/* creating a promise */ 
let learnJs = new Promise((resolve, reject) => {
    if(completed) resolve("Learnt node.js");
    else reject("didn't"); 
})

/*consuming a promise*/
learnJs
.then((message) => {console.log(message)})

.catch((error) => {console.log(error)})

.finally(() => {console.log("the promise is completed")})