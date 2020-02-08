/*let sum = function() { //this is a function expression 
    let num1 = 2;
    let num2 = 3;
    let sum = num1 + num2;
    return 'The total of ' + num1 + ' and ' + num2 + ' is ' + sum; //the return statement ends the functions
} 
let total = sum;
console.log(total()); //total and sum are looking at same place in memory, which contains a function. parentheses tells JS to run func and return result
//this scenario doesn't happen often. */

function welcome(firstName = 'whatever') { //this gives param a default value in case nothing is passed through. 
    return 'Welcome ' + firstName + ', to the world of functions.';
}
console.log(welcome('Charity'));
console.log(welcome());

