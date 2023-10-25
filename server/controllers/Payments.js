const {instance} = require('../config/razorpay');
const User = require('../models/User');
const Course = require('../models/Course');
const mailSender = require('../utils/mailSender')
const mongoose = require('mongoose');

exports.capturePayment = async (req, res) => {
    const {course_id} = req.body;
    const userId = req.user.id;

    if(!course_id || !userId){
        return res.json({
            success : false,
            message : "Please provide valid course id or user id"
        });
    }

    let course;
    try{
        course = await Course.findById(course_id);

        if(!course){
            return res.status(404).json({
                success : false,
                message : "Course not found"
            });
        }

        const uid = new mongoose.Types.ObjectId(userId);

        if(course.students_enrolled.includes(uid)){
            return res.status(200).json({
                success : false,
                message : "Student is already enrolled"
            });
        }


    }catch(error){
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Error occured while verifying user for payment",
            error : error.message
        });
    }

    const amount = course.price;
    const currency = "INR";

    const options = {
        amount : amount*100,
        currency,
        receipt : Math.random(Date.now()).toString(),
        notes : {
            course_id,
            user_id : userId
        }
    }

    try{
        const paymentResponse = await instance.orders.create(options);
        console.log(paymentResponse);

        return res.status(200).json({
            success : true,
            course_name : course.course_name,
            course_description : course.course_description,
            thumbnail : course.thumbnail,
            order_id : paymentResponse.id,
            currency : paymentResponse.currency,
            ammount : paymentResponse.amount
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Error occured while creating payment order",
            error : error.message
        });
    }
}

exports.verifySignature = async (req, res) =>{
    const webhookSecret = '12345678';

    const signature = req.header["x-razorpay-signature"];

    const shasum = crypto.createHmac("sha256", webhookSecret);
    shasum.update(JSON.stringify(req.body));

    const digest = shasum.digest("hex");

    if(signature === digest){
        console.log('Payment is Authorised');

        const {course_id, user_id} = req.body.payload.payment.entity.notes;

        try{
            const enrolledCourse = await Course.findOneAndUpdate(
                {_id : course_id},
                {$push : {students_enrolled : user_id}},
                {new : true}
            );

            if(!enrolledCourse){
                return res.status(500).json({
                    success : false,
                    message : "Course not found"
                });
            }

            console.log(enrolledCourse);

            const enrolledStudent = await User.findOneAndUpdate(
                {_id:user_id},
                {$push : {courses : course_id}}
            );

            console.log(enrolledStudent);

            const emailResponse = await mailSender(
                enrolledStudent.email,
                "Congratulations from BrainScript",
                "Congratulations, you are onboarded into a new BrainScript Course",
            );

            console.log(emailResponse);

            return res.status(200).json({
                success : true,
                message : "Signature verified and course added"
            });

        }catch(error){

            console.log(error);
            return res.status(500).json({
                success : false,
                message : error.message
            });

        }
    }else{
        return res.status(400).json({
            success : false,
            message : "Invalid request"
        })
    }
}