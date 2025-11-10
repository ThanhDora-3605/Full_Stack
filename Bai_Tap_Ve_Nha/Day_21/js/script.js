function showGreeting(title) {
  console.log(title);
}

showGreeting("bài 1: ");
/**
 * Bài 1

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
  { id: 2, name: "Phone", category: "Electronics", price: 800 },
  { id: 3, name: "Shirt", category: "Clothing", price: 40 },
  { id: 4, name: "Shoes", category: "Clothing", price: 60 },
  { id: 5, name: "Headphones", category: "Electronics", price: 150 },
];
Viết các hàm thực hiện các yêu cầu sau:

- Lọc ra các sản phẩm thuộc danh mục "Electronics".

- Tính tổng giá của tất cả sản phẩm trong danh mục "Electronics".

- Chuyển đổi mảng sản phẩm thành một object, trong đó key là category, value là mảng các sản phẩm thuộc danh mục đó.
 */
// - Lọc ra các sản phẩm thuộc danh mục "Electronics".
const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
  { id: 2, name: "Phone", category: "Electronics", price: 800 },
  { id: 3, name: "Shirt", category: "Clothing", price: 40 },
  { id: 4, name: "Shoes", category: "Clothing", price: 60 },
  { id: 5, name: "Headphones", category: "Electronics", price: 150 },
];
const locElectronics = products.filter(
  (products) => products.category === "Electronics"
);

// - Tính tổng giá của tất cả sản phẩm trong danh mục "Electronics".
const sumPrice = locElectronics.reduce(
  (sum, products) => sum + products.price,
  0
);

// - Chuyển đổi mảng sản phẩm thành một object, trong đó key là category, value là mảng các sản phẩm thuộc danh mục đó.
const groupByCategory = (products) =>
  products.reduce((obj, product) => {
    const key = product.category;
    if (!obj[key]) obj[key] = [];
    obj[key].push(product);
    return obj;
  }, {});

console.log("Sản phẩm Electronics:", locElectronics);
console.log(
  "Tổng giá của tất cả sản phẩm trong danh mục 'Electronics':",
  sumPrice
);
console.log("Object theo category:", groupByCategory(products));

showGreeting("bài 2: ");
/**
 * Bài 2

const students = [
  { id: 1, name: "An", scores: { math: 8, english: 7, science: 9 } },
  { id: 2, name: "Bình", scores: { math: 6, english: 8, science: 7 } },
  { id: 3, name: "Châu", scores: { math: 9, english: 6, science: 8 } },
];
Viết các hàm thực hiện các yêu cầu sau:

- Tính điểm trung bình của từng học viên.

- Tìm học viên có điểm trung bình cao nhất.

- Sắp xếp danh sách học viên theo điểm trung bình giảm dần.
 */
// - Tính điểm trung bình của từng học viên.

const students = [
  { id: 1, name: "An", scores: { math: 8, english: 7, science: 9 } }, // TB = (8+7+9)/3 = 8
  { id: 2, name: "Bình", scores: { math: 6, english: 8, science: 7 } }, // TB = (6+8+7)/3 = 7
  { id: 3, name: "Châu", scores: { math: 9, english: 6, science: 8 } }, // TB = (9+6+8)/3 = 7.666...
];
const studentsAverage = (students) => {
  return students.map((students) => {
    const arr = Object.values(students.scores);
    const sum = arr.reduce((sum, scores) => sum + scores, 0);
    const average = sum / arr.length;
    return { id: students.id, name: students.name, average };
  });
};

// - Tìm học viên có điểm trung bình cao nhất.
const maxAverage = studentsAverage(students).reduce((max, students) => {
  return students.average > max.average ? students : max;
});

// - Sắp xếp danh sách học viên theo điểm trung bình giảm dần.
const studentsSort = studentsAverage(students).sort(
  (a, b) => b.average - a.average
);

