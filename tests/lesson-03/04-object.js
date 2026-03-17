// 1. Object car
const car = { make: "Toyota", model: "Corolla", year: 2021 };
console.log(car.year);

// 2. Object person với address lồng nhau
const person = {
  name: "Nguyen Van A",
  address: {
    street: "123 Nguyen Trai",
    city: "Ho Chi Minh",
    country: "Vietnam",
  },
};
console.log(person.address.street);

// 3. Object student, truy cập điểm toán bằng ngoặc vuông
const student = {
  name: "Tran Thi B",
  grades: {
    math: 9,
    english: 8,
  },
};
console.log(student.grades["math"]);

// 4. Object settings, thay đổi volume
const settings = {
  volume: 50,
  brightness: 80,
};
settings.volume = 70;
console.log(settings);

// 5. Object bike, thêm thuộc tính color
const bike = { brand: "Honda" };
bike.color = "red";
console.log(bike);

// 6. Object employee, xóa thuộc tính age
const employee = { name: "Le Van C", age: 30 };
delete employee.age;
console.log(employee);

// 7. Object school
const school = {
  classA: ["An", "Binh", "Chau"],
  classB: ["Đào", "Hương", "Giang"],
};
console.log(school);
