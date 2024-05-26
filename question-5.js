// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "SALE20";
// เริ่มเขียนโค้ดตรงนี้
let totalPrice =
  products[0].quantity * products[0].price +
  products[1].quantity * products[1].price +
  products[2].quantity * products[2].price;

function calculatePrice(promotionCode) {
  if (promotionCode === "SALE20") {
    return totalPrice - totalPrice * 0.2;
  } else if (promotionCode === "SALE50") {
    return totalPrice - totalPrice * 0.5;
  } else {
    return totalPrice;
  }
}
console.log(calculatePrice(promotionCode));
