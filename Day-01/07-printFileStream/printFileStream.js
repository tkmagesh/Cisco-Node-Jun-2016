var fs = require('fs');
var filename = 'sample.txt';


var stream = fs.createReadStream(filename, {'encoding' : 'utf8'});

var readCount = 0;
stream.on('data', function(chunk){
	++readCount;
	//console.log(ch nk);
});

stream.on('end', function(){
	console.log('....... Thats all folks ......');
	console.log('readCount = ', readCount);
});

stream.on('error', function(err){
	console.log('something went wrong');
	console.log(err);
});

stream.pipe(process.stdout);