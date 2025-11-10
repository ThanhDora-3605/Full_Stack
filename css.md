# CSS

## Khái niệm

- CSS là ngôn ngữ để định dạng cho trang html
- Tạo bố cục, màu sắc, kiểu chữ,...

## Cách thêm CSS vào HTML

Cách 1: Thêm trực tiếp thông qua thẻ style (Internal CSS)

```html
<style>
  Code CSS
</style>
```

Cách 2: Thêm thông qua file riêng (.CSS) (External CSS)

Liên kết vào HTML

```html
<link href="đường dẫn" rel="stylesheet" />
```

Cách 3: Thêm trực tiếp CSS và thẻ HTML thông qua thuộc tính style (Inline CSS)

```html
<h1 style="Code CSS"></h1>
```

## Selector

- Các cách chọn đúng phần tử HTML mà chúng ta mong muốn

```
seletor {
  thuoctinh: giatri;
}
```

1. id,class, tagname

- id --> #id
  -class --> .class
  -tagname --> tagname

2. Chọn tất cả các phần tử HTML

`*`

3. Selector kết hợp

3.1. Nằm trong

```css
selector1 selector2 selector3 {
  thuoctinh: giatri;
}
```

3.2. Cha con

```css
selector1 selector2 selector3 {
  thuoctinh: giatri;
}
```

Chọn cấp con gần nhất

3.3. Cùng cấp

```css
selector1 selector2 selector3 {
  thuoctinh: giatri;
}
```

Chọn phần tử HTML thoả mãn các selector

3.4. Kế thừa

```css
selector1,
selector2,
selector3 {
  thuoctinh: giatri;
}
```

```
.box h2,
.content {
  color: violet;
}
```

Các selector sẽ được áp dụng cùng các thuộc tính trong 1 khối

3.5. Ngang hàng (không liền kề)

```css
selector1 ~ selector2 ~ selector3 {
  thuoctinh: giatri;
}
```

```
p ~ h2 {
  color: red;
}
```

3.6.Ngang hàng (Liền kề)

```css
selector1 + selector2 + selector3 {
  thuoctinh: giatri;
}
```

4. Attribute (Thuộc tính)

- tagname[attribute] --> Chọn thẻ HTML có thuộc tính

- tagname[attribute=value] --> Chọn thẻ HTML có thuộc tính khớp mới giá trị

- tagname[attribute^="value"] --> Chọn thẻ HTML có thuộc tính bắt đầu bằng giá trị

- tagname[attribute$="value"] --> Chọn thẻ HTML có thuộc tính kết thúc bằng giá trị

- tagname[attribute*="value"] --> Chọn thẻ HTML có thuộc tính chứa giá trị

## psedo

### Pseudo Element

Cú pháp:

```css
selector::ten-phantu {
  thuoctinh: giatri;
}
```

- before
- after
- first-line
- first-letter
- selection
- placeholder

Lưu ý: before, after muốn hoạt động phải có thuộc tính content

### Pseudo Class

Cú pháp:

```css
selector:ten-phantu {
  thuoctinh: giatri;
}
```

- hover
- active
- focus
- not
- checked (tác dụng với radio và checkbox)
- disabled (Vô hiệu hoá)
- first-child
- last-child
- first-of-type
- last-of-type
- nth-child
- nth-of-type

## Các thuộc tính định dạng text

1.Color

- Thay đổi màu văn bản

2. font-size

- Thay đổi cỡ chữ của văn bản

Đơn vị:

- Tuyệt đối: px
- Tương đối:

* em --> Tỷ lệ với font-size của phần tử cha
* rem --> Tỷ lệ với font-size của thẻ HTML (lên dùng)
* vw (viewport width)
* vh (viewport height)
* %

3. line-height

- Thay đổi chiều cao của dòng văn bản
- Tỷ lệ với cỡ chữ cả phần tử đó

4. font family

- Thay đổi font chữ văn bản
- Cú pháp: font-family: font1, font2,...

