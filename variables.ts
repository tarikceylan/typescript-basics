//We can assign variable types so TS will warn us when we use another type.
let firstName: string = 'John'
let lastName:string  = 'Doe'
let age: number = 30

//If we try to assign a 'string' to 'age' varaible, TS will throw an error
// age = '30'
console.log(`${firstName} ${lastName} (${age})`);

//We Can also declare types for varaibles which are being used as an arguments in a function
const findSum = (x: number,y: number) => {
    let sum = x+y;
    return sum
}
findSum(1,4);

//If we call the same function with a string argument, instead of a number, TS will throw an error
// findSum('1', 4);

