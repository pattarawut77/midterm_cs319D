import {Product} from "../part1/Product";
import {DiscountedProduct} from "../part2/DiscountedProduct";

class Inventory<T> {
    private items: T[] = [];


    addItem(item: T): void {
        this.items.push(item);
    }
    listItems(): T[] {
        return this.items;
    }
}

const inventory = new Inventory<Product>();

const product1 = new Product("Laptop", 1000.0, "Electronics");
const discountedProduct = new DiscountedProduct("Smartphone", 500.0, "Electronics", 10);

inventory.addItem(product1);
inventory.addItem(discountedProduct);

const allItems = inventory.listItems();
console.log(allItems);
