module.exports = function(req, res){
	console.log('not found handler');
	res.statusCode = 404;
	res.end();
}