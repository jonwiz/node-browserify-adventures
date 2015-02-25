var url = require('url');
var querystring = require('querystring');

var addr = prompt();
var params = querystring.parse(url.parse(addr).query);
console.log(url.resolve(addr, params.file));
