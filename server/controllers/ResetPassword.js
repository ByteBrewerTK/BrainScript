const User = require('../models/User');
const mailSender = require('../utils/mailSender');
const bcript = require('bcrypt');

// Generating token foe reset password
exports.resetPasswordToken = async (req, res)=>{
    try{
        // get data from req body
        const {email} = req.body;

        // check it is empty or not
        if(!email.trim()){
            // If email field is empty
            return res.status(401).json({
                success : false,
                message : "Email field is required"
            });
        }

        // Checkin is the user is registered or not
        const user = await User.findOne({email});

        if(!user){
            return res.status(401).json({
                success : false,
                message : "User not registered"
            });
        }

        // Generatiing random string for using it as password reset token
        const token = crypto.randomUUID();

        // Creating reset link
        const url = `http://localhost:3000/reset-password/${token}`

        // Updating reset token and reset expires time in DB corresponding to req email
        const updatedDetails = await User.findOneAndUpdate({email},
                                                    {
                                                        token : token,
                                                        reset_token_expires : Date.now()+5*60*1000
                                                    },
                                                    {new : true});

        console.log(updatedDetails);

        // Sending the reset link via mail
        await mailSender(email, 
                        "Password Reset Mail",
                        `Reset Link : ${url}`);
        

        return res.status(200).json({
            success : true,
            message : "Reset link send successfully"
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Error occured while reset password link sending",
            error : error.message
        });
    }
}

exports.resetPassword = async (req, res) =>{

    try{
        // Get data from req body
        const {password, confirm_password, token} = req.body;

        // Check required field is empty or not
        if(!password, !confirm_password){
            return res.status(401).json({
                success : false,
                message : "All fields are required"
            });
        }

        if(password !== confirm_password){
            return res.status(401).json({
                success : false,
                message : "Password not matching"
            });
        }

        // Checking is the token is valid or not
        const userDetails = await User.findOne({token:token});

        if(!userDetails){
            res.status(401).json({
                success : false,
                message : "Invalid reset token"
            });
        }

        // Check, is the token is expired or not
        if(userDetails.reset_token_expires < Date.now()){
            return res.status(401).json({
                success : false,
                message : "Reset token is expired please regenerate token"
            });
        }

        // Hashing the password
        const hashedPassword = await bcript.hash(password, 10);

        // Update password on DB corresponding to the email
        const updatedUser = await User.findOneAndUpdate({token},
            {
                password : hashedPassword,
                token : null
            },
            {new : true}
        );

        return res.status(200).json({
            success : true,
            message : "Password Reset successfully"
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Error occured while reseting the password",
            error : error.message
        });
    }


}
