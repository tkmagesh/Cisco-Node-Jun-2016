var _middlewares = [];

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
	exec(req, res, _middlewares);
};

app.use = function(middleware){
	_middlewares.push(middleware);
};

app.get = function(url, middleware){
	_middlewares.push(function(req, res, next){
		if (req.method === "GET" && req.pathname === url){
			middleware(req, res, next);
		} else {
			next();
		}
	});
};

app.post = function(url, middleware){
	_middlewares.push(function(req, res, next){
		if (req.method === "POST" && req.pathname === url){
			middleware(req, res, next);
		} else {
			next();
		}
	});
}




app.router = 
module.exports = app;

