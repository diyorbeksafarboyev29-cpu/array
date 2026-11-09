// // // let sum = 0;
// // // let nums = [1, 3, 4, 5, 6, 7, 8];
// // // function yigindi(nums) {
// // //   for (let i of nums) {
// // //     sum += i;
// // //   }
// // //   return sum;
// // // }
// // // console.log(yigindi(nums));

// // // let son = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 56];
// // // function juft(son) {
// // //   for (let i of son) {
// // //     if (i % 2 == 0) {
// // //       son;
// // //       console.log(juft(son));
// // //     }
// // //   }
// // // }

// // // function kattaYoshUser(arr) {
// // //   let init = arr[0];
// // //   for (let i of arr) {
// // //     if (init.age < i.age) {
// // //       init = i;
// // //     }
// // //   }
// // //   return init;
// // // }

// // // console.log(kattaYoshUser(users));
// // // let users = [
// // //   {
// // //     id: 1,
// // //     name: "fayzullohon",
// // //     age: 14,
// // //   },
// // //   {
// // //     id: 2,
// // //     name: "Bexruzbek",
// // //     age: 22,
// // //   },

// // //   {
// // //     id: 3,
// // //     name: "Asadbek",
// // //     age: 26,
// // //   },

// // //   {
// // //     id: 4,
// // //     name: "Dostonbek",
// // //     age: 19,
// // //   },
// // //   {
// // //     id: 5,
// // //     name: "Inomjon",
// // //     age: 12,
// // //   },
// // // ];

// // // function voyagaketgan(arr) {
// // //   let newarr = [];
// // //   for (let i of arr) {
// // //     if (i.age > 18) {
// // //       newarr.push(i);
// // //     }
// // //   }
// // //   return newarr;
// // // }

// // // console.log(voyagaketgan(users));
// // let harflar = ["a", "b", "c", "d", "e"];

// // console.log(harflar.slice(1, 3)); // ["b", "c"]  (1 va 2-indeks)
// // console.log(harflar.slice(2)); // ["c", "d", "e"]  (2 dan oxirigacha)
// // console.log(harflar); // ["a", "b", "c", "d", "e"]  (o'zgarmadi)

// // let sonlar = [1, 2, 3, 4, 5, 7, 8, 9];

// // // console.log(sonlar.slice(1));

// // let mevalar = [
// //   {
// //     id: 1,
// //     nomi: "olma",
// //     mudatti: 2,
// //     narxi: 1100,
// //   },
// //   {
// //     id: 2,
// //     nomi: "shaftoli",
// //     mudatti: 1,
// //     narxi: 1000,
// //   },
// //   {
// //     id: 3,
// //     nomi: "qulpinay",
// //     mudatti: 4,
// //     narxi: 1200,
// //   },
// // ];

// // console.log(mevalar.mudatti);

// // // function narxikattasi(arr) {
// // //   let init = arr[0];
// // //   for (let i of arr) {
// // //     if (init.narxi < i.narxi) {
// // //       init = i;
// // //     }
// // //   }
// // //   return init;
// // // }

// // // console.log(narxikattasi(mevalar));

// // let ichimlik = [
// //   {
// //     raqami: 1,
// //     nomi: "coca cola",
// //     narxi: 14000,
// //   },
// //   {
// //     raqami: 2,
// //     nomi: "pepsi",
// //     narxi: 15000,
// //   },

// //   {
// //     raqami: 3,
// //     nomi: "fanta",
// //     narxi: 13000,
// //   },
// // ];

// // function narxikichigi(arr) {
// //   let init = arr[0];
// //   for (let i of arr) {
// //     if ((init.narxi = i.narxi)) {
// //       init = i;
// //     }
// //   }
// //   return init;
// // }

// // console.log(narxikichigi(ichimlik));

// //======================================================================================

