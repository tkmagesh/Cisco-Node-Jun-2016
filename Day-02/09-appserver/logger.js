var chalk = require('chalk');

module.exports = function(req, res, next){
	console.log(chalk.bold.red(req.method) + ' - ' + chalk.yellow(req.url));
	next();
}