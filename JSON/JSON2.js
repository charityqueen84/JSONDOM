/* Here's what we did in last video. We're going to build on it :

let lamp = { //container to hold JSON object
    type: 'desk', 
    brightnessOfBulb: 60,
    turnedOn: true,
    manufacturer: { //a property can be an object as well
        name: 'Big Electric Company',
        model: 'ABC1234',
        locations: ['USA', 'Germany', 'UK'] //property can also be an array. 
    },
    turnLampOnOrOff: function() { //function as a property
        console.log('The lamp will turn on or off');
    }
};
console.log(lamp.type);
console.log(lamp.manufacturer.model);
lamp.turnLampOnOrOff();
console.log(typeof lamp.brightnessOfBulb); //using typeof to see what type a property is */


let lamp = {
    type: 'desk',
    brightnessOfBulb: 60,
    turnedOn: true,
    manufacturer: {
        name: 'Big Electric Company',
        model: 'ABC1234',
        locations: ['USA', 'Germany', 'UK']
    },
    turnLampOnOrOff: function () {
        console.log('The lamp will turn on or off');
    },
    lampReport: function () {
        console.log('This lamp is a ' + this.type + ' lamp'); //have to use this b/c when you call a property/behavior w/in the same obj (in JS) you must preference the call w/ this. 
    }
};
lamp.type = 'overhead'; // change value of lamp type 
lamp.lampReport();

//Those two lines are called messages. In first one, we're sending a msg to lamp object and changing type property.
//Second - sending msg to lamp object and telling it to run lampReport() fn. 
//Message - could help clarify concepts in more advanced JS. 