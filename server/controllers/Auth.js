const User = require('../models/User');
const OTP = require('../models/OTP');
const otpGenerator = require('otp-generator');
const bcrypt = require('bcrypt');
const Profile = require('../models/Profile');
const jwt = require('jsonwebtoken');
require('dotenv').config();


// Send OTP

exports.sendOTP = async (req, res) => {

    try{
        // extract email from req body
        const {email} = req.body;

        // Check is the user is already registered or not

        const isUserPresent = await User.findOne({email});

        if(isUserPresent){
            return res.status(401).json({
                success : false,
                message : "User already registered"
            })
        }

        // Generating 6 digit otp
        let otp = await otpGenerator.generate(6,{

            upperCaseAlphabets : false,
            lowerCaseAlphabets : false,
            specialChars : false

        })

        // check if the otp is unique or not
        let result = await OTP.findOne({otp : otp});

        while(result){
            otp = await otpGenerator.generate(6,{

                upperCaseAlphabets : false,
                lowerCaseAlphabets : false,
                specialChars : false
        
            });
            result = await OTP.findOne({otp : otp});
        }
        console.log('OTP generated : ', otp);

        // create an entry in database
        const otpPayload = {email, otp};

        const otpBody = await OTP.create(otpPayload);

        console.log(otpBody);

        // sending the success response

        res.status(200).json({
            success : true,
            message : "OTP Generated",
            otp
        });

    }catch(error){
        console.log('Error accured when otp generating, error : ',error);

        res.status(500).json({
            success : false,
            message : 'Error accured when otp generating',
            error : error.message
        })

    }

}

// SignUp

exports.signUp = async (req, res) => {

    try{
        // Fetching data from req body
        const {

            first_name,
            last_name,
            email,
            contact_number,
            password,
            confirm_password,
            account_type,
            otp

        } = req.body;

        // Check any field cann't be empty
        if(!first_name || !email || !password || !confirm_password || !account_type || !otp){
            return res.status(401).json({
                success : false,
                message : "All input field required"
            });
        }

        // validate passwords
        if(password !== confirm_password){
            return res.status(400).json({
                success : false,
                message : "Password and confirm password doesn't match"
            });
        }

        // Check, is user already exists
        const isUserPresent = await User.findOne({email});

        if(isUserPresent){
            return res.status(401).json({
                success : false,
                message : "User already registered"
            });
        }

        // Fetching recent otp from DB
        const recentOTP = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);

        console.log("Recent OTP : ",recentOTP);

        // Validating OTP
        if(recentOTP.length===0){
            // OTP not found
            return res.status(402).json({
                success : false,
                message : "OTP not found"
            });
        }else{
            if(otp !== recentOTP[0].otp){
                // Invalid OTP
                // console.log(recentOTP);
                return res.status(401).json({
                    success : false,
                    message : "Invalid OTP"
                });
            }
        }

        // Hashing the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user
		let approved = "";
		approved === "Instructor" ? (approved = false) : (approved = true);

        // creating null profile for extracting object id of additional_details
        const profile = {
            gender : null,
            date_of_birth : null,
            contact_number : null,
            about : null
        }

        // Create Profile entry in DB
        const response = await Profile.create(profile);

        // Creating User entry in DB
        const user = await User.create({
            first_name,
            last_name,
            email,
            password : hashedPassword,
            account_type,
            additional_details : response._id,
            image : `https://api.dicebear.com/7.x/initials/svg?seed=${first_name}%20${last_name}`
        });

        res.status(200).json({
            success : true,
            message : "User successfully created",
            user
        });
    
    }catch(error){
        console.log(error);
        res.status(500).json({
            success : false,
            message : "Error occured when creating new user",
            error : error.message
        });
    }

}

// Login

exports.login = async (req, res) => {
    try{

        // Get data from req body
        const {email, password, role} = req.body;

        // Validate data

        if(!email, !password){
            return res.status(401).json({
                success : false,
                message : "All field required"
            });
        }

        // Check, Is the user is already registered or not

        let user = await User.findOne({email});

        if(!user){
            // If not registered
            return res.status(401).json({
                success : false,
                message : "User not found, please register your self first"
            });
        }

        // comparing req password with DB password corresponding with this email

        if(await bcrypt.compare(password, user.password)){

            // Generating JWT
            const payload = {
                id: user._id,
                email : user.email,
                account_type : user.account_type
            }

            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn : "2h"
            });

            const option = {
                expires : new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly : true
            }

            user.password = undefined;
            user.token = token;

            // Creating cookie and passing token on it
            res.cookie("token", token, option ).status(200).json({
                success : true,
                token,
                user,
                message : "LogedIn Successfully"
            });

        }else{
            // if password is incorrect
            return res.status(401).json({
                success : false,
                message : "Password Incorrect"
            });
        }

    }catch(error){
        console.log(error);

        return res.status(500).json({
            success : false,
            message : "Error occured time of Login",
            error : error.message
        })
    }
}

exports.changePassword = async (req, res) => {
	try {
		// Get user data from req.user
		const userDetails = await User.findById(req.user.id);

		// Get old password, new password, and confirm new password from req.body
		const { old_password, new_password, confirm_new_password } = req.body;

		// Validate old password
		const isPasswordMatch = await bcrypt.compare(
			old_password,
			userDetails.password
		);
		if (!isPasswordMatch) {
			// If old password does not match, return a 401 (Unauthorized) error
			return res
				.status(401)
				.json({ success: false, message: "The password is incorrect" });
		}

		// Match new password and confirm new password
		if (new_password !== confirm_new_password) {
			// If new password and confirm new password do not match, return a 400 (Bad Request) error
			return res.status(400).json({
				success: false,
				message: "The password and confirm password does not match",
			});
		}

		// Update password
		const encryptedPassword = await bcrypt.hash(new_password, 10);
		const updatedUserDetails = await User.findByIdAndUpdate(
			req.user.id,
			{ password: encryptedPassword },
			{ new: true }
		);

		// Send notification email
		try {
			const emailResponse = await mailSender(
				updatedUserDetails.email,
				passwordUpdated(
					updatedUserDetails.email,
					`Password updated successfully for ${updatedUserDetails.firstName} ${updatedUserDetails.lastName}`
				)
			);
			console.log("Email sent successfully:", emailResponse.response);
		} catch (error) {
			// If there's an error sending the email, log the error and return a 500 (Internal Server Error) error
			console.error("Error occurred while sending email:", error);
			return res.status(500).json({
				success: false,
				message: "Error occurred while sending email",
				error: error.message,
			});
		}

		// Return success response
		return res
			.status(200)
			.json({ success: true, message: "Password updated successfully" });
	} catch (error) {
		// If there's an error updating the password, log the error and return a 500 (Internal Server Error) error
		console.error("Error occurred while updating password:", error);
		return res.status(500).json({
			success: false,
			message: "Error occurred while updating password",
			error: error.message,
		});
	}
};