// // JavaScript Array — Products masalalari
// // Mavzu: massiv bilan ishlash, for sikli, if/else va funksiyalar. Masalalar boshlang‘ich–o‘rta darajadagi
// // o‘quvchilar uchun tayyorlangan.
// // 1. Berilgan ma’lumotlar
// // Quyidagi products massivini kod muhitingizga ko‘chirib oling. Barcha masalalarni shu massiv asosida
// // bajaring.
// // const products = [
// //  { id: 1, name: "iPhone 16", price: 12000000, category: "phone", stock: 10 },
// //  { id: 2, name: "Samsung S25", price: 10000000, category: "phone", stock: 5 },
// //  { id: 3, name: "MacBook Air", price: 15000000, category: "laptop", stock: 3 },
// //  { id: 4, name: "Redmi Note 14", price: 2500000, category: "phone", stock: 0 },
// //  { id: 5, name: "AirPods Pro", price: 2000000, category: "accessory", stock: 15 },
// //  { id: 6, name: "Lenovo Legion", price: 13000000, category: "laptop", stock: 2 },
// //  { id: 7, name: "Samsung Buds", price: 1500000, category: "accessory", stock: 0 },
// //  { id: 8, name: "iPad Air", price: 8000000, category: "tablet", stock: 7 },
// //  { id: 9, name: "Xiaomi Band", price: 500000, category: "accessory", stock: 20 },
// //  { id: 10, name: "HP Pavilion", price: 9000000, category: "laptop", stock: 4 }
// // ]

// //=========================================================================================

// // Masalalar .Har bir topshiriq uchun alohida funksiya yozing. Funksiya kerak bo‘lsa parametr qabul qilsin.

// // 1. Eng qimmat mahsulot
// // Eng qimmat mahsulotni aniqlaydigan getMostExpensiveProduct() funksiyasini yozing
// // const products = [
// //   { id: 1, name: "iPhone 16", price: 12000000, category: "phone", stock: 10 },
// //   { id: 2, name: "Samsung S25", price: 10000000, category: "phone", stock: 5 },
// //   { id: 3, name: "MacBook Air", price: 15000000, category: "laptop", stock: 3 },
// //   { id: 4, name: "Redmi Note 14", price: 2500000, category: "phone", stock: 0 },
// //   {
// //     id: 5,
// //     name: "AirPods Pro",
// //     price: 2000000,
// //     category: "accessory",
// //     stock: 15,
// //   },
// //   {
// //     id: 6,
// //     name: "Lenovo Legion",
// //     price: 13000000,
// //     category: "laptop",
// //     stock: 2,
// //   },
// //   {
// //     id: 7,
// //     name: "Samsung Buds",
// //     price: 1500000,
// //     category: "accessory",
// //     stock: 0,
// //   },
// //   { id: 8, name: "iPad Air", price: 8000000, category: "tablet", stock: 7 },
// //   {
// //     id: 9,
// //     name: "Xiaomi Band",
// //     price: 500000,
// //     category: "accessory",
// //     stock: 20,
// //   },
// //   { id: 10, name: "HP Pavilion", price: 9000000, category: "laptop", stock: 4 },
// // ];

// // function engqimmat(mahsulot) {
// //   let init = mahsulot[0];
// //   for (let i of mahsulot) {
// //     if (init.mahsulot < i.mahsulot) {
// //       init = i;
// //     }
// //   }
// //   return init;
// // }

// // console.log(engqimmat(products));

// //=============================================================================================================

// // 2. Eng arzon mahsulot
// // Eng arzon mahsulotni aniqlaydigan getCheapestProduct() funksiyasini yozing.

// // const products = [
// //   { id: 1, name: "iPhone 16", price: 12000000, category: "phone", stock: 10 },
// //   { id: 2, name: "Samsung S25", price: 10000000, category: "phone", stock: 5 },
// //   { id: 3, name: "MacBook Air", price: 15000000, category: "laptop", stock: 3 },
// //   { id: 4, name: "Redmi Note 14", price: 2500000, category: "phone", stock: 0 },
// //   {
// //     id: 5,
// //     name: "AirPods Pro",
// //     price: 2000000,
// //     category: "accessory",
// //     stock: 15,
// //   },
// //   {
// //     id: 6,
// //     name: "Lenovo Legion",
// //     price: 13000000,
// //     category: "laptop",
// //     stock: 2,
// //   },
// //   {
// //     id: 7,
// //     name: "Samsung Buds",
// //     price: 1500000,
// //     category: "accessory",
// //     stock: 0,
// //   },
// //   { id: 8, name: "iPad Air", price: 8000000, category: "tablet", stock: 7 },
// //   {
// //     id: 9,
// //     name: "Xiaomi Band",
// //     price: 500000,
// //     category: "accessory",
// //     stock: 20,
// //   },
// //   { id: 10, name: "HP Pavilion", price: 9000000, category: "laptop", stock: 4 },
// // ];

