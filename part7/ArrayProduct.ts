import {fetchProductData} from '../part6/Productdata'

fetchProductData().then(products => {
    if (products) {
        const expensiveProducts = products.filter(product => product.price > 100);
        console.log("Products priced above 100:", expensiveProducts);

        const productNames = products.map(product => product.name);
        console.log("Product names:", productNames);

        const totalCost = products.reduce((accumulator, product) => accumulator + product.price, 0);
        console.log("Total cost of all products:", totalCost);
    } else {
        console.log("No products fetched.");
    }
});
