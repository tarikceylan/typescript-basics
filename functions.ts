//We can declare types for varaibles which are being used as parameters in a function
const findSum = (x: number,y: number) => {
    let sum = x+y;
    return `Sum: ${sum}`
}
console.log(findSum(1,4));
;

//If we call the same function with a string parameter, instead of a number, TS will throw an error
// findSum('1', 4);

//We can also state the type of return values
interface User {
    name: string,
    age: number,
}

//Here we use 'User' interface and explicitly state a return value from this function should be a 'User' object.
const getUser = (): User => {
    //Then create a new User object saved in the 'newUser' variable
    let newUser: User = {
        name: 'John',
        age: 30
    }
    return newUser;
}

console.log(getUser())