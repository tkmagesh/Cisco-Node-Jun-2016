var path = require('path'),
	fs = require('fs');

var staticExtns = ['.html', '.css', '.js', '.jpg', '.png', '.ico', '.txt', '.xml', '.json'];
function isStatic(resource){
	return staticExtns.indexOf(path.extname(resource)) !== -1;
}

module.exports = function(req, res){

	if (isStatic(req.pathname)){
		var resource = path.join(__dirname, req.pathname);
		var exists = fs.existsSync(resource);
		console.log(req.pathname,' exists ? - ', exists );
		if (!exists){
			res.statusCode = 404;
			res.end();
			return;
		}
		fs.createReadStream(resource).pipe(res);
	}
}