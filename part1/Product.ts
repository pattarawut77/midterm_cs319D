export class Product {
    private static productCount: number = 0;

    constructor(
        public name: string,
        public price: number,
        public category: string
    ) {
        Product.productCount++;
    }

    updatePrice(newPrice: number): void {
        this.price = newPrice;
    }

    getProductInfo(): string {
        return `Product Name: ${this.name}, Price: $${this.price}, Category: ${this.category}`;
    }

    static totalProducts(): number {
        return Product.productCount;
    }
}

const product1 = new Product("Laptop", 1200, "Electronics");
const product2 = new Product("Phone", 799, "Electronics");

console.log(product1.getProductInfo());
product1.updatePrice(1100);
console.log("Updated: " + product1.getProductInfo());

console.log(product2.getProductInfo());
console.log("Total products created: " + Product.totalProducts());
