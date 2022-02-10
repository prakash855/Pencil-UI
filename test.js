const arr = [
  {
    name: "Apple",
  },
  {
    name: "Mango",
  },
  {
    name: "Potato",
  },
  {
    name: "Guava",
  },
  {
    name: "Capsicum",
  },
];

// arr[0].type = 'veg'
// console.log(arr[0])
const brr = arr.map((item, index) =>
  item.name.length > 5 ? (item.type = "veg") : (item.type = "fruit")
);
console.log(brr);
