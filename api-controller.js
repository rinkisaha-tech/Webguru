const userModel= require('../model/user-model');
class apiController {
    getUser = async (req, res) => {
        try {
            let userData = await userModel.find({ "active_status": true, delete_status: false });
            let userSingleData = await userModel.findOne();
            console.log(userSingleData, 'userSingleData')

            res.send({
                "message": "Data fetched successfully",
                data: userData
            })
        }
        catch (err) {
            res.send({
                "message": "Error",
                data: err
            })
        }

    }

addUser = async (req, res) => {
        try {
            console.log(req.body,'req.body')
            let User = new userModel();
            req.body.password = User.generateHash(req.body.password);
            
            let userData = new userModel(req.body);
            let saveData = await userData.save();

            res.send({
                "message": "Data added successfully",
                "data": saveData
            })
        } catch (err) {
            res.send({
                 "message": "Error",
                    data: err
                })
            }
        
    }


    getSingleData = async (req, res) => {
        try {
            // console.log(req.params.id,'==req.params==')
            let userSingleData = await userModel.findOne({_id:req.params.id});

            res.send({
                "message": "Data added successfully",
                "data": userSingleData
            })
        } catch (err) {
            res.send({
                "message": "Error",
                data: err
            })
        }
    }
    updateUser = async (req, res) => {
        try {
            let reqData = {
                name: req.body.name,
                phone: req.body.phone,
                email: req.body.email
            };

            let updateData = await userModel.findByIdAndUpdate(req.body.id, reqData);
            let userSingleData = await userModel.findOne({ _id: req.body.id });

            res.send({
                "message": "Data added successfully",
                "data": userSingleData
            })

        } catch (err){
            res.send({
                "message": "Error",
                data: err
            })
        }
    }
    deleteUser = async (req, res) => {
        try {
            let userSingleData = await userModel.findByIdAndDelete({ _id:req.params.id });

            res.send({
                "message": "Deleted successfully",
                "data": userSingleData
            })

        } catch (err){
            res.send({
                "message": "Error",
                data: err
            })
        }
    }
}
    module.exports = new apiController();