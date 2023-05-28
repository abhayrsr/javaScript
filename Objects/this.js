const user1 ={
    name: "Abhay",
    age: 24,
    greet: function(){
        console.log(this.age);
    }
    /*this is also called as implicit bindind. */
}
const user2 ={
    name: "Tarun",
    age: 24,
    }

user2.greet = user1.greet;
user1.greet();
user2.greet();
/* arrow function's this refers to window object*/