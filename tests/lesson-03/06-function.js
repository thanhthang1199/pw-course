// 1. Hàm multiply
function multiply(a, b) {
  console.log(a * b);
}
multiply(3, 4);
multiply(7, 8);

// 2. Hàm findMin
function findMin(a, b, c) {
  if (a <= b && a <= c) return a;
  if (b <= a && b <= c) return b;
  return c;
}
console.log(findMin(3, 1, 2));
console.log(findMin(10, 5, 8));

// 3. Hàm getTopStudents
function getTopStudents(students, threshold) {
  const topStudents = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].score >= threshold) {
      topStudents.push(students[i].name);
    }
  }
  return topStudents;
}

const students = [
  { name: "An", score: 9 },
  { name: "Binh", score: 6 },
  { name: "Chau", score: 8 },
  { name: "Dao", score: 5 },
  { name: "Huong", score: 7 },
];
console.log(getTopStudents(students, 8));

// 4. Hàm calculateInterest
function calculateInterest(principal, rate, years) {
  const total = principal + (principal * rate * years) / 100;
  return total;
}
console.log(calculateInterest(10000000, 5, 3));
