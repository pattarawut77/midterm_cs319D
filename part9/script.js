class Product {
    static productCount = 0;

    constructor(name, price) {
        this.name = name;
        this.price = price;
        Product.incrementProductCount();
    }

    static incrementProductCount() {
        Product.productCount++;
    }

    static totalProducts() {
        return Product.productCount;
    }
}

$(document).ready(function () {
    $('#productForm').submit(function (event) {
        event.preventDefault();

        // Get form values
        let productName = $('#productName').val();
        let productPrice = $('#productPrice').val();

        // Validation
        if (productName && productPrice) {
            // Create new product and add it to the table
            let newProduct = new Product(productName, parseFloat(productPrice));

            $('#productTable tbody').append(`
                <tr>
                    <td>${newProduct.name}</td>
                    <td>${newProduct.price.toFixed(2)}</td>
                </tr>
            `);

            // Display jQuery alert when product is added
            alert('Product added successfully!');

            // Clear form inputs
            $('#productName').val('');
            $('#productPrice').val('');

            // Log total number of products created
            console.log(`Total products: ${Product.totalProducts()}`);
        } else {
            alert('Please fill in both the product name and price.');
        }
    });
});