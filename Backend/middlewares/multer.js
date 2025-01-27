import multer from 'multer'

// Specify the destination directory for storing uploaded files
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'uploads/'); // 'uploads/' is the directory to store files
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname); // Use the original file name for the upload
    }
})

// Create the multer instance using the storage configuration
const upload = multer({ storage: storage })

export default upload;
