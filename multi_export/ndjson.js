exports.parse = function(s){
	
	return s.split('\n').map(JSON.parse);

}

exports.stringify = function(arr){

	return arr.map(JSON.stringify).join('\n');

}
