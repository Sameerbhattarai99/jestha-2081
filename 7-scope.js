// global variable
let name='ram'
let age=12
let number=100

function doSomething(){
    let number=1111       //local variable

    age=12//since let is not used it just update globale variable rather than being local variable

    console.log(' inside number',number);

    console.log(' inside age',age);
}

doSomething()

console.log('outside number',number)        //global variable

console.log('outside age',age);


function double(input){
    let output=input*2
    console.log(`output is ${output}`);
}
double(2)
 
function triple(input){
    let output=input*3
    console.log(`output is ${output}`); //here the ouput name is same but due to scope name can be same
}
triple(2)
 
