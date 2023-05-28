const person1 = {
    name: "Abhay",
    age: 24,
    address: {
        city: "Rehan",
        state: "H.P"
    }
};

const person2 = Object.assign({}, person1);
/* object.assign(target, source) is not a deep copy. It fails to do so in case of nested objects. */

person2.age = 23;
person2.address.city = "Dhameta";

console.log(person1, person2);





//const person2 = person1;
/* here both person2 and person1 are refering to same memory location */
//person2.age = 23;

//console.log(person1);
/* shallow copy */

//console.log(person2);
/*objects are not copied by value but tby reference. */