const mongoose = require('mongoose');

const courseProgressSchema = new mongoose.Schema({

    course_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Course"
    },
    completed_videos : [
        {
            type :mongoose.Schema.Types.ObjectId,
            ref : "SubSection"
        }
    ]

});

module.exports = mongoose.model('CourseProgress', courseProgressSchema);