const Profile = require('../models/Profile');
const User = require('../models/User');
const { uploadFileToCloudinary } = require("../utils/imageUpload");

exports.updateProfile = async (req, res) => {
    try{

        const {date_of_birth="",about="", gender, contact_number } = req.body;

        const userId = req.user.id;
        console.log("use id : ", userId);

        if(!gender || !contact_number || !userId){
            return res.status(400).json({
                success : false,
                message : "Mandatory fields are required"
            });
        }

        const userDetails = await User.findOne({id : id},
            (err, user)=>{
                if(err){
                    return
                }else{
                    console.log("user : ",user);
                }
            });

        const profileId = userDetails.additional_details ;

        const userProfile = await Profile.findById(profileId, 
            (err, profile)=>{
                if(err){
                    return
                }else{
                    console.log("profile : ",profile);
                }
            });

        userProfile.gender = gender;
        userProfile.date_of_birth = date_of_birth;
        userProfile.contact_number = contact_number;
        userProfile.about = about;

        await userProfile.save();

        return res.status(200).json({
            success : true,
            message : "Profile successfully updated"
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Error occured while updating profile",
            error : error.message
        })
    }
}

exports.deleteAccount = async ( req, res ) => {

    try{

        const {id} = req.user;
        console.log("user : ", req.user);

        const userDetails = await User.findById(id);

        if(!userDetails){
            return res.status(404).json({
                success : false,
                message : "User not found"
            });
        }

        await Profile.findByIdAndDelete({_id : userDetails.additional_details});

        await User.findByIdAndDelete(id);

        return res.status(200).json({
            success : true,
            message : "Account successfully deleted"
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Error occured while deleting Account",
            error : error.message
        });
    }

}

exports.getAllUserDetails = async ( req, res ) => {

    try{

        const id = req.user.id;

        if(!id){
            return res.status(404).json({
                success : false,
                message : "User id not found"
            });
        }

        const userDetails = await User.findById(id).populate("additional_details").exec();

        if(!userDetails){
            return res.status(404).json({
                success : false,
                message : "User not found"
            });
        }

        return res.status(200).json({
            success : true,
            message : "User data fetched successfully",
            data : userDetails
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Error occured while fetching All User Details",
            error : error.message
        });
    }

}

exports.updateDisplayPicture = async (req, res) => {
    try {
        const displayPicture = req.files.displayPicture
        const userId = req.user.id
        const image = await uploadFileToCloudinary(
            displayPicture,
            process.env.FOLDER_NAME,
            1000,
            1000
        )
        console.log(image)
        const updatedProfile = await User.findByIdAndUpdate(
            { _id: userId },
            { image: image.secure_url },
            { new: true }
        )
        res.send({
            success: true,
            message: `Image Updated successfully`,
            data: updatedProfile,
        })
        } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
};

exports.getEnrolledCourses = async (req, res) => {
    try {
		const userId = req.user.id
		const userDetails = await User.findOne({
			_id: userId,
		})
			.populate("courses")
			.exec()
		if (!userDetails) {
			return res.status(400).json({
			success: false,
			message: `Could not find user with id: ${userDetails}`,
			})
		}
		return res.status(200).json({
			success: true,
			data: userDetails.courses,
		})
		} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		})
    }
};