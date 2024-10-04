// // Định nghĩa class Product
// class Product {
//     private name: string;
//     private price: number;
//     private category: string;
// Hàm để thêm sản phẩm mới vào danh sách
var productsList = [];
function addProduct(name, price, category) {
    var newProduct = { name: name, price: price, category: category };
    productsList.push(newProduct);
    return productsList;
}
// Sử dụng hàm addProduct để thêm sản phẩm mới
addProduct("Laptop", 1500, "Electronics");
addProduct("Phone", 800, "Electronics");
// Hiển thị danh sách sản phẩm
productsList.forEach(function (product) {
    console.log("Product: ".concat(product.name, ", Price: ").concat(product.price, ", Category: ").concat(product.category));
});
