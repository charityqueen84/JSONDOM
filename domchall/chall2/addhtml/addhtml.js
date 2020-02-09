//Here we're adding HTML elements w/ Javascript. Continued from chall2 folder. 
/* 3 step process:
1. Use createElement method to define element you want to create
2. Add whatever content you need to element
3. Add finished element to location of choice using appendChild method
*/

let p1 = document.createElement('p'); //in params is name of element you want to create as a string. 
p1.textContent = 'Why?';
p1.setAttribute('id', 'para1');//we can also add attributes to elements we've created by using setAttribute method.
document.querySelector('body').appendChild(p1); //we're telling querySelector to find the body tag and make p1 a child of the body tag (appendChild)

//using querySelector to specify where we want the paragraph added. 
//if we want to add a second paragraph:

let p2 = document.createElement('p');
p2.textContent = 'It has its own multilayered atmosphere, organic compounds, weather, moons. It has landscapes - rocky mountain ranges and wide plains.';
p2.setAttribute('id', 'para2');
document.querySelector('body').appendChild(p2);

//setAttribute takes 2 strings - 1. Name of the attribute you want to assign. 2. The value I want to assign to that attribute. On line 10 - I just gave 
//p1 an id attribute of para1. 
//you can use setAttribute to set attributes for any element you add. Give each element an id is strongly suggested. 
//before method replaces insertBefore method. 
let heading = document.createElement('h1');
heading.textContent = 'Pluto IS a Planet!';
heading.setAttribute('id', 'heading1');
document.querySelector('#para1').before(heading); //instead of looking for 'body' tag, we're doing id of para1 and using before method to place it before the para1.