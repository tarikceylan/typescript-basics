//We can declare types for varaibles which are being used as parameters in a function
var findSum = function (x, y) {
    var sum = x + y;
    return "Sum: ".concat(sum);
};
console.log(findSum(1, 4));
;
//If we call the same function with a string parameter, instead of a number, TS will throw an error
findSum('1', 4);
//Here we use 'User' interface and explicitly state a return value from this function should be a 'User' object.
var getUser = function () {
    //Then create a new User object saved in the 'newUser' variable
    var newUser = {
        name: 'John',
        age: 30
    };
    return newUser;
};
console.log(getUser());
