function calculation(num1) {
    let result = num1;
    return {
        add: function(num2) { //anon function w/ identifier. Different than giving a function a name
            result += num2;
        }, //comma must be here. This add block is called a JSON object. (JS Object Notation)
        subtraction: function(num2) { //this num2 has nothing to do with the num2 before 
            result -= num2;
        }, 
        multiplication: function(num2) {
            result *= num2;
        } ,
        division: function(num2) {
            result /= num2;
        },
        getResult: function() {
            return result;
        }
    }
}
let myCalc = calculation(0); //variable to call outer function w/ a single argument passed
myCalc.add(43);
console.log(myCalc.getResult());
myCalc.multiplication(3);
console.log(myCalc.getResult());