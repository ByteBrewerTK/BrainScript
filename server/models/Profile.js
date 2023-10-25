const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({

    gender : {
        type : String
    },
    date_of_birth : {
        type : String
    },
    contact_number : {
        type : Number,
        trim: true
    },
    about : {
        type : String
    }

});

module.exports = mongoose.model('Profile', profileSchema);