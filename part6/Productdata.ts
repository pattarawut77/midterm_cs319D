import {Product} from "../part1/Product";

export async function fetchProductData(): Promise<Product[] | undefined> {
    const url = "http://demo7259591.mockable.io";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const products: Product[] = data.map((item: any) => ({
            name: item.name,
            price: item.price,
            category: item.category
        }));
        console.log("Mapped product data:", products);


        return products;
    } catch (error) {
        console.error("Error fetching product data:", error.message);
    }
}
