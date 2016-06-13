var fs = require('fs');
var filename = 'sample.txt';
function readFileCallback(err, fileContents){
	if (err){
		console.log(err);
		return;
	}
	console.log(fileContents);
}

/*if (fs.existsSync(filename)){
	fs.readFile(filename, {encoding : 'utf8'}, readFileCallback);	
} else {
	console.log('File not found - ', filename);
}*/

fs.exists(filename, function(fileExists){	
	if (!fileExists){
		console.log('File not found - ', filename);
		return;
	}
	fs.readFile(filename, {encoding : 'utf8'}, readFileCallback);		
});