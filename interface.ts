interface User {
    name: string;
    age: number;
}

//Will throw an error since we declared 'age' should be a number
// const me: User = {
//     name: firstName,
//     age: lastName,
// }

//Will run
const me: User = {
    name: `${firstName} ${lastName}`,
    age: age
}