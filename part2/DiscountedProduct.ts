import {Product} from "../part1/Product";

export class DiscountedProduct extends Product {
    private discountRate: number;

    constructor(name: string, price: number, category: string, discountRate: number) {
        super(name, price, category);
        this.discountRate = discountRate;
    }


    private getDiscountedPrice(): number {
        return this.price - (this.price * this.discountRate / 100);
    }


    getProductInfo(): string {
        const finalPrice = this.getDiscountedPrice();
        return `Name: ${this.name}, Original Price: ${this.price}, Discount: ${this.discountRate}%, Final Price: ${finalPrice.toFixed(2)}, Category: ${this.category}`;
    }
}
const discountedProduct = new DiscountedProduct("Tablet", 600.0, "Electronics", 10);

console.log(discountedProduct.getProductInfo());

const product = new Product("Smartwatch", 200.0, "Electronics");
console.log(product.getProductInfo());

console.log("Total products created: " + Product.totalProducts());