console.log("Điểm trung bình của từng học viên:", studentsAverage(students));
console.log("Học viên có điểm trung bình cao nhất:", maxAverage);
console.log("Danh sách học viên theo điểm trung bình giảm dần:", studentsSort);
/** output:
 * Sắp xếp giảm TB: [
  { id: 1, name: 'An', average: 8 },
  { id: 3, name: 'Châu', average: 7.666... },
  { id: 2, name: 'Bình', average: 7 }
]
 */

showGreeting("bài 3: ");

/**
 * Bài 3

const orders = [
  {
    orderId: 101,
    customer: "John",
    items: [{ name: "Laptop", price: 1000, quantity: 1 }],
  },
  {
    orderId: 102,
    customer: "Alice",
    items: [
      { name: "Phone", price: 500, quantity: 2 },
      { name: "Charger", price: 50, quantity: 3 },
    ],
  },
  {
    orderId: 103,
    customer: "Bob",
    items: [{ name: "Headphones", price: 200, quantity: 2 }],
  },
];
Viết các hàm thực hiện các yêu cầu sau:

- Tính tổng tiền của từng đơn hàng.

- Tìm khách hàng có đơn hàng có tổng tiền cao nhất.

- Gộp danh sách tất cả các sản phẩm từ các đơn hàng, nhóm theo tên sản phẩm và tính tổng số lượng của mỗi sản phẩm.
 */
const orders = [
  {
    orderId: 101,
    customer: "John",
    items: [{ name: "Laptop", price: 1000, quantity: 1 }], // Tổng = 1000*1 = 1000
  },
  {
    orderId: 102,
    customer: "Alice",
    items: [
      { name: "Phone", price: 500, quantity: 2 }, // 500*2 = 1000
      { name: "Charger", price: 50, quantity: 3 }, // 50*3 = 150
    ], // Tổng = 1150
  },
  {
    orderId: 103,
    customer: "Bob",
    items: [{ name: "Headphones", price: 200, quantity: 2 }], // Tổng = 200*2 = 400
  },
];
// - Tính tổng tiền của từng đơn hàng.
const sumPriceOrder = orders.map((orders) => {
  const sum = orders.items.reduce(
    (sum, items) => sum + items.price * items.quantity,
    0
  );
  return {
    ...orders,
    sum,
  };
});

// - Tìm khách hàng có đơn hàng có tổng tiền cao nhất.
const maxPriceOrder = sumPriceOrder.reduce((max, orders) => {
  return orders.sum > max.sum ? orders : max;
});

// - Gộp danh sách tất cả các sản phẩm từ các đơn hàng, nhóm theo tên sản phẩm và tính tổng số lượng của mỗi sản phẩm.
const groupProduct = (orders) => {
  const allItems = orders.flatMap((order) => order.items); // Gộp tất cả items
  return allItems.reduce((obj, item) => {
    const key = item.name; // Key theo name
    if (!obj[key]) {
      obj[key] = 0; // Initial tổng quantity 0
    }
    obj[key] += item.quantity; // + quantity
    return obj;
  }, {}); // Initial object rỗng
};

console.log("Tổng tiền của từng đơn hàng:", sumPriceOrder);
console.log("Khách hàng có đơn hàng có tổng tiền cao nhất:", maxPriceOrder);
const groupByProduct = groupProduct(orders);
console.log(
  "Gộp danh sách tất cả các sản phẩm từ các đơn hàng, nhóm theo tên sản phẩm và tính tổng số lượng của mỗi sản phẩm:",
  groupByProduct
);

