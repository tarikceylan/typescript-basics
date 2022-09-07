/* If using unions, it's not possible to use a method specific to one of the types
For Ex; We can not use .toExponential() method on MyType
*/
var myNumber = 10;
myNumber.toExponential(2);
//myValue has a boolean type
var myValue = false;
console.log(myValue);
//myvalue has a number type
myValue = 20;
console.log(myValue);
var myState = 'Idle';
console.log(myState);
//TypeScript won't throw an error since 'Working' is a possible value. 
myState = 'Working'; //But it's case sensitive. The string 'working' will throw an error
console.log(myState);
