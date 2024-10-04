// // Định nghĩa class Product
// class Product {
//     private name: string;
//     private price: number;
//     private category: string;
  
//     constructor(name: string, price: number, category: string) {
//       this.name = name;
//       this.price = price;
//       this.category = category;
//     }
  
//     public displayInfo(): void {
//       console.log(`Product: ${this.name}, Price: ${this.price}, Category: ${this.category}`);
//     }
//   }
  
//   let productsList: Product[] = [];
  
//   function addProduct(name: string, price: number, category: string): Product[] {
//     const newProduct = new Product(name, price, category);
//     productsList.push(newProduct);
//     return productsList;
//   }
  
//   addProduct("iphone16", 1500, "appple");
//   addProduct("samsungs20", 800, "samsung");

//   productsList.forEach(product => product.displayInfo());
  // Định nghĩa interface Product
interface Product {
    name: string;
    price: number;
    category: string;
  }
  
  // Hàm để thêm sản phẩm mới vào danh sách
  let productsList: Product[] = [];
  
  function addProduct(name: string, price: number, category: string): Product[] {
    const newProduct: Product = { name, price, category };
    productsList.push(newProduct);
    return productsList;
  }
  
  // Sử dụng hàm addProduct để thêm sản phẩm mới
  addProduct("Laptop", 1500, "Electronics");
  addProduct("Phone", 800, "Electronics");
  
  // Hiển thị danh sách sản phẩm
  productsList.forEach(product => {
    console.log(`Product: ${product.name}, Price: ${product.price}, Category: ${product.category}`);
  });
  