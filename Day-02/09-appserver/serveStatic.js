var path = require('path'),
	fs = require('fs');

var staticExtns = ['.html', '.css', '.js', '.jpg', '.png', '.ico', '.txt', '.xml', '.json'];
function isStatic(resource){
	return staticExtns.indexOf(path.extname(resource)) !== -1;
}

module.exports = function(req, res, next){
	console.log('serve static');
	if (isStatic(req.pathname)){
		var resource = path.join(__dirname, req.pathname);
		var exists = fs.existsSync(resource);
		
		if (!exists){
			res.statusCode = 404;
			res.end();
			return;
		}
		fs.createReadStream(resource).pipe(res);		
	} else {
		next();
	}
}