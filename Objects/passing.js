/* pass by value */

function passByValue(a, b){
    console.log("inside passByValue");
     a = 20;
     b = 30;
    console.log("a =" + a, "b =" + b);

}

let a = 10;
let b = 12;

console.log("Before passByValue");
console.log("a =" + a, "b =" + b);

passByValue(a,b);

console.log("After passByValue");
console.log("a =" + a, "b =" + b);

/* In pass by value, function is called directly by passing the value as an argument. Changing the values of argument
inside the function does not affect the values of argument outside the function. Primitive data types in js always 
follows pass by value */


/* pass by reference */

function passByReference(obj1){
    console.log("inside passByRefernce");
     obj1.a = 20;
     obj1.b = 30;
    console.log("a =" + obj1.a, "b =" + obj1.b);

}

let obj1 = {
    a: 10,
    b: 12
}

console.log("Before passByReference");
console.log("a =" + obj1.a, "b =" + obj1.b);

passByReference(obj1);

console.log("After passByReference");
console.log("a =" + obj1.a, "b =" + obj1.b);

/* In pass by reference function is called by directly passing the object/refernce as an argument, the value of 
arguments inside the function changes alongwith changing the values of the argument outside the function. The data types 
that follows pass by reference are non-primitive data types like arrays and objects */