// // function engarzon(arr) {
// //   let init = arr[0];
// //   for (let i of arr) {
// //     if (init.arr > i.arr) {
// //       init = i;
// //     }
// //   }
// //   return init;
// // }

// // console.log(engarzon(products));

// //================================================================================================================================

// // 3. Mahsulotlar soni
// // Array ichida jami nechta mahsulot borligini aniqlaydigan getProductsCount() funksiyasini yozing.

// // const products = [
// //   { id: 1, name: "iPhone 16", price: 12000000, category: "phone", stock: 10 },
// //   { id: 2, name: "Samsung S25", price: 10000000, category: "phone", stock: 5 },
// //   { id: 3, name: "MacBook Air", price: 15000000, category: "laptop", stock: 3 },
// //   { id: 4, name: "Redmi Note 14", price: 2500000, category: "phone", stock: 0 },
// //   {
// //     id: 5,
// //     name: "AirPods Pro",
// //     price: 2000000,
// //     category: "accessory",
// //     stock: 15,
// //   },
// //   {
// //     id: 6,
// //     name: "Lenovo Legion",
// //     price: 13000000,
// //     category: "laptop",
// //     stock: 2,
// //   },
// //   {
// //     id: 7,
// //     name: "Samsung Buds",
// //     price: 1500000,
// //     category: "accessory",
// //     stock: 0,
// //   },
// //   { id: 8, name: "iPad Air", price: 8000000, category: "tablet", stock: 7 },
// //   {
// //     id: 9,
// //     name: "Xiaomi Band",
// //     price: 500000,
// //     category: "accessory",
// //     stock: 20,
// //   },
// //   { id: 10, name: "HP Pavilion", price: 9000000, category: "laptop", stock: 4 },
// // ];

// // function getProductsCount(arr) {
// //   let count = 0;
// //   for (let i of arr) {
// //     count++;
// //   }
// //   return count;
// // }
// // console.log(getProductsCount(products));

// //=================================================================================================

// // 4. ID bo‘yicha qidirish
// // Berilgan id orqali mahsulotni topib qaytaradigan getProductById(id) funksiyasini yozing. Agar
// // mahsulot topilmasa, "Product not found" qaytarsin.

// // const products = [
// //   { id: 1, name: "iPhone 16", price: 12000000, category: "phone", stock: 10 },
// //   { id: 2, name: "Samsung S25", price: 10000000, category: "phone", stock: 5 },
// //   { id: 3, name: "MacBook Air", price: 15000000, category: "laptop", stock: 3 },
// //   { id: 4, name: "Redmi Note 14", price: 2500000, category: "phone", stock: 0 },
// //   {
// //     id: 5,
// //     name: "AirPods Pro",
// //     price: 2000000,
// //     category: "accessory",
// //     stock: 15,
// //   },
// //   {
// //     id: 6,
// //     name: "Lenovo Legion",
// //     price: 13000000,
// //     category: "laptop",
// //     stock: 2,
// //   },
// //   {
// //     id: 7,
// //     name: "Samsung Buds",
// //     price: 1500000,
// //     category: "accessory",
// //     stock: 0,
// //   },
// //   { id: 8, name: "iPad Air", price: 8000000, category: "tablet", stock: 7 },
// //   {
// //     id: 9,
// //     name: "Xiaomi Band",
// //     price: 500000,
// //     category: "accessory",
// //     stock: 20,
// //   },
// //   { id: 10, name: "HP Pavilion", price: 9000000, category: "laptop", stock: 4 },
// // ];

// // function getProductById(id) {
// //   for (let i of products) {
// //     if (i.id === id) {
// //       return i;
// //     }
// //   }
// //   return "Product not found";
// // }

// // console.log(getProductById(1));

// //============================================================================================

// // 5. Narxi bo‘yicha qidirish
// // Narxi 10 000 000 so‘mdan yuqori bo‘lgan barcha mahsulotlarni aniqlaydigan getExpensiveProducts()
// // funksiyasini yozing.

