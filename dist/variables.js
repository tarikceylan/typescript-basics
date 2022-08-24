//We can assign variable types so TS will warn us when we use another type.
var firstName = 'John';
var lastName = 'Doe';
var age = 30;
//If we try to assign a 'string' to 'age' varaible, TS will throw an error
// age = '30'
console.log("".concat(firstName, " ").concat(lastName, " (").concat(age, ")"));
//We Can also declare types for varaibles which are being used as an arguments in a function
var findSum = function (x, y) {
    var sum = x + y;
    return sum;
};
findSum(1, 4);
//If we call the same function with a string argument, instead of a number, TS will throw an error
// findSum('1', 4);
