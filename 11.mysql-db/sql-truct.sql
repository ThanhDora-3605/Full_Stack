-- Comment trong sql
-- Comment

-- Tạo Database
# CREATE DATABASE dora_db;

-- xem danh sách Database
# SHOW DATABASES;

-- Xoá Database
# DROP DATABASE dora_db;

-- Chọn Database để làm việc
-- use dora_db;

-- Thêm dữ liệu vào bảng
# INSERT INTO users(name, email, status, created_at, update_at)
# VALUES(
#        'user 3',
#        'user3@gmail.com',
#        true,
#        NOW(),
#        NOW()
# );


-- Hiển thị dữ liệu của bảng
# SELECT * FROM users;
#
# -- Cập nhật dữ liệu
# UPDATE users
# SET name = 'ThanhDora',
#     status = false,
#     update_at = NOW()
# WHERE id = 1
#
# -- Xoá dữ liệu
# DELETE FROM  users WHERE id = 2;

-- Lọc dữ liệu
# SELECT * FROM users WHERE id != 3
# SELECT * FROM  users WHERE  id BETWEEN 3 AND 5
# SELECT * FROM  users WHERE  id >= 3 AND id <= 5
# SELECT  * FROM  users WHERE id IN (3,5)
# SELECT * FROM  users WHERE  created_at IS NULL
# SELECT * FROM  users WHERE  created_at IS NOT NULL
# SELECT  * FROM  users WHERE  id NOT BETWEEN  3 AND  5
# SELECT  * FROM  users WHERE id NOT IN (3,5)
# SELECT * FROM users WHERE (name LIKE '%Kem%' OR email LIKE '%kem%') AND status=0

-- Sắp xếp dữ liệu
# SELECT * FROM users WHERE id > 1 ORDER BY id DESC
# SELECT * FROM users WHERE id > 1 ORDER BY id
# SELECT * FROM users ORDER BY id
# SELECT * FROM users ORDER BY name, id DESC

-- Giới hạn, bỏ qua
# SELECT * FROM users ORDER BY id DESC LIMIT 3 OFFSET 1


-- join
# SELECT users.*, phones.phone as phoneNumber
# FROM dora_db.users users
# INNER JOIN dora_db.phones phones
# ON users.id = phones.user_id

-- left join
# SELECT users.*, phones.phone as phoneNumber
# FROM dora_db.users users
# INNER JOIN dora_db.phones phones
# ON users.id = phones.user_id

# CREATE TABLE IF NOT EXISTS dora_db.courses (id INT PRIMARY KEY AUTO_INCREMENT, title VARCHAR(255));
# CREATE TABLE IF NOT EXISTS dora_db.users_courses (user_id INT, course_id INT, PRIMARY KEY (user_id, course_id), FOREIGN KEY (user_id) REFERENCES dora_db.users(id), FOREIGN KEY (course_id) REFERENCES dora_db.courses(id));
#
# SELECT DISTINCT users.*
# FROM dora_db.users users
# INNER JOIN dora_db.users_courses users_courses ON users.id = users_courses.user_id
# INNER JOIN dora_db.courses courses ON courses.id = users_courses.course_id
# WHERE courses.title LIKE '%fullstack%';




-- Ví dụ lấy danh  sách các post...
USE dora_db;

# SELECT post.*, users.name AS username, users.email AS userEmail, phones.phone
# FROM post
# INNER JOIN users ON users.id = post.user_id
# LEFT JOIN phones ON users.id = phones.user_id
# ORDER BY post.created_at DESC;




-- Bài tập: lấy danh sách users của khoá học có tên chứa từ khoá "fullstack"
SELECT DISTINCT users.*, phones.phone
FROM users
INNER JOIN users_coures ON users.id = users_coures.user_id
INNER JOIN courses ON courses.id = users_coures.coures_id
LEFT JOIN phones ON users.id = phones.user_id
WHERE courses.name LIKE '%back-end%';