serif: có chân
sans-serif: Không chân

5. Font-weight

- Thiết lập độ dày của văn bản
- Giá trị: Bội số của 100 (Từ 100 đến 900), normal, bold

6. Font-style

- normal
- italic
- text-decoration (gạch chân, ngang, trên)
- text-transform (Viết hoa, viết thường)
- letter-spacing (khoảng cách giữa các chữ)
- word-spacing (Khoảng cách giữa các từ)
- text-align (Căn giữ, trái, phải)

## Thuộc tính background

- Thay đổi nền của các phần tử HTML

1. background-color

Thay đổi màu nền của phần tử

2. background-image

cú pháp: backgrou-inage
url: đường dẫn ảnh

3.background-repeat

Thay đổi cách lặp của background image

- repeat -> Lặp 2 trục
- repeat-x -> Lặp trục x
- repeat-y -> Lặp trục y
- no-repeat -→> Không lặp

4. background-position

Thay đổi vị trí của hình nền

cú pháp: background-position: x y

Mặc định: x = y = 0
x sẽ nhận các giá trị sau:

- left
- center
- right
- Giá trị phần trăm (Tỷ lệ theo chiều rộng của phần tử)

y sẽ nhận các giá trị sau:

- top
- center
- bottom
- Giá trị phần trăm (Tỷ lệ theo chiều cao của phần tử)

5. background-size

tuỳ chỉnh kích thước background

Cú pháp: background-size: x y
X: Kích thước chiều rộng
y: Kích thước chiều cao
2 giá trị đặc biệt:

- cover: lấp kín kích thước của phần tử
- contain: lấp kín tuy nhiên đảm bảo tỷ lệ gốc của ảnh

6. background-attackment

cố định hình nền khi kéo thanh cuộn

Cú pháp: background-attachment: scroll|fixed

- scroll: cuộn theo thanh cuộn
- fixed: cố định

7. background

Gộp các thuộc tính trên

background: color image repeat position / size attachment

## Box model

- Mô hình hộp cầu tạo css của 1 phần tử
- Trong box model sẽ có các thuộc tính

* padding
* border
* margin

Kích thước của box mặc định = content + padding + border|

muốn tuỳ chỉnh lại kích thước, dùng box-sixing

### Thuộc tính border

border = width + style + color

- border-width
- border-style: none | solid | dotted | dashed | double
- border-color

Thuộc tính mở rộng

- border-{side}-width
- border-{side}-style
- border-{side}-color

side sẽ nhận giá trị: top, left, right, bottom

- border-top-width
- border-left-width
- border-right-width
- border-bottom-width

- border-top-style
- border-left-style
- border-right-style
- border-bottom-style

- border-top-color
- border-left-color
- border-right-color
- border-bottom-color

Thuộc tính gộp

border: width style color
border-side: width style color

### Thuộc tính padding

- Khoảng cách giữa boder và content
- Các thuộc tính

* padding-top
* padding-left
* padding-right
* padding-bottom

Lưu ý:

- padding-top và bottom chỉ có tác dụng với thẻ block
- nếu dùng % --> tỷ lệ theo width của thẻ cha
- nếu dùng em --> tỷ lệ theo font-size của chính nó
- KHông có giá trị âm

Thay đổi kiểu thẻ html -> Dùng thuộc tính display

display: none | block | inline | inline-block

inline-block là gì? --> vừa có inline vừa có block

- nằm trên 1 dòng
- kích thước chiều rộng mặc định vẫn theo nội dung
- thay đổi được chiều rộng, chiều cao, padding-top

## margin

- căn lề (ngoài border)
- Các thuộc tinh

* margin-top
* margin-left
* margin-right
* margin-bottom
* margin

Lưu ý: You, 2 seconds ago • Uncommitted changes

- margin-top và margin-bottom chỉ có tác dụng với thẻ block
- Nếu dùng đơn vị % -→ Tỷ lệ theo width của thẻ cha
- Nếu dùng đơn vị em -> Tỷ lệ theo font-size của chính nó
- Có giá trị âm và auto

