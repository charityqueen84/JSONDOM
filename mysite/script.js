//Before JS can manipulate an element, it has to find it. Document object has a method for that called query selector. Go to js file
//set a variable

//let mySelection = document.querySelector('p'); //string in parentheses is name of element I'm looking for. 
//mySelection.remove(); //now tell JS what to do with it. Using dot notation to call the object called document. And then ask it to run
//built in method called querySelector. Then we passed what we're looking for as a string parameter (p). Saved results to a variable that
//we called mySelection. Then we took that result and called a built in method called remove. 
//When you run live server and open browser, the contents of the p element are gone! Not physically removed, but removed w/in the DOM. 
//When you add a second p element, that shows up. THe reason is that query selector only find first instance of element it's searching
//for. if we wanted it to remove all the elements, we'd use a different method called querySelectAll. 

/* --------------------
let mySelection = document.querySelectorAll('p');
-------------------------------------- */

//mySelection.remove();
//querySelectorAll - when JS sees this, it will examines the entire DOM and creates an array of all the p elements. But now, 

//we have to look through all instances of p element array using a looping structure. Best is for each loop.
/*--------------------------------------
mySelection.forEach(function(para) { //we have to put a function within the forEach(), and pass it a parameter. 
    para.remove(); //we put this here instead of mySelection.remove above (commented out)
    --------------------------*/


//now all p elements are removed. 
//now we're going to comment out the remove stuff. 
/* ----------------------- 
mySelection.forEach(function(para) {
    if(para.textContent.includes('*')) { //text content property allows you to search for a string by adding built in includes method and alter text content. 
        para.remove();
    }
});
//querySelector method is more modern way of selecting elements in html doc. It replaces many older JS methods like
//getElementById, getElementByTag, etc. 
---------------------------- NOW WE WILL DO THE OPPOSITE OF INCLUDES */

/*------------------------------------------------------------
mySelection.forEach(function(para) {
    para.textContent = 'This is from the Javascript Code'; //it changed both p elements to have the exact same content - this string. 
});
------------------------------------------------------------*/

//in html file, h1 and p elements are an array of child elements to body element. h1 is the first, so it's array element 0.
//so here, we are commenting line 12 (let mySelection = document.querySelectorAll('p');) and stuff right above here to try
//something else.

/* ---------------------------------------------------
document.body.children[0].textContent = 'Hello from Javascript'; 
---------------------------------------------------*/

//js is treating entire document as an object, but each element w/in doc is also an object.
//NOw content of h1 element changed from "this is my first website" to "Hello from Javascript"
//We told JS to go to the document object and then to the body object, once there, told it to go
//to first child element and assign "Hello from Javascript" to the textContent property. 
//We have several ways to approach manipulating HTML content. 
//Single page applications - SPAs. 
//we can change things other than text. Commenting out line 48 (document.body.children[0].textContent = 'Hello from Javascript'; )

document.body.children[0].style.color = 'blue'; //this changes text of h1 tag to blue.
//This could become a nightmare with lots of changes. In the next videos, we'll look at querySelector and how it can be used more efficiently. 