var calculator = require('./calculator'),
	querystring = require('querystring');

module.exports = function(req, res){
	console.log('calculator handler');
	if (req.pathname === '/calculator' && req.method === 'GET'){
		var op = req.query.op,
			n1 = parseInt(req.query.n1, 10),
			n2 = parseInt(req.query.n2, 10);

		var result = calculator[op](n1, n2);
		res.write(result.toString());
		res.end();
	} else if (req.pathname === '/calculator' && req.method === 'POST'){
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
		
	}
}