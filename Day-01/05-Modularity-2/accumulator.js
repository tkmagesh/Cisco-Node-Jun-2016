
function accumulatorFactory(){
	var result = 0;
	console.log('loading accumulator');
	var accumulator = {
		add : function(n){
			result += n;
		},
		subtract : function(n){
			result -= n;
		},
		multiply : function(n){
			result *= n;
		},
		divide : function(n){
			result /= n;
		},
		getResult : function(){
			return result;
		}
	};
	return accumulator;
}

console.log('loading accumulator factory');
module.exports = accumulatorFactory;