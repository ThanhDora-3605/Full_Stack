// Dữ liệu sản phẩm
const product_data = [
  {
    product_id: 1,
    product_name: "Sản phẩm 1",
    product_price: 100000,
  },
  {
    product_id: 2,
    product_name: "Sản phẩm 2",
    product_price: 200000,
  },
  {
    product_id: 3,
    product_name: "Sản phẩm 3",
    product_price: 300000,
  },
  {
    product_id: 4,
    product_name: "Sản phẩm 4",
    product_price: 400000,
  },
];

// Hiển thị danh sách sản phẩm và tạo html
let count = 0;
product_data.forEach(function (item) {
  count++;
  let product_item = "<tr>";
  product_item += "<td>" + count + "</td>";
  product_item += "<td>" + item.product_name + "</td>";
  product_item += "<td>" + item.product_price.toLocaleString("vi-VN") + "</td>";
  product_item +=
    '<td><input type="number" class="w-full border-1 border-black" id="quantity_' +
    item.product_id +
    '" value="1"><button type="button" class="w-full border-1 border-black cursor-pointer hover:bg-gray-300" id="add_to_cart_' +
    item.product_id +
    '">Thêm vào giỏ</button></td>';
  product_item += "</tr>";
  document.querySelector("#productTable").innerHTML += product_item;
});

// Thêm sản phẩm vào giỏ hàng
const add_to_cart = document.querySelectorAll("#productTable button");
if (add_to_cart.length > 0) {
  for (let i = 0; i < add_to_cart.length; i++) {
    add_to_cart[i].onclick = function () {
      const quantity_id = this.parentElement.querySelector(
        "input[type='number']"
      ).id;
      let product_id = quantity_id.replace("quantity_", "");

      product_id = parseInt(product_id);

      let quantity_value = document.querySelector("#" + quantity_id).value;
      if (quantity_value < 1) {
        quantity_value = 1;
      }

      let cart_data = sessionStorage.getItem("cart");
      cart_data = JSON.parse(cart_data);
      if (cart_data == null) {
        cart_data = [];
        const cart_object = {
          product_id: product_id,
          quantity: quantity_value,
        };

        // Thêm sản phẩm mới vào giỏ hàng
        cart_data.push(cart_object);
      } else {
        // Kiểm tra giỏ hàng
        let check = false;
        cart_data.forEach(function (cart_item, cart_key) {
          if (product_id == cart_item.product_id) {
            let current_quantity = parseInt(cart_item.quantity);
            current_quantity += parseInt(quantity_value);
            cart_data[cart_key] = {
              product_id: product_id,
              quantity: current_quantity,
            };
            check = true;
          }
        });

        if (check == false) {
          const cart_object = {
            product_id: product_id,
            quantity: quantity_value,
          };
          cart_data.push(cart_object);
        }
      }

      // Lưu giỏ hàng
      const cart_json = JSON.stringify(cart_data);
      sessionStorage.setItem("cart", cart_json);
      renderCart();
    };
  }
}

// Tìm sản phẩm theo id
function get_product(id) {
  let result;
  product_data.forEach(function (data) {
    if (data.product_id == id) {
      result = data;
    }
  });

  return result;
}

