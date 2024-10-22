import {Product} from "../part1/Product";

function parseProductData(jsonData: string): Product[] | string {
    try {
        const products: Product[] = JSON.parse(jsonData);
        return products;
    } catch (error) {
        return `Error parsing product data: ${error instanceof Error ? error.message : error}`;
    }
}

const validJson = '[{"name": "Wireless Headphones", "price": 99.99, "category": "Electronics"}, {"name": "Smartphone", "price": 799.99, "category": "Electronics"}]';
const invalidJson = '{"name": "Wireless Headphones", "price": 99.99, "category": "Electronics",}';
const validResult = parseProductData(validJson);
console.log("Valid JSON result:", validResult);
const invalidResult = parseProductData(invalidJson);
console.log("Invalid JSON result:", invalidResult);
