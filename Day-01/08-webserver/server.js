var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var querystring = require('querystring');
var calculator = require('./calculator');

var staticExtns = ['.html', '.css', '.js', '.jpg', '.png', '.ico', '.txt', '.xml', '.json'];
function isStatic(resource){
	return staticExtns.indexOf(path.extname(resource)) !== -1;
}
var server = http.createServer(function(req, res){
	console.log(req.method, ' - ', req.url);
	var urlObj = url.parse(req.url);
	var pathname = urlObj.pathname;
	var query = querystring.parse(urlObj.query);
	if (isStatic(pathname)){
		var resource = path.join(__dirname, pathname);
		var exists = fs.existsSync(resource);
		if (!exists){
			res.statusCode = 404;
			res.end();
			return;
		}
		fs.createReadStream(resource).pipe(res);
	} else if (pathname === '/calculator' && req.method === 'GET'){
		var op = query.op,
			n1 = parseInt(query.n1, 10),
			n2 = parseInt(query.n2, 10);

		var result = calculator[op](n1, n2);
		res.write(result.toString());
		res.end();
	} else if (pathname === '/calculator' && req.method === 'POST'){
		var reqdata = '';
		req.on('data', function(chunk){
			reqdata += chunk;
		});
		req.on('end', function(){
			var body = querystring.parse(reqdata);
			var op = body.op,
				n1 = parseInt(body.n1, 10),
				n2 = parseInt(body.n2, 10);

			var result = calculator[op](n1, n2);
			res.write(result.toString());
			res.end();
		});
		
	} else {
		res.statusCode = 404;
		res.end();
	}
	
});

server.listen(8080);
console.log('server listening on port 8080');

//res.statusCode = 404;
//res.end();

