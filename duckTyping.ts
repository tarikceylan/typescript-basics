//Also known as Structural Type. Type checking focuses on the 'shape' that values have. One of TypeScript's core principles.
//If the objects have the same 'shape', they are considered to be of same type

interface Point {
    x: number;
    y: number
}

const logPoint = (p: Point) => {
    console.log(`${p.x}, ${p.y}`)
}

//myPoint variable was never declared to have 'Point' type that we have created above.
//TypeScript compapres myPoint variable's type and 'Point' type, as long is it's a match, TypeScript will allow it.

let myPoint = {x: 12, y: 26};
logPoint(myPoint)

//It only requires a subset of the objects in the 'Point' type.
let myRect = {x: 10, y: 5, width: 3, height: 7}
//Even though we didn't specify that it was 'Point' type and gave extra key-value pairs. logPoint function will still work and output 'x' and 'y' values
logPoint(myRect)

//However, if we provide something that we haven't declared, without the subset of the type. TypeScript will throw an error
let myColor = { hex: '#FFFFFF', rgb: '(255, 255, 255)'}
logPoint(myColor)