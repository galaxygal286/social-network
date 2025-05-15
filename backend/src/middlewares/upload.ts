import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: '/uploads',
  filename: function (_req, file, cb) {
    const ext = path.extname(file.originalname);
    const uniqueName = `${Date.now()}-${file.fieldname}${ext}`;
    cb(null, uniqueName);
  }
});

export const upload = multer({ storage });