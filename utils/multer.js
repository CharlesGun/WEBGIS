const multer = require('multer');

const storage = multer.memoryStorage();
const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/jpeg', 'video/mp4', 'video/wav'];
    if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true); // Accept the file
    } else {
        cb(new Error('Invalid file type. Only image and video files are allowed.'), false); // Reject the file
    }
};

module.exports = {
    upload: multer({
        storage: storage,
        fileFilter: fileFilter
    })
}