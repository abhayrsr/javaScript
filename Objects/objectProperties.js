const person = {
    name: "Abhay",
    age: 24,
    sex: "male",
    information: function() {
        console.log(this.name + " is a " + this.age + " years old " + this.sex);
    }
};

person.information();
console.log(person.name);

/* keys in an object by default are strings and we can declare functions as a value in an object.
Object literal is a clear and concise syntax to create an object. It allows us to define properties and expressions
in a single line */