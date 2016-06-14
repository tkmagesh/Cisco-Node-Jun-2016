var url = require('url'),
	querystring = require('querystring');

module.exports = function(req, res, next){	
	
	var urlObj = url.parse(req.url);
	req.pathname = urlObj.pathname;
	req.query = querystring.parse(urlObj.query);
	if (req.method === 'POST'){
		var reqdata = '';
		req.on('data', function(chunk){
			reqdata += chunk;
		});
		req.on('end', function(){
			req.body = querystring.parse(reqdata);
			next();
		});
	} else {
		next();
	}
}