/**
 * Bài 1
 * Viết hàm hasNegative(numbers) trả về true nếu trong mảng có ít nhất một số âm.
 */

function showGreeting(title) {
  console.log(title);
}
showGreeting(
  "bài 1: Viết hàm hasNegative(numbers) trả về true nếu trong mảng có ít nhất một số âm."
);
function hasNegative(numbers) {
  return numbers.some((num) => num < 0);
}
console.log(hasNegative([1, 2, -3, 4, 5, 6]));

/**
 * Bài 2
 * 
Viết hàm isAllEven(numbers) để kiểm tra tất cả các phần tử có phải là số chẵn.
 */
showGreeting(
  "bài 2: Viết hàm isAllEven(numbers) để kiểm tra tất cả các phần tử có phải là số chẵn."
);
function isAllEven(numbers) {
  return numbers.every((num) => num % 2 === 0);
}
console.log(isAllEven([2, 4, 6, 8, 10]));

/**
 * Bài 3

Viết hàm findDivisibleBy5(numbers) trả về phần tử đầu tiên chia hết cho 5.
 */
showGreeting(
  "bài 3: Viết hàm findDivisibleBy5(numbers) trả về phần tử đầu tiên chia hết cho 5."
);
function findDivisibleBy5(numbers) {
  return numbers.find((num) => num % 5 === 0);
}
console.log(findDivisibleBy5([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/**
 * Bài 4

Viết hàm findLastNegative(numbers) trả về phần tử âm cuối cùng trong mảng.
 */

showGreeting(
  "bài 4: Viết hàm findLastNegative(numbers) trả về phần tử âm cuối cùng trong mảng."
);
function findLastNegative(numbers) {
  return numbers.findLast((num) => num < 0);
}
console.log(findLastNegative([1, 2, 3, 4, 5, 6, -7, -8, 9, 10]));

/**
 * Bài 5

Viết hàm findFirstOddIndex(numbers) trả về index của phần tử lẻ đầu tiên.
 */
showGreeting(
  "bài 5: Viết hàm findFirstOddIndex(numbers) trả về index của phần tử lẻ đầu tiên."
);
function findFirstOddIndex(numbers) {
  return numbers.findIndex((num) => num % 2 !== 0);
}
console.log(findFirstOddIndex([12, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/**
 * Bài 6

Viết hàm findLastGreaterThan50(numbers) trả về index của phần tử cuối cùng > 50.
 */
showGreeting(
  "bài 6: Viết hàm findLastGreaterThan50(numbers) trả về index của phần tử cuối cùng > 50."
);
function findLastGreaterThan50(numbers) {
  return numbers.findLastIndex((num) => num > 50);
}
console.log(findLastGreaterThan50([12, 2, 3, 4, 5, 6, 7, 80, 90, 10]));

/**
 * Bài 7

Viết hàm sum(numbers) để tính tổng tất cả các phần tử trong mảng.

 */

showGreeting(
  "bài 7: Viết hàm sum(numbers) để tính tổng tất cả các phần tử trong mảng."
);
function sum(numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 99, 10]));

/**
 * Bài 8

Viết hàm multiplyAll(numbers) để tính tích của các phần tử trong mảng.
 */
showGreeting(
  "bài 8: Viết hàm multiplyAll(numbers) để tính tích của các phần tử trong mảng."
);
function multiplyAll(numbers) {
  return numbers.reduce((acc, num) => acc * num, 1);
}
console.log(multiplyAll([1, 2, 3, 4, 5]));

/**
 * Bài 9

Viết hàm longestStringLength(strings) để trả về độ dài của chuỗi dài nhất trong mảng.
 */
showGreeting(
  "bài 9: Viết hàm longestStringLength(strings) để trả về độ dài của chuỗi dài nhất trong mảng."
);
function longestStringLength(strings) {
  return strings.reduce((max, str) => Math.max(max, str.length), 0);
}
console.log(
  longestStringLength(["javascript", "php", "css", "html", "python", "java"])
);

/**
 * Bài 10

Viết hàm hasPrime(numbers) để kiểm tra xem trong mảng có số nguyên tố hay không
 */
showGreeting(
  "bài 10: Viết hàm hasPrime(numbers) để kiểm tra xem trong mảng có số nguyên tố hay không"
);
function hasPrime(numbers) {
  return numbers.some(function (value) {
    if (value < 2) return false;
    if (value === 2 || value === 3) return true;
    if (value % 2 === 0 || value % 3 === 0) return false;
    for (let i = 5; i * i <= value; i += 6) {
      if (value % i === 0 || value % (i + 2) === 0) return false;
    }
    return true;
  });
}

console.log(hasPrime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // true
console.log(hasPrime([1, 4, 6, 8, 9, 10, 12, 14, 15, 16])); // false
