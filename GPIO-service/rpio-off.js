var rpio = require('rpio');



rpio.init({mapping: 'gpio'});
rpio.open(2, rpio.OUTPUT, + false);
rpio.write(2, + false);