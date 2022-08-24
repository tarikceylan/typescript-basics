//Using generics, we can state what type of elements an array should have
type NumberArrayType = Array<number>

const myNumberArray: NumberArrayType = [1,2,3,4,5];
console.log(myNumberArray);

//TypeScript will throw an error since strings are not allowed in 'NumberTypeArray'
// const myStringArray: NumberArrayType = ['lorem', 'ipsum']
