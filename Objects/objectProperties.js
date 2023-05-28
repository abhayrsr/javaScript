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