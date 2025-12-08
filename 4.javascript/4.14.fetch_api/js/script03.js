//Upload file

// Post request
// --> Body
// --> Header: Content-Type
// + application/json --> Dạng JSON
// + application/x-www-form-urlencoded --> Dạng urlencoded
// + multipart/form-data --> Gửi cả file và text

const baseUrl = `https://api.escuelajs.co/api/v1`;
const imageEl = document.querySelector("#image");
const btnEl = document.querySelector("button");
const previewEl = document.querySelector(".preview");

let previewUrl;
imageEl.addEventListener("change", (e) => {
  const file = e.target.files[0];
  // Xoá ảnh cũ trong blob
  if (previewUrl) {
    URL.revokeObjectURL(previewUrl);
  }
  previewUrl = URL.createObjectURL(file);
  const img = document.createElement("img");
  img.src = previewUrl;
  Object.assign(img.style, {
    width: "300px",
    objectFit: "cover",
    borderRadius: "10px",
  });
  previewEl.innerText = "";
  previewEl.append(img);
  //   console.log(previewUrl);
});

btnEl.addEventListener("click", async () => {
  const file = imageEl.files[0];
  if (!file) {
    return alert("Please select an image");
  }

  btnEl.disabled = true;
  btnEl.textContent = "Uploading...";

  try {
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch(`${baseUrl}/files/upload`, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Upload failed:", error);
    alert("Upload failed. Please try again.");
  } finally {
    btnEl.disabled = false;
    btnEl.textContent = "Upload";
  }
});
