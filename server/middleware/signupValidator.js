const signupValidator = async (req, res, next) => {
    const {
        name,
        email,
        password,
        bio,
        username
    } = req.body;

if(req.body && name && email && password && bio && username) {
    next();
}else{
    res.status(404).send({
        msg:"All input fields are required!"
    });
}
}
module.exports = signupValidator;