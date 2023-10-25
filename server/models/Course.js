const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({

    course_name : {
        type : String,
        trim : true,
        required : true
    },
    course_description : {
        type : String,
        trim: true,
        required : true
    },
    instructor : {
        type : mongoose.Schema.Types.ObjectId,
        required: true,
        ref : "User"

    },
    what_will_you_learn : {
        type : String
    },
    course_content : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Section"
        }
    ],
    rating_and_reviews : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "RatingAndReviews"
        }
    ],
    price : {
        type : Number,
        trim : true,
        required : true
    },
    thumbnail : {
        type : String,
    },
    tags : {
        type : [String],
        required : true
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category"
    },
    students_enrolled : [
        {
            type : mongoose.Schema.Types.ObjectId,
            required : true,
            ref : "User"
        }
    ],
    instructions: {
		type: [String],
	},
    status: {
		type: String,
		enum: ["Draft", "Published"],
	}

});

module.exports = mongoose.model('Course', courseSchema);