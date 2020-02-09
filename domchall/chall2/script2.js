//continuing on from domchall folder and adding id's to html file. 

/*let paraSel = document.querySelectorAll('p');
paraSel.forEach(function(par) {
    if (par.textContent.includes('second')) {
        par.style.color = 'pink';
    }
}); */

//we could use older method of getElementById('para2). But better way is newer querySelector, which replaces many 
//methods, like getElementById. Here we're using id to change the words of a particular id (para2)
/*-------------------------
let parSel = document.querySelector('#para2'); //# shows that it's an id. 
parSel.textContent = 'This was changed by JavaScript'; //now para2's words changed.
----------------------------*/

//an element can have an ID and a class. We're adding classes to para1 and para4.
//here we have to use querySelectorAll b/c we're searching for multiple paragraph elements. Because we're using all, we need forEach loop.
let parSel = document.querySelectorAll('.myClass'); // . shows it's a class. 
parSel.forEach(function(par) {
    par.textContent = 'JavaScript changed this'; //now anything with myClass class has been changed to this text (para1 and para4)
});
 