// // const products = [
// //   { id: 1, name: "iPhone 16", price: 12000000, category: "phone", stock: 10 },
// //   { id: 2, name: "Samsung S25", price: 10000000, category: "phone", stock: 5 },
// //   { id: 3, name: "MacBook Air", price: 15000000, category: "laptop", stock: 3 },
// //   { id: 4, name: "Redmi Note 14", price: 2500000, category: "phone", stock: 0 },
// //   {
// //     id: 5,
// //     name: "AirPods Pro",
// //     price: 2000000,
// //     category: "accessory",
// //     stock: 15,
// //   },
// //   {
// //     id: 6,
// //     name: "Lenovo Legion",
// //     price: 13000000,
// //     category: "laptop",
// //     stock: 2,
// //   },
// //   {
// //     id: 7,
// //     name: "Samsung Buds",
// //     price: 1500000,
// //     category: "accessory",
// //     stock: 0,
// //   },
// //   { id: 8, name: "iPad Air", price: 8000000, category: "tablet", stock: 7 },
// //   {
// //     id: 9,
// //     name: "Xiaomi Band",
// //     price: 500000,
// //     category: "accessory",
// //     stock: 20,
// //   },
// //   { id: 10, name: "HP Pavilion", price: 9000000, category: "laptop", stock: 4 },
// // ];

// // function getExpensiveProducts(price) {
// //   for (let i of products) {
// //     if (i.price > 10000000) {
// //       return i;
// //     }
// //   }
// // }

// // console.log(getExpensiveProducts(12000000));

// //===================================================================================================

// // 6. Ombordagi mahsulotlar
// // stock qiymati 0 dan katta bo‘lgan mahsulotlarni aniqlaydigan getAvailableProducts() funksiyasini
// // yozing.

// // const products = [
// //   { id: 1, name: "iPhone 16", price: 12000000, category: "phone", stock: 10 },
// //   { id: 2, name: "Samsung S25", price: 10000000, category: "phone", stock: 5 },
// //   { id: 3, name: "MacBook Air", price: 15000000, category: "laptop", stock: 3 },
// //   { id: 4, name: "Redmi Note 14", price: 2500000, category: "phone", stock: 0 },
// //   {
// //     id: 5,
// //     name: "AirPods Pro",
// //     price: 2000000,
// //     category: "accessory",
// //     stock: 15,
// //   },
// //   {
// //     id: 6,
// //     name: "Lenovo Legion",
// //     price: 13000000,
// //     category: "laptop",
// //     stock: 2,
// //   },
// //   {
// //     id: 7,
// //     name: "Samsung Buds",
// //     price: 1500000,
// //     category: "accessory",
// //     stock: 0,
// //   },
// //   { id: 8, name: "iPad Air", price: 8000000, category: "tablet", stock: 7 },
// //   {
// //     id: 9,
// //     name: "Xiaomi Band",
// //     price: 500000,
// //     category: "accessory",
// //     stock: 20,
// //   },
// //   { id: 10, name: "HP Pavilion", price: 9000000, category: "laptop", stock: 4 },
// // ];

// // function getAvailableProducts() {
// //   let natija = [];
// //   for (let i of products) {
// //     if (i.stock > 0) {
// //       natija.push(i);
// //     }
// //   }
// //   return natija;
// // }

// // console.log(getAvailableProducts());

// //====================================================================================================================

// // 7. Tugagan mahsulotlar
// // stock qiymati 0 ga teng bo‘lgan mahsulotlarni aniqlaydigan getOutOfStockProducts() funksiyasini
// // yozing.

// // const products = [
// //   { id: 1, name: "iPhone 16", price: 12000000, category: "phone", stock: 10 },
// //   { id: 2, name: "Samsung S25", price: 10000000, category: "phone", stock: 5 },
// //   { id: 3, name: "MacBook Air", price: 15000000, category: "laptop", stock: 3 },
// //   { id: 4, name: "Redmi Note 14", price: 2500000, category: "phone", stock: 0 },
// //   {
// //     id: 5,
// //     name: "AirPods Pro",
// //     price: 2000000,
// //     category: "accessory",
// //     stock: 15,
// //   },
// //   {
// //     id: 6,
// //     name: "Lenovo Legion",
// //     price: 13000000,
// //     category: "laptop",
// //     stock: 2,
// //   },
// //   {
// //     id: 7,
// //     name: "Samsung Buds",
// //     price: 1500000,
// //     category: "accessory",
// //     stock: 0,
// //   },
// //   { id: 8, name: "iPad Air", price: 8000000, category: "tablet", stock: 7 },
// //   {
// //     id: 9,
// //     name: "Xiaomi Band",
// //     price: 500000,
// //     category: "accessory",
// //     stock: 20,
// //   },
// //   { id: 10, name: "HP Pavilion", price: 9000000, category: "laptop", stock: 4 },
// // ];

