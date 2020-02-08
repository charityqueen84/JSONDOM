
class Person {
    constructor(first, last) {
        this.firtName = first;
        this.lastName = last;
    }
    hello() {
        console.log('Hello ' + this.firtName + ' your major is ' + this.major)
    }
}
class Student extends Person {
    constructor(first, last, major) {
        super(first, last);
        this.major = major;
        this.tuitionPaid; //instead of adding a parameter, letting constructor create property, and we will initiate w/ setter method 
    }

    get studentFirstName() {
        return this.firtName; //return means return data back to whoever is calling that function. Here you're creating a proxy that hides actual property name
    }
    set payment(amount) { //you have to accept a parameter on setters for whatever variable you're going to change 
        if (amount >= 100) {
            this.tuitionPaid = amount;
        }else{
            console.log('Amount paid must be over $100.')
        }
    }
    get payment() {
        if (this.tuitionPaid >= 100) {
            console.log('The amount you paid is $' + this.tuitionPaid);
        }else{
            return this.tuitionPaid;
        }
    }
}
let student1 = new Student('Mark', 'Jones', 'Math');
//student1.hello(); - removing this and replacing with line below
console.log(student1.studentFirstName);
student1.payment = 150; //because we're assigning a value, it calls the setter
student1.payment; //b/c we're not assigning a value, it calls the getter. 
