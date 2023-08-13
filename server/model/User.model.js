const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const { Schema } = mongoose;
const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "User name is required"],
        trim: true,
        minLength: [5, 'Name must be at least 5 characters'],
        maxLength: [50, 'Name must be less than 50char']
    },
    email: {
        type: String,
        required: [true, "User email is required"],
        unique: [true, "already registered"],
        lowercase: true
    },
    password: {
        type:String,
        required: true,
        select: false
    },
    bio:{
        type:String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique:[true,"Username already exists!"]
    }
});

userSchema.methods = {
    jwtToken() {
        return JWT.sign({
            id:this._id,
            username:this.username},
            process.env.SECRET,
            {expiresIn: '24h'}
        )
    }
}

userSchema.pre("save", async function(next) {
    if(!this.isModified('password'))
    return next();
    this.password = await bcrypt.hash(this.password, 12);
    return next();
})



const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };