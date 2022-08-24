//Will throw an error since we declared 'age' should be a number
// const me: User = {
//     name: firstName,
//     age: lastName,
// }
//Will run
var me = {
    name: "".concat(firstName, " ").concat(lastName),
    age: age
};
