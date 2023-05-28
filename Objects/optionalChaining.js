const user = {
    name: "Abhay",
    age: "23",
    address: {
        city: "Rehan",
        state: "H.P"
    },
    greet: function(){
        console.log("welcome Abhay!!")
    }
};

console.log(user["address"]);

if(typeof(user["address"]["land"]) !== "object"){
    console.log("undefined");
} else {
    console.log(user["address"]["land"]);
}

user["address"]?.["land"];
/*optional chaining using computed properties */

user.greetings?.();
/* optional chaining in javaScript is used to simplify accessing the nested properties of an object or methods when 
called properties or methods are undefined or null. It just helps in preventing the occurence of error or any kind of
exceptions.

It helps in working with APIs that have nested properties. It can even prevent the code from crashing due to undefined 
and null properties and simpilifies the process of handling missing properties.*/