import asyncHandler from 'express-async-handler'


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
    res.status(200).json({message: 'Register User'})
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