### width và hight

- width: thiết lập chiều rộng
- hight: thiết lập chiều cao

Lưu ý:

chỉ áp dụng với block

nếu dùng đơn vị % --> tỷ lệ với kích thước của thẻ cha

Nếu dùng đơn vị vw --> tỷ lệ với chiều rộng của khung nhin (viewport)

Nếu dùng đơn vị vh → Tỷ lệ với chiều cao của khung nhìn (viewport)

- min-width: chiều rộng tối thiểu
- max-width: chiều rộng tối đa
- min-hight: chiều cao tối thiểu
- max-hight: chiều cao tối đa

## Reset CSS

- Chuyển các CSS mặc định của trình duyệt về giá trị mong muốn
- padding, margin,m box-sizing, border, outline

```css
* {
  padding: 0;
  margin; 0;
  box-sizing: border-box;
  outline: 0;
  border: 0;
}
```

## Flex

### Các thuộc tính trong Flex container

1. display: flex --> kích hoạt Flexbox
2. Flex-direction --> Chọn hướng của trục main (Mặc định nằm ngang)

- row --> nằm ngang (Mặc định)
- row-reverse -> Nằm ngang, đảo ngược
- column -> Nằm dọc
- column-reverse -> Nằm dọc, đảo ngược

3. justify-content: căn chỉnh các item theo hướng song song với trục main

- flex-start
- center
- flex-end
- space-around
- space-between
- space-evenly

4. align-items: Căn chỉnh các item theo hướng song song với trục cross

- stretch
- Flex-start
- center
- Flex-end
- baseline

5. Flex-wrap

- nowrap
- wrap
- wrap-reverse

6. gap: Điều chỉnh khoảng cách giữa các item

### Các thuộc tính trong flex item

1. flex-grow: Giãn item chỉ định để lấp đầy vị trí còn trống của container

Cú pháp: flex-grow: number (mặc định = 0)

2. flex-shrink: Ngược lại với flex-grow

Cú pháp: flex-shrink: number (Mặc = 1)

3. flex-basis: Thiết lập kích thước ban đầu của item

Flex-basis sẽ không chính xác nếu

- Có max-width, hight
- Có min-width, hight
- Có flex-shrink, flex-grow

4. order: Sắp các item theo thứ tự mong muốn

Cú pháp: order: number

## position

Điều chỉnh vị trí của các phần tử

4 loại:

- Vị trí tương đối
- Vị trí tuyệt đối
- Cố định
- Tĩnh (Mặc định)

Cú pháp:

position: static | relative | absolute | fixed

các thuộc tính trong position (Chỉ khả dụng khi có position khác static)

- top
- left
- right
- bottom
- z-index
- inset

## Transition

Lưu ý: Chỉ tác dụng với các thuộc tính có
giá trị là số

1. Thuộc tính transition-property

- nhệ thuọc tann css de cho phép ấp dụng transition
- Mỗi thuộc tính cách nhau bởi dấu ,
- Có thể chọn tất cả bằng cách dùng giá trị all
  Ví dụ:
  ```css
  transition-property: width, color;
  ```

2. Thuộc tính transition-duration

- chọn thời gian hoàn thành quá trình chuyển động
- Đơn vị: s, ms

3. Thuộc tính transition-delay

- Thời gian trễ trước khi chuyển động bắt đầu
- Đơn vị: s, ms

4. Thuộc tính transition-timing-function

- ease (Mặc định): Chuyển động chậm - nhanh - chậm
- ease-in: chuyển động chậm - nhanh
- ease-out: chuyển động nhanh - chậm
- ease-in-out: chuyển động chậm - nhanh - chậm
- linear: chuyển động đều
- cubic-bezier (): Tự thiết lập

5. Thuộc tính transition
   transtion: property duration delay timing-function
   Nếu muốn khai báo nhiều thuộc tính:

   ```css
   transition-property: width, height;
   transtion: 0.3s linear;
   ```

