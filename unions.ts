//We can assign multiple types to a custom type using unions
type MyBoolType = boolean | number

//myValue has a boolean type
let myValue: MyBoolType = false
console.log(myValue)

//myvalue has a number type
myValue = 20
console.log(myValue)


//Another example of unions would be restricting values of a custom type using unions with multiple values
type HumanStateType = 'Idle' | 'Working' | 'Sleeping' 

let myState: HumanStateType = 'Idle'
console.log(myState);

//TypeScript won't throw an error since 'Working' is a possible value. 
myState = 'Working' //But it's case sensitive. The string 'working' will throw an error
console.log(myState);

//TypeScript will throw en error since 'Bored' is not a possible value
// myState = 'Bored'
// console.log(myState);