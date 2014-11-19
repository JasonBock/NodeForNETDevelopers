console.log("Person in Node Console");

// TypeScript implementation
import people = require("../Person/Person");

var person = new people.Person.TypeScript.Person(
	new Date(1970, 1, 1), "Joe Smith");

console.log("TypeScript Person: " + person.toString());

// Edge implementation
var edge = require("edge");
var personProxy = edge.func({
	assemblyFile: "People.NET.dll",
	typeName: "People.NET.PersonProxy",
	methodName: "GetAsync"
});
var personProxyInput = {
	birthDate: new Date(1980, 2, 2),
	name: "Jane Smith"
}; 

personProxy(personProxyInput, (error, result) => {
	console.log("Edge.js Person: " + result.Name + ", " + result.BirthDate.Year);
});

console.log("Press return to exit.");

// FYI: https://nodejsmodules.org/tags/prompt
process.stdin.resume();
process.stdin.on("data", chunk => process.exit());