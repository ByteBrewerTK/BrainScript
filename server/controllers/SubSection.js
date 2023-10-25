const SubSection = require('../models/SubSection');
const Section = require('../models/Section');
const { uploadFileToCloudinary } = require('../utils/imageUpload');
require('dotenv').config();

exports.createSubSection = async ( req, res ) => {

    try{
        const {title, time_duration, description, section_id} = req.body;

        const video = req.files.videoFile;

        console.log("video : ",video);

        if(!title || !time_duration || !description || !video || !section_id){
            return res.status(400).json({
                success : false,
                message : "All fields required"
            });
        }

        const videoDetaills = await uploadFileToCloudinary(video, process.env.FOLDER_NAME);

        const newSubSection = await SubSection.create({
            title,
            time_duration,
            description,
            video : videoDetaills.secure_url
        });

        const updatedSection = await Section.findByIdAndUpdate(section_id, {
                            $push : {
                                sub_section : newSubSection._id
                            }
                        },
                        {new : true})
                        .populate('SubSection');
        
        return res.status(200).json({
            success : true,
            message : "SubSection successfully created",
            data : updatedSection
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Error occured while creating subsection",
            error : error.message
        });
    }

}

exports.updateSubSection = async ( req, res ) => {

    try{
        const {title, time_duration, description, sub_section_id} = req.body;

        if(!title || !time_duration || !description || sub_section_id){
            return res.status(400).json({
                success : false,
                message : "All fields required"
            });
        }

        const updatedSubSection = await SubSection.findByIdAndUpdate(sub_section_id,
            {
                title,
                time_duration,
                description
            },
            {new : true});

        return res.status(200).json({
            success : true,
            message : "Sub section successfully updated",
            data : updatedSubSection
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Error occured while creating subsection",
            error : error.message
        });
    }

}

exports.deleteSubSection = async (req, res) =>{
    try{

        const {section_id, sub_section_id} = req.body;

        if(!section_id || !sub_section_id){
            return res.status(400).json({
                success : false,
                message : "Id not found"
            });
        }

        await SubSection.deleteOne({_id : section_id}, (err, result)=>{
                if(err){
                    return

                }else{
                    console.log('SubSection successfully deleted');
                }
            });
        
        await Section.findByIdAndUpdate(section_id,
            {
                $pull : {
                    _id : sub_section_id
                }
            }, 
            {new : true},
            (err, updatedDetails)=>{
                if(err){
                    return

                }else{
                    console.log('Updated Section : ',updatedDetails);
                }
            });

        return res.status(200).json({
            success : true,
            message : "SubSection successfully deleted"
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Error occured while creating subsection",
            error : error.message
        });
    }
}