const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {

        first_name : {
            type : String,
            required : true,
            trim:true
        },
        last_name : {
            type : String,
            required : true,
            trim:true
        },
        email : {
            type : String,
            required : true,
            trim:true
        },
        password : {
            type : String,
            required : true
        },
        account_type:{
            type : String,
            enum : ["Admin", "Instructor", "Student"],
            required: true
        },
        active: {
            type: Boolean,
            default: true,
        },
        approved: {
            type: Boolean,
            default: true,
        },
        token : {
            type : String
        },
        reset_token_expires : {
            type : Date
        },
        additional_details : {
            type : mongoose.Schema.Types.ObjectId,
            required : true,
            ref : "Profile"
        },
        courses : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : "Course"
            }
        ],
        image : {
            type : String,
            required : true,
        },
        course_progress : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : "CourseProgress"
            }
        ]

    },
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);