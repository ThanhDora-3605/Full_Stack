# Setup Express TypeScript

- express --> simple dependency
- typescript --> dev dependency
- ts-node --> dev dependency
- nodemon --> dev dependency
- @types/express --> dev dependency
- @types/node --> dev dependency

# MVCS

1. Route: Định nghĩa đường dẫn, phương thức tới controller nào?

GET / --> homeController.index
POST /users --> userController.create
GET /users --> userController.index

2. Controller: Bộ điều khiển trung tâm

- Các chức năng cùng 1 nhóm
- Ví dụ: Thêm người dùng, sửa người dùng, xóa người dùng --> userController

Ví dụ: Cần xây dựng chức năng Block User
Tạo controller: blockUserController

3. Middleware: Bộ lọc trung gian

- Xử lý request, response trước khi tới controller
- 2 loại chính:

* Global Middleware: Nằm trước route
* Route Middleware: Nằm sau route

4. Service: Xử lý logic nghiệp vụ

- Nhận request từ controller
- Làm việc với Database thông qua Repository hoặc Model
- Trả dữ liệu về controller

Lưu ý: Không được trả về response trong service

5. Model: Làm việc trực tiếp với database (CRUD)

- Quy định về cấu trúc, kiểu dữ liệu của các trường database
- Ví dụ: users

* id -> number
* name -> string
* email -> string

- Thực hiện các truy vấn đơn giản (Thông qua thư viện ORM)

6. Repository

- Đứng giữa service và model
- Xử lý các logic phức tạp, có sự kết hợp nhiều bảng trong database
- Thường 1 Repository sẽ liên kết tới 1 model

Ví dụ: Lấy danh sách 10 users mua nhiều hàng nhất

7. View / Transformer

- Chịu trách nhiệm hiển thị dữ liệu cho client