// // function getOutOfStockProducts() {
// //   let natija = [];
// //   for (let i of products) {
// //     if (i.stock === 0) {
// //       natija.push(i);
// //     }
// //   }
// //   return natija;
// // }

// // console.log(getOutOfStockProducts(products));

// //============================================================================================

// // 8. Kategoriya bo‘yicha qidirish
// // Berilgan kategoriya bo‘yicha barcha mahsulotlarni chiqaradigan getProductsByCategory(category)
// // funksiyasini yozing.

// // const products = [
// //   { id: 1, name: "iPhone 16", price: 12000000, category: "phone", stock: 10 },
// //   { id: 2, name: "Samsung S25", price: 10000000, category: "phone", stock: 5 },
// //   { id: 3, name: "MacBook Air", price: 15000000, category: "laptop", stock: 3 },
// //   { id: 4, name: "Redmi Note 14", price: 2500000, category: "phone", stock: 0 },
// //   {
// //     id: 5,
// //     name: "AirPods Pro",
// //     price: 2000000,
// //     category: "accessory",
// //     stock: 15,
// //   },
// //   {
// //     id: 6,
// //     name: "Lenovo Legion",
// //     price: 13000000,
// //     category: "laptop",
// //     stock: 2,
// //   },
// //   {
// //     id: 7,
// //     name: "Samsung Buds",
// //     price: 1500000,
// //     category: "accessory",
// //     stock: 0,
// //   },
// //   { id: 8, name: "iPad Air", price: 8000000, category: "tablet", stock: 7 },
// //   {
// //     id: 9,
// //     name: "Xiaomi Band",
// //     price: 500000,
// //     category: "accessory",
// //     stock: 20,
// //   },
// //   { id: 10, name: "HP Pavilion", price: 9000000, category: "laptop", stock: 4 },
// // ];

// // function getProductsByCategory(category) {
// //   let natija = [];
// //   for (let i of products) {
// //     if (i.category === category) {
// //       natija.push(i);
// //     }
// //   }
// //   return natija;
// // }

// // console.log(getProductsByCategory("phone"));

// //================================================================================================================

// // 9. Narxlar yig‘indisi
// // Barcha mahsulotlarning narxlari yig‘indisini hisoblaydigan getTotalPrice() funksiyasini yozing.

// // const products = [
// //   { id: 1, name: "iPhone 16", price: 12000000, category: "phone", stock: 10 },
// //   { id: 2, name: "Samsung S25", price: 10000000, category: "phone", stock: 5 },
// //   { id: 3, name: "MacBook Air", price: 15000000, category: "laptop", stock: 3 },
// //   { id: 4, name: "Redmi Note 14", price: 2500000, category: "phone", stock: 0 },
// //   {
// //     id: 5,
// //     name: "AirPods Pro",
// //     price: 2000000,
// //     category: "accessory",
// //     stock: 15,
// //   },
// //   {
// //     id: 6,
// //     name: "Lenovo Legion",
// //     price: 13000000,
// //     category: "laptop",
// //     stock: 2,
// //   },
// //   {
// //     id: 7,
// //     name: "Samsung Buds",
// //     price: 1500000,
// //     category: "accessory",
// //     stock: 0,
// //   },
// //   { id: 8, name: "iPad Air", price: 8000000, category: "tablet", stock: 7 },
// //   {
// //     id: 9,
// //     name: "Xiaomi Band",
// //     price: 500000,
// //     category: "accessory",
// //     stock: 20,
// //   },
// //   { id: 10, name: "HP Pavilion", price: 9000000, category: "laptop", stock: 4 },
// // ];

// // function getTotalPrice() {
// //   let sum = 0;
// //   for (let i of products) {
// //     sum += i.price;
// //   }
// //   return sum ;
// // }

// // console.log(getTotalPrice());

// //==========================================================================================================

// // 10. O‘rtacha narx
// // Barcha mahsulotlarning o‘rtacha narxini hisoblaydigan getAveragePrice() funksiyasini yozing

