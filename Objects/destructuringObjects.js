const user = {
    youtube: {
        eng1: {
            name: "Abhay",
            age: "24"
        }
    }
};

let{youtube: {eng1: {name, age}}} = user;

console.log(name);

/* easy and concise extraction of object's property. Also, increases the readbility of the code. */