var url = require('url'),
	querystring = require('querystring');

module.exports = function(req, res){	
	console.log('data parser');
	var urlObj = url.parse(req.url);
	req.pathname = urlObj.pathname;
	req.query = querystring.parse(urlObj.query);
}