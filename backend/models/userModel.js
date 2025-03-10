import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required : true,
    },
    email: {
        type: String,
        required : true,
        unique: true
    },
    password: {
        type: String,
        required : true,
    }
},
    {
        timestamps: true
    }
)

// middleware and Regex function to hash the password
userSchema.pre('save', async function (next){
    // if password has not ben modified or changed in anyway
    if(!this.isModified('password')){
        next()
    }
    else{
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt)
    }
})


// checking for passord match for tjhe auth and register routes
userSchema.methods.matchPassword = async function (enterPassword){
    return await bcrypt.compare(enterPassword, this.password)
}

const User = mongoose.model('User', userSchema)

export default User