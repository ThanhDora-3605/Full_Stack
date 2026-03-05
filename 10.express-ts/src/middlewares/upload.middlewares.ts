import multer from "multer";
import path from "node:path";
import fs from "node:fs";
import crypto from "node:crypto";
const uploadDir = path.join(__dirname, "..", "..", "uploads");
fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (_req, file, cb) => {
    const type = ["image/jpeg", "image/png", "image/jpg"];
    if (!type.includes(file.mimetype)) {
      return cb(new Error("Invalid file type"), "");
    }
    const ext = path.extname(file.originalname) || "";
    const newwFile = crypto.randomUUID() + ext;
    cb(null, newwFile);
  },
});

const MAX_SIZE = 5 * 1024 * 1024;

export const uploadMiddleware = multer({
  storage,
  limits: { fileSize: MAX_SIZE },
});
