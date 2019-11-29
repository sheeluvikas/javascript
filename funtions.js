/** This script explains how to use functions in javascript 
 * function
 * forEach
 * 
*/
//console.log(); ---- here .log() is a function

let print = function(message = ""){
    console.log(message);
}

let name = "Vikas";

// below is the way to decare the function -
let sayHello = function (message = 'Un Named', otherValue = 'Other Value') { 
    // here message = 'Un Named' is default parameter
    
    console.log(`Hello ${message} !!!`);
    console.log(`Other Value :${otherValue} is printed!!!`);
    console.log("Welcome to the function");
}

sayHello();


let getSum = function(a = 0, b = 0){
    print(`The value of a is:${a}`);
    print(`The value of a is:${b}`);

    let c = a + b;
    print(c);
    return c;
}


console.log(getSum(10, 21));
console.log(getSum());

const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
days.forEach(sayHello);
console.log("\n**** Printing the values ********\n");

/** Now  */
days.forEach(function(message, indexPosition){ 
    // the first param is the value of the array
    // second param is the index of the array
    print(indexPosition + 1  + " : " + message);
})