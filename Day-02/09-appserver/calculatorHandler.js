var calculator = require('./calculator'),
	querystring = require('querystring');

module.exports = function(req, res, next){
	if (req.pathname === '/calculator'){
		var data = req.method === 'POST' ? req.body : req.query;
		var op = data.op,
			n1 = parseInt(data.n1, 10),
			n2 = parseInt(data.n2, 10);

		var result = calculator[op](n1, n2);
		res.write(result.toString());
		res.end();
	} else {
		next();
	}
}