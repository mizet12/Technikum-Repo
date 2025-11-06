var multer = require('multer');
module.exports.files={
    storage:function(){
        var storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, 'public/files/')
            },
            filename: function (req, file, cb) {
                cb(null, file.originalname)
            }
        })

        return storage;
    },
    allowedFiles:function(req, file, cb) {
        if (!file.originalname.match(/\.(pdf|doc|txt|jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
            req.fileValidationError = 'Uwaga błąd! Plik nie jest obrazkiem!';
            return cb(new Error('Uwaga błąd! Plik nie jest obrazkiem!'), false);
        }
        cb(null, true);
    }
}