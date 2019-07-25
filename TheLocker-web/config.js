var config = {
	database: {
		host:	  'localhost', 	// database host
		user: 	  'thelocker', 		// your database username
		password: '1234', 		// your database password
		port: 	  3306, 		// default MySQL port
		db: 	  'db_thelocker' 		// your database name
	},
	server: {
		host: '0.0.0.0',
		port: '4001'
	},
	report: {
		host: '0.0.0.0',
		port: '5488'
	}
}

module.exports = config
