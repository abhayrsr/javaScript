const user1 = {
    name: "Abhay",
    age: 24
}

const user2 = {
    name: "Rohan",
    age: 25
}

const user3 = {
    name: "Varun",
    age: 26
}

userName = function(degree, year){
    console.log(this.name, degree, year);
}
/* explicit binding */
userName.apply(user1, ["Btech", 2023]);
