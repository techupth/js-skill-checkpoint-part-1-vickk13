// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
inventory[0].quantity = 200;
console.log(inventory);

inventory.push({ name: "Orange", price: 20, quantity: 300 });
console.log(inventory);

let totalPrice =
  inventory[0].price * inventory[0].quantity +
  inventory[1].price * inventory[1].quantity +
  inventory[2].price * inventory[2].quantity;
console.log(totalPrice);

console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดใยสต็อก ${totalPrice} บาท`);