showGreeting("bài 4: ");
/**
 * Bài 4

const employees = [
  { id: 1, name: "Mai", department: "IT", salary: 1200 },
  { id: 2, name: "Nam", department: "HR", salary: 800 },
  { id: 3, name: "Hà", department: "IT", salary: 1500 },
  { id: 4, name: "Linh", department: "Marketing", salary: 900 },
  { id: 5, name: "Phúc", department: "IT", salary: 1100 },
];
Viết các hàm thực hiện các yêu cầu sau:

- Tính tổng lương của từng phòng ban.

- Tìm nhân viên có mức lương cao nhất trong mỗi phòng ban.

- Chuyển đổi dữ liệu về dạng object, trong đó key là tên phòng ban, value là mảng nhân viên trong phòng ban đó.
 */

const employees = [
  { id: 1, name: "Mai", department: "IT", salary: 1200 },
  { id: 2, name: "Nam", department: "HR", salary: 800 },
  { id: 3, name: "Hà", department: "IT", salary: 1500 },
  { id: 4, name: "Linh", department: "Marketing", salary: 900 },
  { id: 5, name: "Phúc", department: "IT", salary: 1100 },
];
// - Tính tổng lương của từng phòng ban.
const sumSalary = employees.reduce((sum, employees) => {
  const key = employees.department; // Key theo department
  if (!sum[key]) {
    sum[key] = 0; // Initial tổng lương 0
  }
  sum[key] += employees.salary; // + salary
  return sum;
}, {});

// - Tìm nhân viên có mức lương cao nhất trong mỗi phòng ban.
const maxSalary = employees.reduce((max, employees) => {
  const key = employees.department;
  if (!max[key]) {
    max[key] = employees;
  }
  max[key] = employees.salary > max[key].salary ? employees : max[key];
  return max;
}, {});

// - Chuyển đổi dữ liệu về dạng object, trong đó key là tên phòng ban, value là mảng nhân viên trong phòng ban đó.
const groupByDepartment = (employees) => {
  return employees.reduce((obj, employees) => {
    const key = employees.department;
    if (!obj[key]) {
      obj[key] = [];
    }
    obj[key].push(employees);
    return obj;
  }, {});
};

console.log("Tổng lương của từng phòng ban:", sumSalary);
console.log("Nhân viên có mức lương cao nhất trong mỗi phòng ban:", maxSalary);
console.log(
  "Chuyển đổi dữ liệu về dạng object, trong đó key là tên phòng ban, value là mảng nhân viên trong phòng ban đó:",
  groupByDepartment(employees)
);

showGreeting("bài 5: ");
/**
 * Bài 5

const watchHistory = [
  { userId: 1, videoId: "A1", duration: 10 },
  { userId: 2, videoId: "B1", duration: 15 },
  { userId: 1, videoId: "A1", duration: 20 },
  { userId: 3, videoId: "C1", duration: 30 },
  { userId: 2, videoId: "B1", duration: 5 },
  { userId: 1, videoId: "A2", duration: 25 },
  { userId: 3, videoId: "C1", duration: 15 },
];
Viết các hàm thực hiện các yêu cầu sau:

- Tính tổng thời gian xem của từng video.

- Tìm video được xem nhiều nhất (dựa trên tổng thời gian).

- Nhóm lịch sử xem theo userId, trong đó mỗi userId sẽ chứa danh sách các video mà họ đã xem và tổng thời gian xem mỗi video.
 */
const watchHistory = [
  { userId: 1, videoId: "A1", duration: 10 },
  { userId: 2, videoId: "B1", duration: 15 },
  { userId: 1, videoId: "A1", duration: 20 },
  { userId: 3, videoId: "C1", duration: 30 },
  { userId: 2, videoId: "B1", duration: 5 },
  { userId: 1, videoId: "A2", duration: 25 },
  { userId: 3, videoId: "C1", duration: 15 },
];

showGreeting("bài 5: ");

// - Tính tổng thời gian xem của từng video.
const sumWatchVideo = watchHistory.reduce((sum, cur) => {
  const videoId = cur.videoId;
  const duration = cur.duration;
  if (sum[videoId]) {
    sum[videoId] += duration;
  } else {
    sum[videoId] = duration;
  }
  return sum;
}, {});
console.log(sumWatchVideo);

