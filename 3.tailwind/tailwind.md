# Cách học tailwind

## Cú pháp:

```
prefix-value
```

- prefix: đại diện cho thuộc tính css
- value: Đại diên cho giá trị của thuộc tính đó

vd: text-red-500

```
prefix-[custom-value]
```

custom-value: giá trị tự đău vào (không được chứa dấu cách)

vd: text[#000]

## Sử dụng pseudo class

```
ten-pseudo:prefix-value
ten-pseudo:prefix-[custom-value]
```

vd: hover:text-[red]

## Responsive

CÚ pháp:

```
breakpoint:prefix-value
breakpoint:prefix-[custom-value]
```

breakpoint:

- Sm
- md
- Lg
- xl
- 2x1

Lưu ý: Tailwind triển khai theo mobile first. Cho nên
nếu không khai báo breakpoint trong class -> Sẽ là
màn hình nhỏ nhất
