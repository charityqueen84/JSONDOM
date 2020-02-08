/* 
*/

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
console.log(typeof lamp.brightnessOfBulb); //using typeof to see what type a property is