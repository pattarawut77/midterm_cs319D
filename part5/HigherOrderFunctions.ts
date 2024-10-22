import {Product} from "../part1/Product";

function createPriceMultiplier(multiplier: number): (price: number) => number {
    return function(price: number): number {
        return price * multiplier;
    };
}
const applyTax = createPriceMultiplier(1.07);
const product = new Product("Laptop", 1000.0, "Electronics");
const priceWithTax = applyTax(product.price);

console.log(`Original Price: ${product.price}`);
console.log(`Price after 7% tax: ${priceWithTax.toFixed(2)}`);