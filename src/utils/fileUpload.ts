import multer from "multer";
import path from "path";
import { ensureDir } from "./folderUtils.js";

const UPLOAD_DIR = process.env.UPLOAD_DIR || "uploads";

const formatDateTime = (timestamp: number) => {
  const date = new Date(timestamp);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${day}-${month}-${year}_${hours}-${minutes}-${seconds}`;
};

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    const { username, timestamp } = _req.body;

    if (!username) {
      return cb(new Error("Username is required"), "");
    }

    if (!timestamp) {
      return cb(new Error("Timestamp is required"), "");
    }

    const dateTimeFolder = formatDateTime(parseInt(timestamp));
    const dest = path.join(UPLOAD_DIR, username, dateTimeFolder);

    ensureDir(dest);
    cb(null, dest);
  },
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname);
    const isAudio = /audio/.test(file.mimetype);

    if (isAudio) {
      cb(null, "audio_rec.m4a");
    } else {
      const photoIndex = Date.now();
      cb(null, `photo_${photoIndex}${ext}`);
    }
  },
});

export const upload = multer({ storage });
