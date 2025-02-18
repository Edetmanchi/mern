import jwt from "jsonwebtoken";

const generateToken = (res, userId)=>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '20d',    
    })
    // saving the token in a cookie
    res.cookie('res', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development'
    })

}