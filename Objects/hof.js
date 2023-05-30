const wrapper =  function(){
    return "Abhay slimshady";
}

const greetMessage = function(wrapper){
    console.log("My name is ", wrapper());
}

greetMessage(wrapper);

/* A high order function is a function that accepts function as an argument or returns a function or does both */