var Tony={
    firstname: 'test',
    lastname: 'test1',
    address:{
        street: '111 Main st.',
        city:'Pune',
        state: 'NY'
    }
};  
function greet(Person){
    console.log("Hi " +Person.address.city);
}

console.log(JSON.stringify(Tony));

greet(Tony);
