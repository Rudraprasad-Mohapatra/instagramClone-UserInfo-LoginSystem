const { UserModel } = require("../model/User.model.js");
const bcrypt = require("bcryptjs");
const userSignUp = async (req, res) => {
    try {
        const newUser = UserModel(req.body);
        const result = await newUser.save();
        res.status(200).send({
            msg: "Signup Success",
            User: result
        })
    } catch (err) {
        res.status(501).send({
            msg: err.message
        })
    }
}

const userLogin = async (req, res) => {
    const { username, password } = req.body;
    try{
        const getUserData = await UserModel.findOne({username}).select("+password");
        if(getUserData && getUserData.username){
            const result = await bcrypt.compare(password, getUserData.password);
            if(result){

                const token = await getUserData.jwtToken();
                const cookieOption = {
                    maxAge: 24*60*60*1000,
                    httpOnly:true
                };
                res.cookie("token",token,cookieOption);
                res.status(200).json({
                    success:true,
                    data:getUserData
                })
            }else{
                res.status(404).json({
                    success:false,
                    msg:"Password is in correct, Try Again!"
                })
            }
        }else{
            res.status(404).json({
                success:false,
                msg:"No Account Found Associated with this username"
            })
        }
    } catch(err) {
        res.status(501).json({
            msg:err.message
        })
    }
}

const getUserDetails = async (req, res) => {
    const {id, username} = req.user;
    console.log(id,username);
    try{
        const userData = await UserModel.findOne({username});
        res.status(200).json({
            msg:"Success",
            data:userData
        })
    }catch(err) {
        res.status(501).send({ 
            success:false,
            msg:err.message
        });
    }
} 

module.exports = {
    userSignUp,
    userLogin,
    getUserDetails
}