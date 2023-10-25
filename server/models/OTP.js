const mongoose = require('mongoose');
const mailSender = require('../utils/mailSender');
const otpTemplate = require("../mail/emailVerificationTemplate");

const otpSchema = new mongoose.Schema({

    email : {
        type : String,
        trim : true,
        required : true
    },
    otp : {
        type : String,
        required : true
    },
    create_at : {
        type : Date,
        default : Date.now(),
        expires : 5*600
    }

});

const sendVerificationMail = async (email, otp)=>{
    try{

        const mailResponse = await mailSender(
            email,
            "Verification Email",
            otpTemplate(otp)
        );

        console.log("Email sent successfully : ", mailResponse.response);

    }catch(error){
        console.log("Error occured while sending the verification mail : ", error);
        throw error;
    }
}

otpSchema.pre("save", async function (next){
    console.log("New document saved to database");

    console.log('email : ', this.email, " otp : ", this.otp);

    if(this.isNew){
        await sendVerificationMail(this.email, this.otp);
        console.log('mail sended');
    }
    next();
})
const OTP = mongoose.model('OTP', otpSchema);
module.exports  = OTP;