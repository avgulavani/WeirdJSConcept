function b(){
    var myvar;             // b exeuction context
    console.log(myvar);
    
    }
    

function a(){
var myvar=2;
console.log(myvar);      // a exeuction context
b();
}

var myvar=1           // global exeuction 
console.log(myvar);
a();
console.log(myvar);   // global exeuction 