// - Tìm video được xem nhiều nhất (dựa trên tổng thời gian).
const videoWatch = Object.entries(sumWatchVideo).reduce(
  (max, [videoId, duration]) => {
    if (duration > max.duration) {
      return { videoId, duration };
    }
    return max;
  },
  { videoId: "", duration: 0 }
);
console.log("Video được xem nhiều nhất:", videoWatch);

// - Nhóm lịch sử xem theo userId, trong đó mỗi userId sẽ chứa danh sách các video mà họ đã xem và tổng thời gian xem mỗi video.
const groupByUserId = watchHistory.reduce((acc, cur) => {
  const userId = cur.userId;
  const videoId = cur.videoId;
  const duration = cur.duration;

  if (!acc[userId]) {
    acc[userId] = {};
  }

  if (!acc[userId][videoId]) {
    acc[userId][videoId] = 0;
  }

  acc[userId][videoId] += duration;
  return acc;
}, {});

console.log("Lịch sử xem theo userId:", groupByUserId);

showGreeting("bài 6: ");
/**
 * Bài 6

const matches = [
  { teamA: "A", teamB: "B", scoreA: 2, scoreB: 1 },
  { teamA: "C", teamB: "D", scoreA: 1, scoreB: 3 },
  { teamA: "A", teamB: "C", scoreA: 2, scoreB: 2 },
  { teamA: "B", teamB: "D", scoreA: 0, scoreB: 1 },
  { teamA: "A", teamB: "D", scoreA: 3, scoreB: 1 },
];
Viết các hàm thực hiện các yêu cầu sau:

- Tính số trận thắng, hòa, thua của mỗi đội.

- Xếp hạng các đội bóng theo số điểm, với quy tắc:

* Thắng: +3 điểm

* Hòa: +1 điểm

* Thua: +0 điểm

- Tìm đội có số bàn thắng nhiều nhất.
 */
const matches = [
  { teamA: "A", teamB: "B", scoreA: 2, scoreB: 1 },
  { teamA: "C", teamB: "D", scoreA: 1, scoreB: 3 },
  { teamA: "A", teamB: "C", scoreA: 2, scoreB: 2 },
  { teamA: "B", teamB: "D", scoreA: 0, scoreB: 1 },
  { teamA: "A", teamB: "D", scoreA: 3, scoreB: 1 },
];

// - Tính số trận thắng, hòa, thua của mỗi đội.
const teamWin = matches.reduce((teamWin, match) => {
  const { teamA, teamB, scoreA, scoreB } = match;

  if (!teamWin[teamA])
    teamWin[teamA] = {
      win: 0,
      draw: 0,
      loss: 0,
      goalScored: 0,
    };
  if (!teamWin[teamB])
    teamWin[teamB] = {
      win: 0,
      draw: 0,
      loss: 0,
      goalScored: 0,
    };

  teamWin[teamA].goalScored += scoreA;
  teamWin[teamB].goalScored += scoreB;

  // Xác định trận thắng, hòa, thua
  if (scoreA > scoreB) {
    teamWin[teamA].win += 1;
    teamWin[teamB].loss += 1;
  } else if (scoreA < scoreB) {
    teamWin[teamB].win += 1;
    teamWin[teamA].loss += 1;
  } else {
    teamWin[teamA].draw += 1;
    teamWin[teamB].draw += 1;
  }
  return teamWin;
});
console.log("Số trận thắng, hòa, thua của mỗi đội:", teamWin);

