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
userName.call(user1, "B.tech", 2022);
userName.apply(user2, ["Btech", 2023]);

const result = userName.bind(user3);
result("M.tech",2021);
