//Interfaces are used to define object shape with types.
interface User {
    name: string;
    age: number;
}

//TypeScript ill throw an error since we declared 'age' should be a number
const user1: User = {
    name: 'John',
    age: '30',
}

//TypeScript will also throw an error if the given 'key' is not in the shape
const user2: User = {
    username: 'John',
    age: 30,
}


//Will run
const mainUser: User = {
    name: 'John',
    age: 30
}

console.log(mainUser)