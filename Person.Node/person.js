var http = require('http');

http.createServer(function (request, response) {
	var person = { name: 'Joe Smith', age: 30 };
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello ' + person.name + ' ' + person.age);
}).listen(2112, '127.0.0.1');
 
console.log('Server running at http://127.0.0.1:2112/');