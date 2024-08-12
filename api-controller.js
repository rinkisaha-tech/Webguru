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
                catch (err) {
                res.send({
                    "message": "Error",
                    data: err
                })
            }
        })
    }
}
}
    module.exports = new apiController();