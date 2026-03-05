CREATE DATABASE IF NOT EXISTS dora1_db;
USE dora1_db;

CREATE TABLE customers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(100),
    email VARCHAR(100),
    city VARCHAR(50)
);

CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_amount DECIMAL(12,2),
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);

CREATE TABLE order_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT,
    product_name VARCHAR(100),
    quantity INT,
    price DECIMAL(10,2),
    FOREIGN KEY (order_id) REFERENCES orders(id)
);

INSERT INTO customers (full_name, email, city) VALUES
('Dang Minh Khoa', 'khoa.dang@gmail.com', 'Ha Noi'),
('Vo Thanh Thao', 'thao.vo@gmail.com', 'Ho Chi Minh'),
('Bui Duc Huy', 'huy.bui@gmail.com', 'Da Nang'),
('Truong Quynh Anh', 'quynhanh@gmail.com', 'Ha Noi'),
('Do Tuan Nam', 'nam.do@gmail.com', 'Can Tho'),
('Le Thanh Dat', 'thanhdat@gmail.com', 'Bac Ninh');

INSERT INTO orders (customer_id, order_date, total_amount) VALUES
(1, '2026-01-10 10:00:00', 1500000),
(1, '2026-01-15 14:30:00', 800000),
(2, '2026-01-12 09:20:00', 2200000),
(3, '2026-01-18 16:45:00', 500000),
(4, '2026-01-20 11:10:00', 1250000),
(5, '2026-01-22 08:00:00', 3000000),
(6, '2026-01-25 10:00:00', 8750000);

INSERT INTO order_items (order_id, product_name, quantity, price) VALUES
(1, 'Laptop Asus', 1, 1500000),
(2, 'Ban phim Keychron', 2, 400000),
(3, 'Samsung Galaxy S24', 1, 2000000),
(3, 'Sac du phong', 2, 100000),
(4, 'Loa JBL', 1, 500000),
(5, 'Monitor BenQ', 1, 1250000),
(6, 'iPad Pro', 1, 3000000),
(7, 'Laptop Asus', 1, 1500000),
(7, 'Ban phim Keychron', 1, 400000),
(7, 'Samsung Galaxy S24', 1, 2000000),
(7, 'Sac du phong', 1, 100000),
(7, 'Loa JBL', 1, 500000),
(7, 'Monitor BenQ', 1, 1250000),
(7, 'iPad Pro', 1, 3000000);

-- Danh sách khách hàng và tổng đơn hàng của mỗi người
SELECT c.full_name, COUNT(o.id) AS total_orders
FROM customers c
INNER JOIN orders o ON c.id = o.customer_id
GROUP BY c.id, c.full_name;

-- Danh sách khách hàng và tổng tiền chi tiêu
SELECT c.full_name, SUM(o.total_amount) AS total_spent
FROM customers c
INNER JOIN orders o ON c.id = o.customer_id
GROUP BY c.id, c.full_name
ORDER BY total_spent DESC;

-- Danh sách sản phẩm và tổng số lượng đã bán
SELECT oi.product_name, SUM(oi.quantity) AS total_quantity
FROM order_items oi
GROUP BY oi.product_name
ORDER BY total_quantity DESC;

-- Danh sách khách hàng có ít nhất 2 đơn hàng
SELECT c.id, c.full_name, c.email, c.city, COUNT(o.id) AS total_orders
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
GROUP BY c.id, c.full_name, c.email, c.city
HAVING total_orders >= 2;

-- Danh sách khách hàng có tổng chi tiêu > 10,000,000
SELECT c.full_name, SUM(o.total_amount) AS total_spent
FROM customers c
INNER JOIN orders o ON c.id = o.customer_id
GROUP BY c.id, c.full_name
HAVING total_spent > 1000000;

