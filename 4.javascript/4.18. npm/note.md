# Câu chuyện ngày xưa

Down load thư viện →> Copy vào folder project -> Gọi file tương ứng

## Vấn đề

- Cài đặt: Phức tạp
- Cập nhật: Lên trang chủ →> download → ghi đè
- Xóa: Xóa code, xóa file thư viện
- Di chuyển: Source nặng
- Không tự động hóa được

## Giải pháp

- Công cụ quản lý gói (package manager)
- Mỗi ngôn ngữ lập trình sẽ có các công cụ khác nhau

* js: npm, yarn, ...
* php: composer
* python: pip

Thực thi bằng lệnh

Khi khởi tạo: Có file cấu hình (lưu trữ các package)

## Khởi tạo dự án với npm

```bash
npm init -y
```

## Cài đặt thu viện

1. Cài bản mới nhất

```bash
npm install <Tên Thư Viện>
```

2. Cài đặt theo phiên bản chỉ định
   npm i tenthuvien@phienban

3. Cài đặt ở chế độ toàn cục

```bash
 npm i tenthuvien -g
 npm i tenthuvien@phienban -g
```

4. Cài đặt ở chế độ phát triển (dev)
   ```bash
   npm i tenthuvien --save-dev
   npm i tenthuvien@phienban --save-dev
   ```
5. Cài đặt tất cả thư viện (dependencies)

```bash
npm i
```

## Gỡ thư viện

```bash
npm uninstall <Tên Thư Viện>
```

## Cập nhật thư viện

```bash
npm update <Tên Thư Viện>
npm update <Tên Thư Viện>@<Phiên Bản>
npm update --> Cập nhật tất cả thư viện
```

Khi chạy lệnh update xong --> Update package-lock.json
