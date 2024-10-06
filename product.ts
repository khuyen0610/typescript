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
  type Category = "phone" | "laptop" | "mac";

interface Product {
    name: string;
    price: number;
    category: Category;
  }
  
  // Hàm để thêm sản phẩm mới vào danh sách
  let productsList: Product[] = [];
  
  function addProduct(name: string, price: number, category: Category): Product[] {
    const newProduct: Product = { name, price,category  };
    productsList.push(newProduct);
    return productsList;
  }
  
  // Sử dụng hàm addProduct để thêm sản phẩm mới
  addProduct("Laptop", 1500, "laptop");
  addProduct("Phone", 800, "phone");
  
  function findProductByName(productName: string): Product | string {
    const product = productsList.find(p => p.name.toLowerCase() === productName.toLowerCase());
    
    if (product) {
      return product;
    } else {
      return `Không tìm thấy sản phẩm với tên: ${productName}`;
    }
  }
  displayProducts();


const searchResult1 = findProductByName("laptop");
console.log(searchResult1); 

const searchResult2 = findProductByName("abc");
console.log(searchResult2); 
  function displayProducts(): void {
    console.log("Danh sách sản phẩm:");
    productsList.forEach((product, index) => {
      console.log(`${index + 1}. ${product.name} - ${product.price} VND - ${product.category}`);
    });
  }