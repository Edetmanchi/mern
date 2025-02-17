import asyncHandler from 'express-async-handler'
// import User from '../models/userModel.js'


// @desc Auth user/set token
// route POST/ api/user/auth
// access public
const authUser = asyncHandler(async (req, res)=>{
    // res.status(401);
    // throw new Error('Something went wrong')   
    res.status(200).json({message: 'Authenticate user'})
})


// @desc Register Users 
// route POST/ api/users
// access public
const registerUser = asyncHandler(async (req, res)=>{
    // const {name, email, password} = req.body;

    // from database model
    // const userExists = await User.findOne({email})
    // if (userExists){
    //     res.status(400)
    //     throw new Error('User alrealdy exist')
    // }
    // const user = await User.create({
    //     name,
    //     email,
    //     password,
    // })

    // // when user has been successfully created
    // if(user){
    //     res.status(201).json({
    //         _id: user._id,
    //         name: user.name,
    //         email: user.email,

    //     })

    // }else{
    //     res.status(400)
    //     throw new Error('invalid user data')
    // }
    // used only for test purpose 
    // res.status(200).json({message: 'Register User'})
})

// @desc Logout users
// route POST/ api/users/logout
// access public
const logoutUser = asyncHandler(async (req, res)=>{
    res.status(200).json({message: 'Logout user'})
})


// @desc Get users Profile
// route GET/ api/users/profile
// access private
const getUserProfile = asyncHandler(async (req, res)=>{
    res.status(200).json({message: 'User Profile'})
})





// @desc Undate User profile
// route PUT/ api/users/profile
// access private
const updateUserProfile = asyncHandler(async (req, res)=>{
    res.status(200).json({message: 'Update User profile'})
})

export{
    authUser,
    registerUser, 
    logoutUser, 
    getUserProfile, 
    updateUserProfile
}