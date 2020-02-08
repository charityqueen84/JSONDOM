function Student(first) { //constructor - it's called when obj created
    //this.firstName = 'Jane'; instead of this and no parameter above, can do below and pass the name when we create obj. 
    this.firstName = first;
    this.hello = function() { //can also do a function declaration in constructor. 
        console.log('Hello ' + this.firstName + ' and welcome to constructors');
    }
}

//let student1 = new Student(); //to instantiate (command constructor to create) obj and make a call to the constructor. Instead of student1.first name = 'Jane' below, we can now do it directly in the constructor.
//console.log(student1.firstName);
//we are no longer adding properties after the object is created. Now they're added to constructor, and any objects created will have
//those properties automatically. 
let student1 = new Student('Jane');
console.log(student1.firstName);
student1.hello();