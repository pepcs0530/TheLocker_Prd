#!/usr/bin/python
from BaseHTTPServer import BaseHTTPRequestHandler,HTTPServer
from urlparse import urlparse
import I2C_LCD_driver
import datetime
import time

PORT_NUMBER = 4003
mylcd = I2C_LCD_driver.lcd()
clear = "test"
#This class will handles any incoming request from
#the browser 
class myHandler(BaseHTTPRequestHandler):
	
	#Handler for the GET requests
	def do_GET(self):
		if self.path != "/favicon.ico":
			self.send_response(200)
			self.send_header('Content-type','text/html')
			self.end_headers()
	        	query = urlparse(self.path).query
	       		value=query.split("=")
			mylcd.lcd_clear()
			mylcd.backlight(1)
			mylcd.lcd_display_string(datetime.datetime.now().strftime("%d-%m-%Y %H:%M:%S") + ' ' + value[1].replace("%20", " "), 1, 0)
			# Send the html message
			self.wfile.write(value[1])
			time.sleep(5)
			mylcd.backlight(0)
			return

try:
	#Create a web server and define the handler to manage the
	#incoming request
	server = HTTPServer(('', PORT_NUMBER), myHandler)
	print 'Started httpserver on port ' , PORT_NUMBER
	
	#Wait for start...
	time.sleep(1)
	mylcd.lcd_display_string("Starting...")
	time.sleep(1)
	mylcd.lcd_clear()
	time.sleep(1)
	mylcd.lcd_display_string("5")
	time.sleep(1)
	mylcd.lcd_display_string("4")
	time.sleep(1)
	mylcd.lcd_display_string("3")
	time.sleep(1)
	mylcd.lcd_display_string("2")
	time.sleep(1)
	mylcd.lcd_display_string("1")
	time.sleep(1)
	mylcd.lcd_display_string("Ready!")
	time.sleep(5)
	mylcd.backlight(0)
	
	#Wait forever for incoming htto requests
	server.serve_forever()

except KeyboardInterrupt:
	print '^C received, shutting down the web server'
	server.socket.close()