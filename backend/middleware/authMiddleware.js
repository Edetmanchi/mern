import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel'








const protectRoute= asyncHandler( async(req, res, next)=>{
    let token = req.cookie.jwt;

    if(token){
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            
            // req to get the payload from the route it will be used (logged in user)
            req.user = await User.findById(decoded.userId).select('-password');
            next()
        } catch (error) {
            res.status(401);
            throw new Error('Not authorised, Invalid Token')
        }

    }else {
        res.status(401)
        throw new Error('Not authorised, No token')
    }
})

export default protectRoute