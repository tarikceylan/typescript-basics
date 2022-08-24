//We can assign variable types so TS will warn us when we use another type.
var firstName = 'John';
var lastName = 'Doe';
var age = 30;
//If we try to assign a 'string' to 'age' varaible, TS will throw an error
age = '30';
console.log("".concat(firstName, " ").concat(lastName, " (").concat(age, ")"));
