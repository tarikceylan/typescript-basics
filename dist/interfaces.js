//TypeScript ill throw an error since we declared 'age' should be a number
var user1 = {
    name: 'John',
    age: '30',
};
//TypeScript will also throw an error if the given 'key' is not in the shape
var user2 = {
    username: 'John',
    age: 30,
};
//Will run
var mainUser = {
    name: 'John',
    age: 30
};
console.log(mainUser);
