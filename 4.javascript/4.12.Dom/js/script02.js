const inputEl = document.querySelector("input");
const btnEl = document.querySelector("button");
const errorEl = document.querySelector(".error");
const imageEl = document.querySelector(".image");
btnEl.addEventListener("click", () => {
  errorEl.innerText = "";
  imageEl.innerText = "";
  if (!inputEl.value.trim()) {
    errorEl.innerText = "Vui lòng nhập link ảnh";
    return;
  }
  //   imageEl.innerHTML = `<img src="${inputEl.value}"/>`;
  // Tạo element Node từ js --> đưa cây DOM
  const img = document.createElement("img");
  img.src = inputEl.value; //Câ[j nhật thuộc tính bên cho node
  imageEl.innerText = ""; //Xoá nội dung bên trong thẻ div
  imageEl.append(img); //Thêm vào cuối của element
  inputEl.value = "";
});
