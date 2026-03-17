// 1. Tính tổng từ 1 đến 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Tổng từ 1 đến 100:", sum);

// 2. In bảng cửu chương từ 2 đến 9
for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// 3. Tạo mảng chứa các số lẻ từ 1 đến 99
const oddNumbers = [];
for (let i = 1; i <= 99; i += 2) {
  oddNumbers.push(i);
}
console.log("Số lẻ từ 1 đến 99:", oddNumbers);

// 4. In ra 10 email
for (let i = 1; i <= 10; i++) {
  console.log(`user${i}@example.com`);
}

// 5. Tính tổng doanh thu 12 tháng
const revenues = [
  { month: 1, total: 100 },
  { month: 2, total: 200 },
  { month: 3, total: 150 },
  { month: 4, total: 300 },
  { month: 5, total: 250 },
  { month: 6, total: 400 },
  { month: 7, total: 350 },
  { month: 8, total: 500 },
  { month: 9, total: 450 },
  { month: 10, total: 600 },
  { month: 11, total: 550 },
  { month: 12, total: 700 },
];

let totalRevenue = 0;
for (let i = 0; i < revenues.length; i++) {
  totalRevenue += revenues[i].total;
}
console.log("Tổng doanh thu:", totalRevenue);
