/** This tutorial will cover : 
 * if-else statements
 * Arrays and Template
 */

 var x = 10;

 if (x === 10){
     console.log("The value of x is :"+10);
 }
 else {
     console.log("The value of x is NOT :"+10);
 }
 
 /**Usually for arrays, we use const */
 console.log('********* Arrays **********');
const superHeros = ['Iron Man', 'Spiderman', "Shaktiman"];

console.log(`The first element :-`, superHeros[0]);
console.log('Last Element:-', superHeros[superHeros.length-1]);
console.log(`We have total ${superHeros.length} Superheroes`);

console.log('********* Arrays Methods ***********')

console.log('toString():', superHeros.toString());
console.log('Join :', superHeros.join(' ~ '));
console.log('POP 2 times:', superHeros.pop(), superHeros.pop())
console.log('New Array after popping two elements:', superHeros);
console.log('add elements : unshift():', superHeros.unshift("Spiderman"));
console.log('add elements : unshift():', superHeros.unshift("Shaktiman"));
console.log('Elements:', superHeros);
console.log('Shift : ', superHeros.shift())
console.log('Elements:', superHeros);
