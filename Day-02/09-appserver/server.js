var http = require('http'),
	path = require('path');

var dataParser = require('./dataParser'),
	serveStatic = require('./serveStatic' ),
	calculatorHandler = require('./calculatorHandler'),
	notFoundHandler = require('./notFoundHandler'),
	logger = require('./logger'),
	app = require('./app');
	

app.use(logger);
app.use(dataParser);
app.use(serveStatic(path.join(__dirname, '/public')));
app.post('/calculator', calculatorHandler);
app.get('/calculator', calculatorHandler);
app.use(notFoundHandler);

http.createServer(app).listen(8080);
console.log('server listening on port 8080');