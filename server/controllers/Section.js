const Section = require('../models/Section');
const Course = require('../models/Course');

exports.createSection = async (req, res) => {

    try{

        const {section_name, course_id} = req.body;

        if(!section_name || !course_id){
            return res.status(403).json({
                success : false,
                message : "Missing Properties"
            });
        }

        const newSection = await Section.create({section_name});

        const updatedCourseDetails = await Course.findByIdAndUpdate(
                                                                    course_id,
                                                                    {
                                                                        $push : {
                                                                            course_content : newSection._id
                                                                        }
                                                                    },
                                                                    {new : true}
                                                                );
        
        return res.status(200).json({
            success : true,
            message : "Section successfully created",
            data : updatedCourseDetails
        })

    }catch(error){

        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Error occured while creating section",
            error : error.message
        });
    }

}

exports.updateSection = async ( req, res ) => {

    try{

        const {section_name, section_id} = req.body;

        if(!section_name || !section_id){
            return res.status(403).json({
                success : false,
                message : "Missing Properties"
            });
        }

        const updatedSectionDetails = await Section.findByIdAndUpdate(section_id, {section_name}, {new : true});

        return res.status(200).json({
            success : true, 
            message : "Section successfully updated",
            data : updatedSectionDetails
        })
        
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Error occured while updating section",
            error : error.message
        });
    }

}

exports.deleteSection = async ( req, res ) => {

    try{

        const {section_id, course_id} = req.body

        // await Course.findByIdAndUpdate(
        //     {
        //         $pull : {
        //             section : section_id
        //         }
        //     }
        // );
        await Section.findByIdAndDelete(section_id);

        return res.status(200).json({
            success : true,
            message : "Section successfully deleted"
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Error occured while deleting section",
            error : error.message
        });
    }

}