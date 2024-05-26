// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let lowestQuantity = inventory[0].quantity;
for (let quantity in inventory) {
  if (quantity < lowestQuantity) {
    lowestQuantity = quantity;
  }
}
console.log(lowestQuantity);
