let message: string = 'Hello,TypeScript';

let heading = document.createElement('h1');
heading.textContent = message;

document.body.appendChild(heading);


//Interface- For Creating  Dynamic Types and avoid function arg bugs
interface Product {
    id: number,
    name: string,
    price: number
};

function getProduct(id): Product {
    return {
        id: id,
        name: `Awesome Gadget ${id}`,
        price: 99.5
    }
}

const product = getProduct(1);
console.log(`The product ${product.name} costs $${product.price}`);

const showProduct = (name: string, price: number) => {
    console.log(`The product ${name} costs ${price}$.`);
};

showProduct('Apple iPhone 13ProMaxS+ ++ Awesome Splendid', 0.99);