## Transform

- Thay đổi hình dạng ban đầu của phần tử HTML
- Tác dụng: xoay, nghiêng, phóng to, thu nhỏ, di chuyển

cú pháp: transform value

1. Xoay

- rotate(angle) -> Xoay phần tử theo trục Z
- rotateX(angle) —> Xoay phần tử theo trục x
- rotateY (angle) -> Xoay phần tử theo trục y

Thuộc tính tách riêng: rotate: angle

2. Nghiêng

- skew(x, y) -> Nghiêng theo trục x và y
- skewX(value) -> Nghiêng theo trục X
- skewY(value) -> Nghiêng theo trục Y

3. Phóng to / thu nhỏ

- scale(x, y) -> phóng to / thu nhỏ theo trục x, y
- scaleX(value) —> phóng to / thu nhỏ theo trục x
- scaleY (value) -> phóng to / thu nhỏ theo trục y

Thuộc tính tách riêng: scale: x y;

4. Dịch chuyển

- translate(x, y) --> dịch chuyển theo trục x, y (Không thay đổi bổ cục)
- translateX(value) - Dịch chuyển theo trục X
- translateY(value) - Dịch chuyển theo trục Y

Thuộc tính tách riêng: translate: x y

## Responsive

- Thiết kế web thích ứng
- Đảm bảo giao diện tương thích với tất cả thiết bị
- Nhận diện thiết bị thông qua kích thước màn hình (Chiều rộng)

- Hình thức khác để tạo giao diện trên thiết bị khác: Adaptive

1. Breakpoint

- Điểm tọa độ màn hình mà tại điểm đó giao diện sẽ bị thay
  đổi
- Không có các breakpoint cổ định cho mọi dự án, mà chỉ có
  breakpoint phố biến
- Các breakpoint phổ biến

* 1400px
* 1200px
* 992px -->
* 768px -->
* 576px

2. Meta Viewport

Thẻ meta được thêm thẻ head để xác định tỷ lệ của các phiên bản
màn hình

3. Media Queries

- At-rule của CSS cho phép áp dụng các khối CSS với breakpoint chỉ đinh

```css
@media sreen and (max-width: breakpoint) {
  selector {
    thuoctinh: giatri;
  }
}
```

```css
@media sreen and (min-width: 400px) and (max-width: 800px) {
  body {
    color: red;
  }
}
```

Áp dụng các breakpoint vào media queries

```css
@media screen and (max-width: 1399px) {
  Selector {
    thuoctinh: giatri;
  }
}

@media screen and (max-width: 1199px) {
  Selector {
    thuoctinh: giatri;
  }
}

@media screen and (max-width: 991px) {
  Selector {
    thuoctinh: giatri;
  }
}

@media screen and (max-width: 787px) {
  Selector {
    thuoctinh: giatri;
  }
}

@media screen and (max-width: 575px) {
  Selector {
    thuoctinh: giatri;
  }
}
```

## Animation

- Thuộc tính cho phép thiết lập hiệu ứng
- Định nghĩa hiệu ứng --> Dùng @keyframes

Cú pháp:

```css
@keyframes ten-hieu-ung {
  p1% {
    thuoctinh: giatri;
  }
  p2% {
    thuoctinh: giatri;
  }
  p3% {
    thuoctinh: giatri;
  }
  pn% {
    thuoctinh: giatri;
  }
}
```

Phần trăm trong keyframes sẽ là tỷ lệ với tổng thời gian hoàn thành hiệu ứng

Giá trị đặc biệt:

from: Tương đương với 0%
to: Tương đường 100%

Thuộc tính animation:

- animation-name: ten-hieu-ung (keyframe)
- animation-duration: thoigian (s,ms)
- animation-delay: thoigian (s,ms)
- animation-timing-function: ease|ease-in|ease-out |ease-in-out |linearl
- animation-iteration-count: so|infinite --> số lần lập lại hiệu ứng
- animation: name duration delay timing-function iteration-count
