var rc522 = require("rc522-rfid");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var URL_REQUEST = "http://192.168.1.39:4001";

	checkServiceRouteStatus();
 	
	function clearCurrentTagRfid(){
		//console.log('clearCurrentTagRfid'); 
		var request = new XMLHttpRequest();
		request.open("GET", URL_REQUEST+"/api/deleteCurrentTaggingKeycard", false);	//true for asynchronous
		request.onreadystatechange = function () {
		  if(request.readyState === 4 && request.status === 200) {
			//console.log('responseText : '+ request.responseText);
                        console.log('	Clear current tag RFID...');
			console.log('	status : '+ request.status);
			//console.log('-------------------------');
		  }
		};
		request.send();
	}

	function checkServiceRouteStatus(){
		var request = new XMLHttpRequest();
		request.open("GET", URL_REQUEST, false);  //true for asynchronous
		request.onreadystatechange = function () {
         		//console.log('	text : '+ request.responseText);
			//console.log('	status : '+ request.status);
			if(request.status == 0){
				//console.log('Service route is not start.');
				throw new Error('Service route is not start.');
			}else{
				console.log("Service RFID-RC522 in running...");
			}
		};
		request.send();
	}

rc522(function(rfidSerialNumber){

	checkServiceRouteStatus();

	console.log('');
	console.log('Reading...');
	console.log("RFID Serial number : "+rfidSerialNumber.replace("InitRc522", ""));

	clearCurrentTagRfid();


   	var xhr = new XMLHttpRequest(),
    	method = "GET",
    	url = URL_REQUEST+"/api/insertCurrentTaggingKeycard/"+rfidSerialNumber.replace("InitRc522", "");


	xhr.open(method, url, false);	//true for asynchronous
	xhr.onreadystatechange = function () {
	  if(xhr.readyState === 4 && xhr.status === 200) {
		console.log('	Insert current tag RFID...');
		console.log('	status : '+ xhr.status);
		console.log('Read successful.');
		console.log('-------------------------');
		console.log('Ctrl + C to stop service...');
	  }
	};
	xhr.send();
});
