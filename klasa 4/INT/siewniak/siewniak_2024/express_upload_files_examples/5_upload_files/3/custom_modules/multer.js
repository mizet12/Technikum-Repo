// Moduł definicji multera:

const multer = require("multer");
const path = require("path");

// Konfiguracja multera:
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/uploads/'));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const imageFileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|png|gif)$/)) {
        req.fileValidationError = 'Plik nie jest obrazkiem!';
        return cb(new Error('Uwaga błąd! Plik nie jest obrazkiem!'), false);
    }
    cb(null, true);};

// Ekxport multera z zadanymi parametrami:
exports.upload = multer({storage: storage, fileFilter: imageFileFilter});