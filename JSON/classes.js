//classes serve as basis for creating objects. Class = template that creates objects.
//class file = a class is a dedicated file in its own separate file in other OOP languages. In JS, a class can be a
//declaration w/in any file OR a dedicated file. 

class Person { //no parentheses - but default constructor created, but we'll create one. 
    constructor(first, last) { //constructor is a keyword 
        this.firtName = first;  //creating class properties
        this.lastName = last;
    }
    hello() { //we no longer have to use the keyword function if we want to add a function to the constructor. 
        console.log('Hello ' + this.firtName + ' your major is ' + this.major) // MAKE SURE to use this. when calling properties w/in an object!! (or w/in class as here)
    }
}
//let person = new Person('Mark', 'Jones'); //to instantiate - same technique as w/ constructors. new Person() is a constructor call. 
//person.hello();

//Classes make the concept of inheritence a bit easier. Inheritance - is/are relationship? Is a Honda a car?
//student class:
//2 levels of properties: if a property is inside a function (like here it's inside of a constructor), it is called a local property.
//if a property is not inside a function, it is an instance level property. this. differentiates between them. 
class Student extends Person {
    constructor(first, last, major) { //have to create a call to the constructor of the class you're inheriting from, using keyword super. 
        super(first, last);//since Person class is equipped to handle first and last names, we use super call to send arguments to that constructor.
        this.major = major; //this.major creates an instance level property. 
    }
}
let student1 = new Student('Mark', 'Jones', 'Math');
student1.hello();

//continues with encapsulation in encap.js