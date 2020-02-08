/*    let student = new Object(); //this is the old way
student.firstName = 'Jane';
student.lastName = 'Smith';
student.age = 23;   */

//let student = Object.create(); // this is the new way - uses built in create method. 
//Inheritence - if you have an object called Animal. Later you have an obj called Cat. You can use animal properties/behaviors. 
//Create opened inheritence to JavaScript. No object is created in a vacuum. In all OOP environments, there is one obj that is
//the controlling objects of all other objects. Props and methods automatically inherited by all other objs. Prototype. 
// Object.prototype. 
// If you want to inherit from this, all we do is specify that as the paramter in the parentheses: (if you don't want to, you could specify null as parameter)
//In create method, you cannot leave parenthese blank.You must either have an object (in this case, Object.prototype) or null.
let student = Object.create(Object.prototype);
student.firstName = 'Jane';
student.lastName = 'Smith';
student.age = 23;

Object.prototype.hello = function () { //if we want to add to the prototype, we have to do this. we're adding a function to it called hello.
    console.log('Hello ' + this.firstName + ' from Prototype.');
}
//if you wanted to create an object that inherited from the student object, you'd use object you want to inherit from as parameter.
let student2 = Object.create(student) //student 2 has no props/behaviors of its own. 

console.log(student2.firstName); //student2 inherited the first name property and value (Jane) of student 
student2.hello(); //this took what we added to prototype and student2 recognized it. First it looks at student2, then if it doesn't find it, looks at parent object (student). if it doesn't find it there, it looks up to next level (Object.prototype)

//Now say we give student2 its own first name property. student2 is no longer inheriting from student and now prints out Mark. 
student2.firstName = 'Mark';
console.log(student2.firstName);
student2.hello(); //now after we changed the name, it prints Mark instead of Jane when we call hello. 

//-----------------------------//
//After this, there were more improvements, and out came the contstructor function - move to outdatedToConstructor.js to see.