const jwt = require('jsonwebtoken');
require('dotenv').config();

// Authorization verification
exports.auth = async (req, res, next) => {

    try{
        const token = req.cookies.token
                || req.body.token
                || req.header("Authorisation").replace('Bearer', '');

        // Check, token is found or not
        if(!token){
            // If token is missing
            res.status(401).json({
                success : false,
                message : "Token Missing"
            });
        }

        // verifying JWT
        try{

            const decode = await jwt.verify(token, process.env.JWT_SECRET);
            
            console.log(decode);
            req.user = decode;

        }catch(error){
            // JWT verification issue
            return res.status(401).json({
                success : false,
                message : "Token is invalid"
            });
        }
        next();
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Something went wrong while validating token"
        });
    }

}

// Student account verification
exports.isStudent = async (req, res, next) => {
    try{
        if(req.user.account_type !== "Student"){
            // If account type is not student

            return res.status(401).json({
                success : false, 
                message : "This is protected route for Student"
            })
        }
        next();
    }catch(error){
        console.log(error);

        return res.status(500).json({
            success : false,
            message : "Error occured white verifying student role"
        });
    }
}

// Instructor account verification
exports.isInstructor = async (req, res, next) => {
    try{
        if(req.user.account_type !== "Instructor"){
            // If account type is not student

            return res.status(401).json({
                success : false, 
                message : "This is protected route for Instructor"
            })
        }
        next();
    }catch(error){
        console.log(error);

        return res.status(500).json({
            success : false,
            message : "Error occured white verifying instructor role"
        });
    }
}

// Admin account verification
exports.isAdmin = async (req, res, next) => {
    try{
        if(req.user.account_type !== "Admin"){
            // If account type is not Admin

            return res.status(401).json({
                success : false, 
                message : "This is protected route for Admin"
            })
        }
        next();
    }catch(error){
        console.log(error);

        return res.status(500).json({
            success : false,
            message : "Error occured white verifying admin role"
        });
    }
}