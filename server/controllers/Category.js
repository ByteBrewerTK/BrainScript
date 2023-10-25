const Category = require('../models/Category');

exports.createCategory = async (req, res) => {
    try{

        const {name, description} = req.body;

        if(!name || !description){
            return res.status(403).json({
                success : false,
                message : "All fields required",
            });
        }

        const newCategory = await Category.create({
            name,
            description
        });
        
        res.status(200).json({
            success : true,
            message : "Category successfully created",
            data : newCategory,
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Error occured at the time of creating Category",
            error : error.message
        });
    }
}

exports.getAllCategory = async (req, res) =>{
    try{

        const allCategory = await Category.find({}, {name:true, description : true});

        res.status(200).json({
            success : true,
            data : allCategory
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Error occured at the time of fetching all Category",
            error : error.message
        });
    }
}

exports.categoryPageDetails = async (req, res) => {
    try{

        const {category_id} = req.body;

        const selectedCategory = await Category.findById(category_id)
                                                        .populate("courses")
                                                        .exec();

        if(!selectedCategory){
            return res.status(404).json({
                success : false,
                message : "Data not found"
            });
        }

        const differentCategories = await Category.find({
            _id : {$ne : category_id}
        })
        .populate("courses")
        .exec();

        return res.status(200).json({
            success : true,
            data : {
                selectedCategory,
                di
            }
        });

    }catch(error){
        console.log(error);

        return res.status(500).json({
            success : false,
            message : "Error occured while fetching category page details",
            error : error.message
        });
    }
}