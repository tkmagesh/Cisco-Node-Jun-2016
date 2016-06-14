var _middlwares = [];

function exec(req, res, middlewares){
	var first = middlewares[0],
		remaining = middlewares.slice(1),
		next = function(){
			exec(req, res, remaining);
		};
	if (first)
		first(req, res, next);
}

function app(req, res){
	exec(req, res, _middlwares);
};

app.use = function(middleware){
	_middlwares.push(middleware);
};

module.exports = app;

