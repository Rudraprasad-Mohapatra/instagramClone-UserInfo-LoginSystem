const JWT = require("jsonwebtoken");
const authenticateUser = async (req, res, next) => {
    const token = req.cookies?.token || null;

    if (!token)
    return res.status(404).send({
        success:false,
        msg: "User authentication failed",
        token: req.cookies
    });

    try {
        const payload = JWT.verify(token, process.env.SECRET);
        req.user = {
            id: payload.id,
            username: payload.username
        };
        next();
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: err.message
        })
    }
}

module.exports = authenticateUser;