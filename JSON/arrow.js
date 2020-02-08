let addNumbers = num => //if you only have one param and one statement, don't need parens or curly braces
    console.log('The sum of ' + num + ' and 8 is ' + (num + 8));
addNumbers(5);

let addNumbers2 = (num, num2) => { //here you need paren and curly braces
    let total = num + num2;
    console.log('The sum of ' + num + ' and ' + num2 + ' is ' + (num + num2));
};
addNumbers2(1, 2);