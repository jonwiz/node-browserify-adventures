var uniq = require('uniq');

module.exports = function(s){
	return uniq(s.split(','));
}
