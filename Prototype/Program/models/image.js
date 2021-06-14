const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema({
    name: {
        type: String
    },
    desc: {
        type: String
    },
    img: {
        data: Buffer,
        contentType: String
    }
});

module.exports = new mongoose.model('Image', ImageSchema);