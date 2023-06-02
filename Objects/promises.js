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

/*promise is an object which is used when a user needs an output in near future but not in the present. This concept was
mainly introduced to counter the callback hell demerit of javascript, due to which the readability of the code was getting
affected while executing the task asynchronously. Promise overcame this problem and maintained code readbility. */ 