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
//TypeScript will throw en error since 'Bored' is not a possible value
// myState = 'Bored'
// console.log(myState);
