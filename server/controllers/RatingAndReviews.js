const mongoose = require('mongoose');
const RatingAndReviews = require('../models/RatingAndReviews');
const Course = require('../models/Course');

exports.createRating = async (req, res) =>{
    try{

        const userId = req.user.id;

        const {rating, review, course_id} = req.body;

        const courseDetails = await Course.findOne(
            {
                _id : course_id,
                students_enrolled : {$elemMatch : {eq : userId}}
            });
        
        if(!courseDetails){
            return res.status(404).json({
                success : false,
                message : "Student is not enrolled"
            });
        }

        const alreadyReviewed = await RatingAndReviews.findOne({
            user : userId,
            course : course_id 
        })

        if(alreadyReviewed){
            return res.status(400).json({
                success : false,
                message : "Course is already review by the user"
            });
        }

        const ratingReview = await RatingAndReviews.create({
            rating,
            reviews,
            course,
            user : userId
        });

        const updatedCourseDetails = await Course.findByIdAndUpdate({_id : course_id},{
            $push : {
                rating_and_reviews : ratingReview._id
            }
        },
        {new : true});

        console.log(updatedCourseDetails);

        return res.status(200).json({
            success : true,
            message : "Rating successfully created",
            ratingReview
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Error occured while creating rating",
            error : error.message
        })
    }
}

exports.getAverageRating = async (req, res) => {
    try{

        const {course_id} = req.body;

        const result = await RatingAndReviews.aggregate([
            {
                $match : {
                    course : new mongoose.Types.ObjectId(course_id)
                }
            },
            {
                $group : {
                    _id : null,
                    average_rating : {$avg : "$rating"}
                }
            }
        ]);

        if(result.length > 0){
            return res.status(200).json({
                success : true,
                message : result[0].average_rating,
            })
        }

        return res.status(200).json({
            success : true,
            message : "Average Rating is 0, no rating given till now",
            average_rating
        });

    }catch(error){
        console.log(error);

        return res.status(500).json({
            success : false,
            message : "Error occured while fetching average rating",
            error : error.message
        });
    }
}

exports.getAllRatingReviews = async (req, res) => {
    try{
        const allReviews = await RatingAndReviews.find({})
                                                .sort({rating : "desc"})
                                                .populate({
                                                    path : "user",
                                                    select : "first_name last_name email image"
                                                })
                                                .populate({
                                                    path : "course",
                                                    select : "course_name"
                                                })
                                                .exec()

        return res.status(200).json({
            success : true,
            message : "All reviews fetched successfully",
            data : allReviews
        })
    }catch(error){

    }
}