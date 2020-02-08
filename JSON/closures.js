/*function add(num1, num2) {  
    function innerAdd(first, second) {
        return first + second;
    }
    return innerAdd(num1, num2); //instead of returning num1 + num2, returning the second function
}
console.log(add(4, 6)); */

//As soon as outer block is called, inner block is automatically called. As soon as add() was called, 
//innerAdd() was operational. 

//what if you try to call innerAdd w/o calling add()? It says innerAdd is not defined. Once outer fn has completed job, inner fn ceases to exist. Closures! 
/*function add(num1, num2) {  
    function innerAdd(first, second) {
        return first + second;
    }
    return innerAdd(num1, num2); 
}
console.log(innerAdd(4, 6)); */

function add(num1) {
    return function(num2) { //anonymous fn - doesn't have a name 
        return num1 + num2;

    }
}
let add4 = add(4);
console.log(add4(6)); //add4 is making a call to function add and passing in 4
//when variable add4 passed first argument, it auto went to num1 param. When we call variable and console.log and passed second
//argument, it auto went to num2 param. Results returned to console.log. 
console.log(add4(13)); //passes in second param. this is 13 + 4