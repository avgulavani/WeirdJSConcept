// function as object ..first class...kadak...


greet();                               // hoistlited and will be available

function greet(){                    // function will be created in memory

    console.log("hi");
}

//object();                           // undefined error as object is a variable 
var object=function(){

    console.log("Hello");
}
object();                           // available


function log(a){

    console.log(a);
}

log({

    greetings:"Hello"

});

function demo(a){

    a();
}
demo(function(){

    console.log("passing function to function ..lol...power of Js")
})