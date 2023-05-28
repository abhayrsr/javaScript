const obj  = {
    name : "Abhay",
    age: 24,
    add: {
        city: "Rehan",
        state: "H.P"
    }
}

function getCopiedObj(source){
    const targetObj = {};
    const keys = Object.keys(source);
    for(let key of keys){
        if(typeof source[key] === "object"){
            targetObj[key] = getCopiedObj(source[key]);
        } else {
            targetObj[key] = source[key];
        }  
    }
    return targetObj;
};
/* Right way to create a deep copy */

const copiedObj = getCopiedObj(obj);
console.log(copiedObj);
copiedObj.name = "Rohan";
copiedObj.add.city = "Sirsa";

//const copiedObj = {...obj};
/* a way to create deep copy but practically, it can only be used to one level of nesting becoz it hampers 
the readability of the code */ 

console.log(obj.add);
console.log(copiedObj.add);