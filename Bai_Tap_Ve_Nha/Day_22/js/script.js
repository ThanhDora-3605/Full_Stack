function showGreeting(title) {
  console.log(title);
}
/**
 * Bài tập 1
Viết một hệ thống quản lý nhân viên gồm:
- Class Employee có các thuộc tính: name, age, salary và phương thức getInfo().
- Class Developer kế thừa từ Employee, thêm thuộc tính programmingLanguage.
- Class Manager kế thừa từ Employee, thêm thuộc tính employees (mảng các nhân viên mà họ quản lý).
- Manager có phương thức addEmployee(employee) để thêm nhân viên vào danh sách.
class Employee {
  // Viết code ở đây
}
class Developer extends Employee {
  // Viết code ở đây
}
class Manager extends Employee {
  // Viết code ở đây
}
const dev1 = new Developer("John", 28, 5000, "JavaScript");
const dev2 = new Developer("Jane", 30, 5500, "Python");
const manager = new Manager("Alice", 35, 8000);
manager.addEmployee(dev1);
manager.addEmployee(dev2);
manager.getInfo();
Copy
// Output:
// Alice - Tuổi: 35 - Lương: 8000
// Quản lý nhân viên:
//  - John, Ngôn ngữ: JavaScript
//  - Jane, Ngôn ngữ: Python
 */

showGreeting("Bài 1: ");
class Employee {
  #name;
  #age;
  #salary;

  constructor(name, age, salary) {
    this.#name = name;
    this.#age = age;
    this.#salary = salary;
  }

  getName() {
    return this.#name;
  }
  getAge() {
    return this.#age;
  }
  getSalary() {
    return this.#salary;
  }

  getInfo() {
    return `${this.#name} - Tuổi: ${this.#age} - Lương: ${this.#salary}`;
  }
}

class Developer extends Employee {
  #programmingLanguage;

  constructor(name, age, salary, programmingLanguage) {
    super(name, age, salary);
    this.#programmingLanguage = programmingLanguage;
  }

  getProgrammingLanguage() {
    return this.#programmingLanguage;
  }

  getInfo() {
    return `${this.getName()}, Ngôn ngữ: ${this.#programmingLanguage}`;
  }
}

class Manager extends Employee {
  #employees;

  constructor(name, age, salary) {
    super(name, age, salary);
    this.#employees = [];
  }

  addEmployee(employee) {
    this.#employees.push(employee);
  }

  getInfo() {
    let result = super.getInfo();
    result += "\nQuản lý nhân viên:";
    this.#employees.forEach((emp) => {
      result += `\n - ${emp.getInfo()}`;
    });
    return result;
  }
}

// Test
const dev1 = new Developer("John", 28, 5000, "JavaScript");
const dev2 = new Developer("Jane", 30, 5500, "Python");
const manager = new Manager("Alice", 35, 8000);
manager.addEmployee(dev1);
manager.addEmployee(dev2);
console.log(manager.getInfo());

showGreeting("Bài 2: ");

/**
 * Bài tập 2

Viết một class Car và Bicycle, cả hai đều có phương thức move().

Sau đó, viết một hàm start(vehicle) chỉ nhận những object có phương thức move().

class Car {
  // Viết code ở đây
}
class Bicycle {
  // Viết code ở đây
}
function start(vehicle) {
  if (typeof vehicle.move === "function") {
    vehicle.move();
  } else {
    console.log("Không thể di chuyển!");
  }
}
const car = new Car();
const bike = new Bicycle();
start(car); // Xe hơi đang chạy...
start(bike); // Xe đạp đang chạy...
start({}); // Không thể di chuyển!
 */

class Car {
  move() {
    console.log("Xe hơi đang chạy...");
  }
}

class Bicycle {
  move() {
    console.log("Xe đạp đang chạy...");
  }
}

function start(vehicle) {
  if (typeof vehicle.move === "function") {
    vehicle.move();
  } else {
    console.log("Không thể di chuyển!");
  }
}

// Test
const car = new Car();
const bike = new Bicycle();
start(car); // Xe hơi đang chạy...
start(bike); // Xe đạp đang chạy...
start({}); // Không thể di chuyển!
