let paraSel = document.querySelectorAll('p');
paraSel.forEach(function(par) {
    if (par.textContent.includes('second')) {
        par.style.color = 'pink';
    }
});