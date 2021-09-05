var express = require('express');
var session = require('express-session');
var serverStatic = require('serve-static');
var app = express();

app.use(serverStatic(__dirname + '/public'));

// Sessions are used by web applications to remember data about specific users.
// This is how when you login to a website, it remembers you for a while.
app.use(session({
	secret: 'some randomly generated secret',
	resave: true,
	saveUninitialized: true,
	cookie: {
		httpOnly: false,
		secure: false
	}
}));

app.listen(3000, function() {
	console.log('Server listening at localhost:3000');
});