showGreeting("bài 7: ");
/**
 * Bài 7

const employees = [
  { id: 1, name: "An", projects: ["P1", "P2"] },
  { id: 2, name: "Bình", projects: ["P2", "P3"] },
  { id: 3, name: "Châu", projects: ["P1", "P3", "P4"] },
  { id: 4, name: "Dũng", projects: ["P4"] },
];
Viết các hàm thực hiện các yêu cầu sau:

- Nhóm nhân viên theo dự án, sao cho mỗi dự án có danh sách nhân viên tham gia.

- Tìm dự án có nhiều nhân viên tham gia nhất.

- Chuyển đổi dữ liệu về dạng object, trong đó key là projectId, value là danh sách nhân viên thuộc dự án đó.
 */

const employeesProjects = [
  { id: 1, name: "An", projects: ["P1", "P2"] },
  { id: 2, name: "Bình", projects: ["P2", "P3"] },
  { id: 3, name: "Châu", projects: ["P1", "P3", "P4"] },
  { id: 4, name: "Dũng", projects: ["P4"] },
];

// - Nhóm nhân viên theo dự án, sao cho mỗi dự án có danh sách nhân viên tham gia.

showGreeting("bài 8: ");
/**
 * Bài 8

const reviews = [
  { productId: "P1", userId: "U1", rating: 5 },
  { productId: "P2", userId: "U2", rating: 4 },
  { productId: "P1", userId: "U3", rating: 3 },
  { productId: "P3", userId: "U1", rating: 4 },
  { productId: "P2", userId: "U3", rating: 2 },
  { productId: "P1", userId: "U2", rating: 4 },
];
Viết các hàm thực hiện các yêu cầu sau:

- Tính điểm trung bình đánh giá của mỗi sản phẩm.

- Tìm sản phẩm có điểm trung bình cao nhất.

- Nhóm danh sách đánh giá theo productId, trong đó mỗi sản phẩm có danh sách đánh giá của từng người dùng.
 */

const reviews = [
  { productId: "P1", userId: "U1", rating: 5 },
  { productId: "P2", userId: "U2", rating: 4 },
  { productId: "P1", userId: "U3", rating: 3 },
  { productId: "P3", userId: "U1", rating: 4 },
  { productId: "P2", userId: "U3", rating: 2 },
  { productId: "P1", userId: "U2", rating: 4 },
];
// - Tính điểm trung bình đánh giá của mỗi sản phẩm.

showGreeting("bài 9: ");
/**
 * Bài 9

const transactions = [
  { id: 1, account: "A", type: "deposit", amount: 1000 },
  { id: 2, account: "B", type: "withdraw", amount: 200 },
  { id: 3, account: "A", type: "withdraw", amount: 500 },
  { id: 4, account: "C", type: "deposit", amount: 700 },
  { id: 5, account: "B", type: "deposit", amount: 300 },
];
Viết các hàm thực hiện các yêu cầu sau:

- Tính số dư cuối cùng của từng tài khoản.

- Tìm tài khoản có số dư cao nhất.
 */

const transactions = [
  { id: 1, account: "A", type: "deposit", amount: 1000 },
  { id: 2, account: "B", type: "withdraw", amount: 200 },
  { id: 3, account: "A", type: "withdraw", amount: 500 },
  { id: 4, account: "C", type: "deposit", amount: 700 },
  { id: 5, account: "B", type: "deposit", amount: 300 },
];
// - Tính số dư cuối cùng của từng tài khoản.
const balance = transactions.reduce((obj, trans) => {
  const { account, type, amount } = trans;
  // Xác định giá trị của giao dịch
  const value = type === "deposit" ? amount : -amount; // cộng hoặc trừ số dư
  if (!obj[account]) obj[account] = 0;
  obj[account] += value;
  return obj;
}, {});
console.log("Số dư cuối cùng của từng tài khoản:", balance);

// - Tìm tài khoản có số dư cao nhất.
const maxBalance = Object.entries(balance).reduce(
  (max, [account, balance]) => {
    return balance > max.balance
      ? { account: account, balance: balance }
      : { account: max.account, balance: max.balance };
  },
  { account: "", balance: 0 }
);
console.log("Tài khoản có số dư cao nhất:", maxBalance);
