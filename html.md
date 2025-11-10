# Các thẻ phổ biến trong HTML

## Thẻ block và thẻ inline

1. Thẻ block

- Chiều rộng mặc định tỷ lệ 100% so với chiều rộng của thẻ cha (Thẻ chứa nó)
- Luôn ở 1 hàng mới
- Chứa được các thẻ block và inline khác

2. Thẻ inline

- Chiều rộng mặc định theo nội dung
- Các thẻ inline đứng cạnh nhau nằm trên 1 hàng
- Không bọc được thẻ block

## Các thẻ html trong nhóm block

1. Thẻ heading (Thẻ tiêu đề)

```html
<h1>Tiêu đề trang web</h1>
<h2>Tiêu đề trang web</h2>
<h3>Tiêu đề trang web</h3>
<h4>Tiêu đề trang web</h4>
<h5>Tiêu đề trang web</h5>
<h6>Tiêu đề trang web</h6>
```

- Các thẻ heading phải nối tiếp nhau

2. Thẻ Văn bản (P)

```html
<p>Văn Bản</p>
<p>Văn Bản</p>
<p>Văn Bản</p>
<p>Văn Bản</p>
```

3. Thẻ định dạng danh sách
   3.1. Định danh danh sách

```html
<ul>
  <li>Danh sách 1</li>
  <li>Danh sách 2</li>
  <li>Danh sách 3</li>
  <li>Danh sách 4</li>
  <li>Danh sách 5</li>
</ul>
```

3.2.Định dạng danh sách theo thứ tự

```html
<ol>
  <li>Danh sách 1</li>
  <li>Danh sách 2</li>
  <li>Danh sách 3</li>
  <li>Danh sách 4</li>
  <li>Danh sách 5</li>
</ol>
```

4. Thẻ phân chia nội dung (div)

- nhóm các thẻ html khác thành 1 khu vực
- Phân chia bố cục trang web

**Lưu ý**

- không thay đổi định dạng ban đầu của các văn bản, các thẻ html khác
- Dùng nhiều trong bố cục trang (Layout)

5. Thẻ trích dẫn (blockquote)

```html
<blockquote>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
  </p>
</blockquote>
```

6. Thẻ hr

```html
<hr />
```

- Tạo đường kẻ ngang

7. Các thẻ thay thế thẻ div

- header: Thẻ hiện phần đầu trang web hoặc phần đầu card
- footer: Thể hiện cuối của trang web hoặc chân của 1 card item
- nav: Thể hiện thanh điều hướng (menu)
- main: Phần thân của trang web (Sau header và trước footer)
- section: Thể hiện 1 phần trên 1 trang web
- article: Thể hiện 1 nội dung độc lập với các phần còn lại (Vd: sản phẩm, bài viết, bình luận,..)
- aside: Thể hiện cột bên của trang web

<!-- ===========================END=========================== -->

## Các thẻ trong nhóm inline

1. Thẻ chèn liên kết

```
<a href="dia-chi-trang-web">văn bản hiển thị</a>
```

Các thuộc tính khác:

- target: Mục tiêu khi mở trang web

* `_self`: Ở trang web hiện tại
* `_blank`: Mở trang web mới

- title: Hiển thi nội dung khi trỏ chuột

../ --> lùi về 1 cấp
../../ --> lùi về 2 cấp

2. Thẻ chèn hình ảnh (img)

```html
<img src="duong-dan-anh> width="chieu-rong" height="chieu-cao" alt="Tiêu đề khi
trỏ chuột"
```

3. Thẻ span (thẻ định dạng kiểu)

- không có ý nghĩa (non-semantic)
- nó dùng để định dạng 1 kiểu khác mà giữ yếu tố inline (trên dòng)

4. thẻ in đệm,vv

- In đậm: b
- nghiêng: i
- Ngạch chân: u
- Gạch ngang: s

- strong: Nhấn mạnh tầm quan trọng
- em: nhấn mạnh cảm xúc, ngữ điệu

5. Thẻ công thức toán học, hoá học

```
<p>C0<sub>2</sub></p>
```

```
 <p>100m<sup>2</sup></p>
```

6. Table

- Table --> Quy định bảng
- tr --> Quy định hàng
- td --> Quy định cột
- th --> Quy định cột (với nội dung là tiêu đề)

**Semantic**

- thead --> phần đầu
- tbody --> Phần thân
- tfoot --> phần cuối

table -> tr -> td

cellspacing: Khoảng cách giữa các ô trong bảng
cellpadding: khoảng cách giữa các ô với nội dung
colspan: gộp các cột
rowspan: gộp các hàng

7. Thẻ br

- Thẻ ngắt dòng

8. Biểu mẫu (form)

- Thẻ form

* action: URL mà trình duyệt sẽ gửi request tới
* method: Phương thức gửi ( Theo quy ước của http)
  ** get: dữ liệu của form sẽ đẩy lên URL của action (Theo dạng query string)
  ** post: Không gửi dữ liệu lên URL mà sẽ gửi ở dạng form data

Lưu ý: Trường phải có name để sever nhận được dữ liệu

## Các trường trong form

8.1. Thẻ input --> Rất nhiều trường hợp, thay đổi bằng thuộc tính tyte

- text: Mặc định, nhập cái gì cũng được
- email: Định dạng email
- number: Định dạng số
- date: ngày tháng năm
- file: Chọn file
- radio: Lựa chọn (Chỉ chọn 1 trong 1 nhóm, Dựa vào name)
- Checkbox: Chọn nhiều

  8.2. Thẻ select
  8.3. Thẻ textarea

Giá trị mặc định

- input nhập liệu: dùng value
- Radio, Checkbox: Dùng selected ở option
- Textarea: Thên và phần nội dung của thẻ (Giữ mở và đóng thẻ)

  8.4. Thẻ button

- tyte: submit --> gửi form (mặc định)
- tyte: button --> tạo hình button
- tyte: reset --> xoá dữ liệu của form

**Tổng Kết**

1. Nhập liệu 1 dòng

2. Nhập liệu nhiều dòng

- textarea

3. Lựa chọn

- file
- date
- radio
- checkbox
- select option

4. Nút

- Button

Quy ước đặt id, class

- Chữ hoa, chữ thường, số, gạch ngang, gạch dưới, dấu :
- Không được bắt đầu bằng số
- Dùng danh từ
- Đặt tên bằn tiếng anh (có ý nghĩa)

Với class:

- Đặt được nhiều class giống nhau trên 1 trang web (Mang tính kế thừa)
- Trong 1 thẻ html (Phần tử, element) có thể đặt nhiều class (Mỗi class cách nhau bởi khoảng trắng)

  <!-- ===========================END=========================== -->
