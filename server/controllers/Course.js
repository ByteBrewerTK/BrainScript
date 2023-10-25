const Course = require('../models/Course');
const User = require('../models/User');
const Category = require('../models/Category');
const {uploadFileToCloudinary} = require('../utils/imageUpload');

exports.createCourse = async (req, res) => {

    try{
        
        const userId = req.user.id;
        let {
            course_name,
			course_description,
			what_will_you_learn,
			price,
			tag,
			category,
			status,
			instructions
        } = req.body;

        const thumbnail = req.files.thumbnailImage;

        if(!course_name || !course_description || !what_will_you_learn || !price || !tag || !thumbnail || !category){
            return res.status(403).json({
                success : false,
                message : "All fields are required"
            });
        }

        if (!status || status === undefined) {
			status = "Draft";
		}

        const instructorDetails = await User.findById(userId, {
            account_type : "Instructor"
        });
        console.log('Instructor Details : ', instructorDetails);

        if(!instructorDetails){
            return res.status(403).json({
                success : false,
                message : "Instructor not found"
            });
        }

        const categoryDetails = await Category.findById(category);

        if(!categoryDetails){
            return res.status(403).json({
                success : false,
                message : "Category details not found"
            });
        }

        const thumbnailImage  = await uploadFileToCloudinary(
            thumbnail,
            process.env.FOLDER_NAME
        );

        console.log(thumbnailImage);

        const newCourse = await Course.create({
            course_name ,
            course_description ,
            instructor : instructorDetails._id,
            what_will_you_learn ,
            price ,
            category : categoryDetails._id,
            thumbnail : thumbnailImage.secure_url,
            status,
            instructions
        });


        await User.findByIdAndUpdate(
            {_id : instructor._id},
            {
                $push : {
                    courses : newCourse._id
                }
            },
            {new : true}
        );
        
        await Category.findByIdAndUpdate(
			{ _id: category },
			{
				$push: {
					course: newCourse._id,
				},
			},
			{ new: true }
		);

        return res.status(200).json({
            success : true,
            message : "Course successfully created",
            data : newCourse
        });
    }catch(error){

        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Error occured while creating new course",
            error : error.message
        });

    }

}

exports.getAllCourses = async (req, res) =>{
    try{

        const allCourses = await Course.find({}, 
            {
                course_name: true,
                price: true,
                thumbnail: true,
                instructor: true,
                rating_and_reviews: true,
                students_enrolled: true
            }
        )
        .populate("instructor")
        .exec();

        return res.status(200).json({
            success : true,
            message : "All course successfully fetched",
            data : allCourses
        });

    }catch(error){

        console.log(error)
        return res.status(500).json({
            success : false,
            message : "Error occured while fetching all courses",
            error : error.message
        });

    }
}

exports.getCourseDetails = async (req, res) =>{
    try{

        const {course_id} = req.body;
        console.log('inside get a course controller');

        const courseDetails = await Course.find({_id : course_id})
                                            .populate(
                                                {
                                                    path : "instructor" ,
                                                    populate : {
                                                        path : "additional_details"
                                                    }
                                                }
                                            )
                                            .populate("category")
                                            .populate("rating_and_reviews")
                                            .populate({
                                                path : "course_content",
                                                populate : {
                                                    path : "sub_section"
                                                }
                                            })
                                            .exec();


        if(!courseDetails.length){
            return res.status(400).json({
                success : false,
                message : `Could not find the course with ${course_id}`
            });
        }

        console.log(courseDetails);

        return res.status(200).json({
            status : true,
            message : "Course details fetched successfully",
            data : courseDetails
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Error occured while fetching course details",
            error : error.message
        })
    }
}