/*** In this script, we have covered the concepts of : 
 * hellow world pring in logs
 * let, var, const, undefined variables and boolean variables.
 */

// install Node in the machine
// then to run this file, use the command in terminal : node index.js

console.log('Hello World !!!');

// variables
let name = 'Vikas'; // the variable declaration is done using let, and if declared, can not be declared.
/** IF we are not declaring the variable with let or val, it will automatically be declared as global variable */
name = 'Sheelu';

var v = 10;
var v = 20; // redclaring the variable will not give error if we declare it wil var, but it will if we declare it with let.

console.log("The value of v declared by var: "+v);
console.log(name);
let age = 30
console.log('Age = '+age);

{
    let age = 40 // if we declare the variable with var which already been declared by let outside, it will give error
    console.log('Inside the block New Age = '+age);
}
console.log('outside the block New Age = '+age);

// const
const pi = 3.14;
console.log('The value of PI is : '+pi);
//pi = 4.14; // This will give error pi is a const.

var x;
console.log('undefined variable x = '+x);
if(x == undefined){ // The comparison with quotes : 'undefined' will not give the required result
    console.log('The value of ix is undefined');
}
else {
    console.log('The value of x is NOT undefined');
}

// boolean : true/false
let booleanValue=true;
console.log(booleanValue);
console.log(!console);


