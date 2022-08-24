//We can assign variable types so TS will warn us when we use another type.
let firstName: string = 'John'
let lastName:string  = 'Doe'
let age: number = 30

//If we try to assign a 'string' to 'age' varaible, TS will throw an error
// age = '30'
console.log(`${firstName} ${lastName} (${age})`);

