const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({

    section_name: {
        type :String,

    },
    sub_section : [
        {
            type : mongoose.Schema.Types.ObjectId,
            required : true,
            ref : 'SubSection'
        }
    ]

});

module.exports = mongoose.model('Section', sectionSchema);