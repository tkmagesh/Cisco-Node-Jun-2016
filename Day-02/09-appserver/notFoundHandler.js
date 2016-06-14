module.exports = function(req, res, next){
	console.log('not found handler');
	res.statusCode = 404;
	res.end();
	next();
}