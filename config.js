module.exports = {
	// Twilio API keys
	twilio: {
		sid: "AC117ca1b24306a51afec6ba1bad72eca3",
		token: "e1670a73558202e4ad7967f1a7d43131",
		from_number: "+14153231154"
	},
	//	Data McFly settings
	datamcfly: {
		api_key: "0be1743e-b7a4-4018-a799-c8be4f20dbfa",
		app_name: "bobbot"
	},
	//	Username and password for admin section.
	un: 'admin',
	pw: 'password'
};

// to make this work: start node app.js
// start ./ngrok http 8080
// copy the url, add /message and paste it in Twilio as incoming Webhook as POST