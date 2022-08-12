var message = 'Hello,TypeScript';
var heading = document.createElement('h1');
heading.textContent = message;
document.body.appendChild(heading);
;
function getProduct(id) {
    return {
        id: id,
        name: "Awesome Gadget ".concat(id),
        price: 99.5
    };
}
var product = getProduct(1);
console.log("The product ".concat(product.name, " costs $").concat(product.price));
var showProduct = function (name, price) {
    console.log("The product ".concat(name, " costs ").concat(price, "$."));
};
showProduct('Apple iPhone 13ProMaxS+ ++ Awesome Splendid', 0.99);
