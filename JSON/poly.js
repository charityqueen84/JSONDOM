//Polymorphism: with inheritence, as you progress down the hierarchy, the functionality of functions may change, even though name/
//parameters might change. Ex: Person class and hello method. Say you extended person 5 times. As you move down classes, what the 
//hello function does may need to change

class Movie {
    constructor(title) {
        this.title = title;
    }
    plot() {
        return 'No plot here';
    }
    get name() {
        return this.title;
    }
}
class ET extends Movie {
    constructor() {
        super('ET'); 
    }
    plot() { //this is polymorphism - using same signature, but telling JS you plan to change what the function does. Overriding. 
        return 'Cute alien takes over the earth';
    }
}
class StarWars extends Movie{
    constructor() {
        super('Star Wars');
    }
    plot() {
        return 'The force beats everything';
    }
}
class JurassicPark extends Movie {
    constructor() {
        super('Jurassic Park');
    }
    plot() {
        return 'Hold on to your butts!';
    }
}
class AwfulMovies extends Movie{
    constructor() {
        super('Awful Movie');
    }
}
function selectMovie() {
    let randomNumber = Math.floor(Math.random()* 4) + 1; //We don't want to call Movie class itself. since we have 4 classes to choose from, we multiply the random number by 4
    //we want a number between 1 and 4. If number is .1, it will multiply by 4 which =.4 and rounding down puts us at zero. no good. 
    //we want to add 1 to it. 

    switch(randomNumber) {
        case 1: 
            return new ET(); //we're returning a new instance of ET. What variable will it be assigned to? 
        break;

        case 2:
            return new StarWars();
        break;

        case 3: 
            return new JurassicPark();
        break;

        case 4:
            return new AwfulMovies();
        break;

    }
}
for (let i = 0; i < 10; i++) {
    //want selectMovie fn to be called in each iteration. When it's call, random number generator gives a number between 1 and 4, and then switch selects the new object that will be returned to whoever is calling the selectMovie function.
    let movie = selectMovie();
    console.log('Movie ' + movie.name + ' is about ' + movie.plot());
}