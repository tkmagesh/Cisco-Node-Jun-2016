function f1Sync(){
	console.log('f1Sync started');
	console.log('f1Sync completed');
}

function f2Sync(){
	console.log('f2Sync started');
	console.log('f2Sync completed');
}

function f3Sync(){
	console.log('f3Sync started');
	console.log('f3Sync completed');
}

function f4Sync(){
	console.log('f4Sync started');
	console.log('f4Sync completed');
}

module.exports.runSync = function(){
	f1Sync();
	f2Sync();
	f3Sync();
	f4Sync();
}

function f1(next){
	console.log('f1 started');
	setTimeout(function(){
		console.log('f1 completed');
		if (next)
			next();
	}, 3000);
}

function f2(next){
	console.log('f2 started');
	setTimeout(function(){
		console.log('f2 completed');
		if (next)
			next();
	}, 3000);
}

function f3(next){
	console.log('f3 started');
	setTimeout(function(){
		console.log('f3 completed');
		if (next)
			next();
	}, 3000);
}

function f4(next){
	console.log('f4 started');
	setTimeout(function(){
		console.log('f4 completed');
		if (next)
			next();
	}, 3000);
}

module.exports.run = function(){
	f1(function(){
		f2(function(){
			f3(function(){
				f4();
			})
		})
	})
}