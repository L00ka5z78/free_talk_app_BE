import multer from 'multer';

//storing place
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'upload/');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now());
  },
});
const upload = multer({ storage }).array('image');
export { upload as uploadImages };
