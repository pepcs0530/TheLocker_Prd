var http = require('http'); // Import Node.js core module

var rpio = require('rpio');

var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write('<html><body><p>This is home Page.</p></body></html>');
	res.write('<script></script> ');
        res.end();
    
    }
    else if (req.url == "/student") {
		
		//alert('student');
		console.log('student');
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write('<head><script>alert("student");</script></head>');
        res.write('<html><body><p>This is student Page.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/admin") {
		
		//alert('admin');
		console.log('admin');
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is admin Page.</p></body></html>');
		res.write('<script>alert("admin");</script> ');
        res.end();
    
    }
    else if (req.url == "/Y") {
		
		//alert('admin');
		console.log('Status relay : ON');
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>Service GPIO is running...</p></body></html>');
	/*res.write('<script>');
        res.write('var rpio = require("./rpio");');
	res.write('rpio.init({mapping: "gpio"});');
	res.write('rpio.open(26, rpio.OUTPUT, + true);');
	res.write('rpio.write(26, + true);');
	res.write('</script>');*/
        res.end();

rpio.init({mapping: 'gpio'});
rpio.open(26, rpio.OUTPUT, + true);
rpio.write(26, + true);
    
    }
    else if (req.url == "/N") {
		
		//alert('admin');
		console.log('Status relay : OFF');
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>Service GPIO is stopped...</p></body></html>');
	/*res.write('<script>');
        res.write('var rpio = require("./rpio");');
	res.write('rpio.init({mapping: "gpio"});');
	res.write('rpio.open(26, rpio.OUTPUT, + false);');
	res.write('rpio.write(26, + false);');
	res.write('</script>');*/
        res.end();

rpio.init({mapping: 'gpio'});
rpio.open(26, rpio.OUTPUT, + false);
rpio.write(26, + false);
    
    }
    else
        res.end('Invalid Request!');

});

server.listen(4002); //6 - listen for any incoming requests

//console.log('Node.js web server at port 4002 is running..')
console.log('GPIO service web server at port 4002 is running..')