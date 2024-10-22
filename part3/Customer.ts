import {Product} from "../part1/Product";
type Order = Product[];

interface Customer {
    name: string;
    email: string;
    orders: Order[];
}

function getCustomerInfo(customer: Customer): void {
    console.log(`Name: ${customer.name}`);
    console.log(`Email: ${customer.email}`);
    console.log(`Number of orders: ${customer.orders.length}`);
}

const product1 = new Product("Laptop", 1200.0, "Electronics");
const product2 = new Product("Phone", 799.0, "Electronics");

const customer: Customer = {
    name: "Flok Patt",
    email: "Flok@Patt.com",
    orders: [[product1], [product2]]
};

getCustomerInfo(customer);
