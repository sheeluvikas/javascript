
let print = function(message = ""){
    console.log(message);
}
const myTodos = []
myTodos.push("Buy Milk");
myTodos.push("Go to Friends House");
myTodos.push("Take a nap");
myTodos.push("Learn something in javascript");

myTodos.forEach(print);
print("******** printing the array using for loop *********");
for(let i = 0; i < myTodos.length; i++){
    print(myTodos[i]);
}
