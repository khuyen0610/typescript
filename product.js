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
addProduct("Laptop", 1500, "laptop");
addProduct("Phone", 800, "phone");
function findProductByName(productName) {
    var product = productsList.find(function (p) { return p.name.toLowerCase() === productName.toLowerCase(); });
    if (product) {
        return product;
    }
    else {
        return "Kh\u00F4ng t\u00ECm th\u1EA5y s\u1EA3n ph\u1EA9m v\u1EDBi t\u00EAn: ".concat(productName);
    }
}
displayProducts();
var searchResult1 = findProductByName("laptop");
console.log(searchResult1);
var searchResult2 = findProductByName("abc");
console.log(searchResult2);
function displayProducts() {
    console.log("Danh sách sản phẩm:");
    productsList.forEach(function (product, index) {
        console.log("".concat(index + 1, ". ").concat(product.name, " - ").concat(product.price, " VND - ").concat(product.category));
    });
}