// const products = [
//   { id: 1, name: "iPhone 16", price: 12000000, category: "phone", stock: 10 },
//   { id: 2, name: "Samsung S25", price: 10000000, category: "phone", stock: 5 },
//   { id: 3, name: "MacBook Air", price: 15000000, category: "laptop", stock: 3 },
//   { id: 4, name: "Redmi Note 14", price: 2500000, category: "phone", stock: 0 },
//   {
//     id: 5,
//     name: "AirPods Pro",
//     price: 2000000,
//     category: "accessory",
//     stock: 15,
//   },
//   {
//     id: 6,
//     name: "Lenovo Legion",
//     price: 13000000,
//     category: "laptop",
//     stock: 2,
//   },
//   {
//     id: 7,
//     name: "Samsung Buds",
//     price: 1500000,
//     category: "accessory",
//     stock: 0,
//   },
//   { id: 8, name: "iPad Air", price: 8000000, category: "tablet", stock: 7 },
//   {
//     id: 9,
//     name: "Xiaomi Band",
//     price: 500000,
//     category: "accessory",
//     stock: 20,
//   },
//   { id: 10, name: "HP Pavilion", price: 9000000, category: "laptop", stock: 4 },
// ];

// function getTotalPrice() {
//   let sum = 0;
//   for (let i of products) {
//     sum += i.price;
//   }
//   return sum / 2;
// }

// console.log(getTotalPrice());

// =======================================================================================================

// 11. Narx oralig‘i
// Berilgan minimal va maksimal narx oralig‘idagi mahsulotlarni aniqlaydigan getProductsByPrice(min,
// max) funksiyasini yozing

// const products = [
//   { id: 1, name: "iPhone 16", price: 12000000, category: "phone", stock: 10 },
//   { id: 2, name: "Samsung S25", price: 10000000, category: "phone", stock: 5 },
//   { id: 3, name: "MacBook Air", price: 15000000, category: "laptop", stock: 3 },
//   { id: 4, name: "Redmi Note 14", price: 2500000, category: "phone", stock: 0 },
//   {
//     id: 5,
//     name: "AirPods Pro",
//     price: 2000000,
//     category: "accessory",
//     stock: 15,
//   },
//   {
//     id: 6,
//     name: "Lenovo Legion",
//     price: 13000000,
//     category: "laptop",
//     stock: 2,
//   },
//   {
//     id: 7,
//     name: "Samsung Buds",
//     price: 1500000,
//     category: "accessory",
//     stock: 0,
//   },
//   { id: 8, name: "iPad Air", price: 8000000, category: "tablet", stock: 7 },
//   {
//     id: 9,
//     name: "Xiaomi Band",
//     price: 500000,
//     category: "accessory",
//     stock: 20,
//   },
//   { id: 10, name: "HP Pavilion", price: 9000000, category: "laptop", stock: 4 },
// ];

// function getProductsByPrice(min, max) {
//   let natija = [];
//   for (let i of products) {
//     if (i.price >= min && i.price <= max) {
//       natija.push(i);
//     }
//   }
//   return natija;
// }

// console.log(getProductsByPrice(5000000, 9000000));

//=======================================================================================================================

// 12. Mahsulot mavjudligini tekshirish
// Berilgan nomdagi mahsulot mavjud yoki mavjud emasligini aniqlaydigan checkProduct(name)
// funksiyasini yozing. Natija true yoki false bo‘lsin.

// const products = [
//   { id: 1, name: "iPhone 16", price: 12000000, category: "phone", stock: 10 },
//   { id: 2, name: "Samsung S25", price: 10000000, category: "phone", stock: 5 },
//   { id: 3, name: "MacBook Air", price: 15000000, category: "laptop", stock: 3 },
//   { id: 4, name: "Redmi Note 14", price: 2500000, category: "phone", stock: 0 },
//   {
//     id: 5,
//     name: "AirPods Pro",
//     price: 2000000,
//     category: "accessory",
//     stock: 15,
//   },
//   {
//     id: 6,
//     name: "Lenovo Legion",
//     price: 13000000,
//     category: "laptop",
//     stock: 2,
//   },
//   {
//     id: 7,
//     name: "Samsung Buds",
//     price: 1500000,
//     category: "accessory",
//     stock: 0,
//   },
//   { id: 8, name: "iPad Air", price: 8000000, category: "tablet", stock: 7 },
//   {
//     id: 9,
//     name: "Xiaomi Band",
//     price: 500000,
//     category: "accessory",
//     stock: 20,
//   },
//   { id: 10, name: "HP Pavilion", price: 9000000, category: "laptop", stock: 4 },
// ];

// function checkProduct(name) {
//   for (let i of products) {
//     if (i.name === name) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(checkProduct("HP Pavilion"));
