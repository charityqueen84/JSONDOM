let lamp = {
    type: 'desk',
    brightnessOfBulb: 60,
    turnedOn: true,
    manufacturer: {
        name: 'Big Electric Company',
        model: 'ABC1234',
        locations: ['USA', 'Germany', 'UK']
    },
    turnLampOnOrOff: function () { //this changes the state 
        if (this.turnedOn == true) {
            this.turnedOn = false;
        }else{
            this.turnedOn = true;
        }
    },
    isLampOnOrOff: function () {
        this.turnLampOnOrOff();
        if (this.turnedOn == true) {
            console.log('The lamp is turned on');
        }else{
            console.log('the lamp is turned off');
        }
    },
    lampReport: function () {
        console.log('This lamp is a ' + this.type + ' lamp');
    }
};
lamp.type = 'overhead'; 
lamp.lampReport();
lamp.isLampOnOrOff(); 