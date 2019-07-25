var rpio = require('rpio');



rpio.init({mapping: 'gpio'});
rpio.open(2, rpio.OUTPUT, + true);
rpio.write(2, + true);