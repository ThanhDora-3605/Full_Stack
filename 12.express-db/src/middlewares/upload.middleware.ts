import multer from "multer";
import path from "node:path";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", "uploads"));
    //Khai báo folder chứa file sau khi upload
  },
  filename: function (req, file, cb) {
    const types = ["image/png", "image/jpg", "image/gif", "image/jpeg"];
    //mimetype --> image/png, image/jpg, image/gif,...
    if (!types.includes(file.mimetype)) {
      const error = new Error("Định dạng file không được phép");
      return cb(error, "");
    }
    //file.originalname --> Lấy tên file ban đầu
    const ext = path.extname(file.originalname);
    //Lấy phần mở rộng của file: .png, .jpg,...

    //Tạo tên file mới
    const newFile = crypto.randomUUID() + ext;
    cb(null, newFile);
  },
});

export const upload = multer({ storage });