// Hiển thị giỏ hàng
function renderCart() {
  let cart_data = sessionStorage.getItem("cart");
  cart_data = JSON.parse(cart_data);

  // Kiểm tra giỏ hàng
  if (cart_data !== null && cart_data.length > 0) {
    const cart_table = `<table class="w-full border-collapse border-1" cellpadding="0" cellspacing="0" width="100%" border="1" id="cartTable">
<thead>
    <tr>
        <th width="5%">STT</th>
        <th>Tên sản phẩm</th>
        <th width="20%">Giá</th>
        <th width="20%">Số lượng</th>
        <th width="20%">Thành tiền</th>
        <th width="5%">Xoá</th>
    </tr>
</thead>
<tbody>
</tbody>
</table><hr/>
<button type="button" class="w-[20%] border-1 border-black cursor-pointer hover:bg-gray-300" id="update_cart">Cập nhật giỏ hàng</button>
<button type="button" class="w-[20%] border-1 border-black cursor-pointer hover:bg-gray-300" id="delete_cart">Xoá giỏ hàng</button>
`;

    // Hiển thị giỏ hàng
    document.querySelector("#cartData").innerHTML = cart_table;

    let count = 0;
    let total_quantity = 0;
    let total_amount = 0;

    cart_data.forEach(function (cart_item) {
      count++;

      // Lấy thông tin của sản phẩm
      const detail = get_product(cart_item.product_id);

      // Tính thành tiền (giá × số lượng)
      let amout = parseInt(detail.product_price) * parseInt(cart_item.quantity);
      total_amount += parseInt(amout);
      total_quantity += parseInt(cart_item.quantity);
      const tr_html =
        `<tr>
            <td>` +
        count +
        `</td>
            <td>` +
        detail.product_name +
        `</td>
            <td>` +
        detail.product_price.toLocaleString("vi-VN") +
        `</td>
            <td><input type="number" class="quantity" id="quantity_` +
        cart_item.product_id +
        `" data-id="` +
        cart_item.product_id +
        `" value="` +
        cart_item.quantity +
        `"></td>
            <td>` +
        amout.toLocaleString("vi-VN") +
        `</td>
            <td><button type="button" class="w-full border-1 border-black cursor-pointer hover:bg-gray-300 delete-item">Xoá</button></td>
        </tr>`;

      document.querySelector("#cartTable").innerHTML += tr_html;
    });

    // Thêm dòng tổng cộng
    if (count > 0) {
      const last_tr =
        `<tr>
            <td colspan="3">Tổng</td>
            <td>` +
        total_quantity +
        `</td>
            <td colspan="2">` +
        total_amount.toLocaleString("vi-VN") +
        `</td>
        </tr>`;

      document.querySelector("#cartTable").innerHTML += last_tr;
    }

    updateCart();
    deleteCart();
    deleteAll();
  } else {
    document.querySelector("#cartData").innerHTML =
      "Giỏ hàng không có sản phẩm";
  }
}

// Cập nhật giỏ hàng
function updateCart() {
  document.querySelector("#cartData #update_cart").onclick = function () {
    const cart_arr = document.querySelectorAll(
      "#cartTable tbody input[type='number']"
    );
    if (cart_arr !== null && cart_arr.length > 0) {
      cart_arr.forEach(function (cart_item) {
        let quantity_value = parseInt(cart_item.value);
        let product_id = parseInt(cart_item.id.replace("quantity_", ""));

        let cart_data = sessionStorage.getItem("cart");
        cart_data = JSON.parse(cart_data);

        cart_data.forEach(function (value, key) {
          if (product_id == value.product_id) {
            if (quantity_value > 0) {
              cart_data[key] = {
                product_id: product_id,
                quantity: parseInt(quantity_value),
              };
            } else {
              cart_data.splice(key, 1);
            }
          }
        });

        const cart_json = JSON.stringify(cart_data);

        sessionStorage.setItem("cart", cart_json);
      });

      alert("Cập nhật giỏ hàng thành công");

      renderCart();
    }
  };
}

// Xóa sản phẩm khỏi giỏ hàng
function deleteCart() {
  document
    .querySelectorAll("#cartTable tbody button.delete-item")
    .forEach(function (del_item) {
      del_item.onclick = function () {
        if (confirm("Are you sure?")) {
          let product_id = this.parentElement.parentElement
            .querySelector("input[type='number']")
            .id.replace("quantity_", "");
          product_id = parseInt(product_id);

          let cart_data = sessionStorage.getItem("cart");

          cart_data = JSON.parse(cart_data);

          cart_data.forEach(function (value, key) {
            if (product_id == value.product_id) {
              cart_data.splice(key, 1);
            }
          });

          const cart_json = JSON.stringify(cart_data);

          sessionStorage.setItem("cart", cart_json);
          renderCart();
        }
      };
    });
}

// Xóa toàn bộ giỏ hàng
function deleteAll() {
  document.querySelector("#delete_cart").onclick = function () {
    if (confirm("Are you sure?")) {
      sessionStorage.removeItem("cart");
      renderCart();
    }
  };
}

renderCart();
