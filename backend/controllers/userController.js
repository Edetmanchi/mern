import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import destroyCookie from '../utils/destroyCookie.js'


// @desc Auth user/set token
// route POST/ api/user/auth
// access public
const authUser = asyncHandler(async (req, res)=>{
    const {email, password} = req.body  
    const user = await  User.findOne({email})

    // add the match password logic written in the method file  to also check for the password rather than just the user (email)
    if(user && (await user.matchPassword(password))){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash  
        })

    }else{
        res.status(400)
        throw new Error('Invalid email or Password')
    }

    res.status(200).json({message: 'Authenticate user'})
})



// @desc Register Users 
// route POST/ api/users
// access public
const registerUser = asyncHandler(async (req, res)=>{
    const {name, email, password} = req.body;

    // from database model to chck if user exist  
    const userExists = await User.findOne({email})
    if (userExists){
        res.status(400)
        throw new Error('User alrealdy exist')
    }
    const user = await User.create({
        name,
        email,
        password,
    })

    // when user has been successfully created
    if(user){
        // generate token and store in http only cokkie before precedding 
        generateToken(res, user._Id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash

        })

    }else{
        res.status(400)
        throw new Error('invalid user data')
    }
    // used only for test purpose 
    // res.status(200).json({message: 'Register User'})
})





// @desc Logout users
// route POST/ api/users/logout
// access public
const logoutUser = asyncHandler(async (req, res)=>{
   destroyCookie(res)
    res.status(200).json({message: 'User Logged out'})
})






// @desc Get users Profile
// route GET/ api/users/profile
// access private
const getUserProfile = asyncHandler(async (req, res)=>{
    const {email, password} = req.body 
    // const user = await User.findOne({email})
    user = {
        _id:req.User._id,
        name: req.user.name,
        email: req.user.email
    }
    console.log(req.user)
    res.status(200).json(req.user)
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















































import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import destroyCookie from '../utils/destroyCookie.js'


// @desc Auth user/set token
// route POST/ api/user/auth
// access public
const authUser = asyncHandler(async (req, res)=>{
    const {email, password} = req.body  
    const user = await  User.findOne({email})

    // add the match password logic written in the method file  to also check for the password rather than just the user (email)
    if(user && (await user.matchPassword(password))){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash  
        })

    }else{
        res.status(400)
        throw new Error('Invalid email or Password')
    }

    res.status(200).json({message: 'Authenticate user'})
})



// @desc Register Users 
// route POST/ api/users
// access public
const registerUser = asyncHandler(async (req, res)=>{
    const {name, email, password} = req.body;

    // from database model to chck if user exist  
    const userExists = await User.findOne({email})
    if (userExists){
        res.status(400)
        throw new Error('User alrealdy exist')
    }
    const user = await User.create({
        name,
        email,
        password,
    })

    // when user has been successfully created
    if(user){
        // generate token and store in http only cokkie before precedding 
        generateToken(res, user._Id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash

        })

    }else{
        res.status(400)
        throw new Error('invalid user data')
    }
    // used only for test purpose 
    // res.status(200).json({message: 'Register User'})
})





// @desc Logout users
// route POST/ api/users/logout
// access public
const logoutUser = asyncHandler(async (req, res)=>{
   destroyCookie(res)
    res.status(200).json({message: 'User Logged out'})
})






// @desc Get users Profile
// route GET/ api/users/profile
// access private
const getUserProfile = asyncHandler(async (req, res)=>{
    const {email, password} = req.body 
    // const user = await User.findOne({email})
    user = {
        _id:req.User._id,
        name: req.user.name,
        email: req.user.email
    }
    console.log(req.user)
    res.status(200).json(req.user)
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


















import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import destroyCookie from '../utils/destroyCookie.js'


// @desc Auth user/set token
// route POST/ api/user/auth
// access public
const authUser = asyncHandler(async (req, res)=>{
    const {email, password} = req.body  
    const user = await  User.findOne({email})

    // add the match password logic written in the method file  to also check for the password rather than just the user (email)
    if(user && (await user.matchPassword(password))){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash  
        })

    }else{
        res.status(400)
        throw new Error('Invalid email or Password')
    }

    res.status(200).json({message: 'Authenticate user'})
})



// @desc Register Users 
// route POST/ api/users
// access public
const registerUser = asyncHandler(async (req, res)=>{
    const {name, email, password} = req.body;

    // from database model to chck if user exist  
    const userExists = await User.findOne({email})
    if (userExists){
        res.status(400)
        throw new Error('User alrealdy exist')
    }
    const user = await User.create({
        name,
        email,
        password,
    })

    // when user has been successfully created
    if(user){
        // generate token and store in http only cokkie before precedding 
        generateToken(res, user._Id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash

        })

    }else{
        res.status(400)
        throw new Error('invalid user data')
    }
    // used only for test purpose 
    // res.status(200).json({message: 'Register User'})
})





// @desc Logout users
// route POST/ api/users/logout
// access public
const logoutUser = asyncHandler(async (req, res)=>{
   destroyCookie(res)
    res.status(200).json({message: 'User Logged out'})
})






// @desc Get users Profile
// route GET/ api/users/profile
// access private
const getUserProfile = asyncHandler(async (req, res)=>{
    const {email, password} = req.body 
    // const user = await User.findOne({email})
    user = {
        _id:req.User._id,
        name: req.user.name,
        email: req.user.email
    }
    console.log(req.user)
    res.status(200).json(req.user)
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


















import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import destroyCookie from '../utils/destroyCookie.js'


// @desc Auth user/set token
// route POST/ api/user/auth
// access public
const authUser = asyncHandler(async (req, res)=>{
    const {email, password} = req.body  
    const user = await  User.findOne({email})

    // add the match password logic written in the method file  to also check for the password rather than just the user (email)
    if(user && (await user.matchPassword(password))){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash  
        })

    }else{
        res.status(400)
        throw new Error('Invalid email or Password')
    }

    res.status(200).json({message: 'Authenticate user'})
})



// @desc Register Users 
// route POST/ api/users
// access public
const registerUser = asyncHandler(async (req, res)=>{
    const {name, email, password} = req.body;

    // from database model to chck if user exist  
    const userExists = await User.findOne({email})
    if (userExists){
        res.status(400)
        throw new Error('User alrealdy exist')
    }
    const user = await User.create({
        name,
        email,
        password,
    })

    // when user has been successfully created
    if(user){
        // generate token and store in http only cokkie before precedding 
        generateToken(res, user._Id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash

        })

    }else{
        res.status(400)
        throw new Error('invalid user data')
    }
    // used only for test purpose 
    // res.status(200).json({message: 'Register User'})
})





// @desc Logout users
// route POST/ api/users/logout
// access public
const logoutUser = asyncHandler(async (req, res)=>{
   destroyCookie(res)
    res.status(200).json({message: 'User Logged out'})
})






// @desc Get users Profile
// route GET/ api/users/profile
// access private
const getUserProfile = asyncHandler(async (req, res)=>{
    const {email, password} = req.body 
    // const user = await User.findOne({email})
    user = {
        _id:req.User._id,
        name: req.user.name,
        email: req.user.email
    }
    console.log(req.user)
    res.status(200).json(req.user)
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


















import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import destroyCookie from '../utils/destroyCookie.js'


// @desc Auth user/set token
// route POST/ api/user/auth
// access public
const authUser = asyncHandler(async (req, res)=>{
    const {email, password} = req.body  
    const user = await  User.findOne({email})

    // add the match password logic written in the method file  to also check for the password rather than just the user (email)
    if(user && (await user.matchPassword(password))){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash  
        })

    }else{
        res.status(400)
        throw new Error('Invalid email or Password')
    }

    res.status(200).json({message: 'Authenticate user'})
})



// @desc Register Users 
// route POST/ api/users
// access public
const registerUser = asyncHandler(async (req, res)=>{
    const {name, email, password} = req.body;

    // from database model to chck if user exist  
    const userExists = await User.findOne({email})
    if (userExists){
        res.status(400)
        throw new Error('User alrealdy exist')
    }
    const user = await User.create({
        name,
        email,
        password,
    })

    // when user has been successfully created
    if(user){
        // generate token and store in http only cokkie before precedding 
        generateToken(res, user._Id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash

        })

    }else{
        res.status(400)
        throw new Error('invalid user data')
    }
    // used only for test purpose 
    // res.status(200).json({message: 'Register User'})
})





// @desc Logout users
// route POST/ api/users/logout
// access public
const logoutUser = asyncHandler(async (req, res)=>{
   destroyCookie(res)
    res.status(200).json({message: 'User Logged out'})
})






// @desc Get users Profile
// route GET/ api/users/profile
// access private
const getUserProfile = asyncHandler(async (req, res)=>{
    const {email, password} = req.body 
    // const user = await User.findOne({email})
    user = {
        _id:req.User._id,
        name: req.user.name,
        email: req.user.email
    }
    console.log(req.user)
    res.status(200).json(req.user)
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


















import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import destroyCookie from '../utils/destroyCookie.js'


// @desc Auth user/set token
// route POST/ api/user/auth
// access public
const authUser = asyncHandler(async (req, res)=>{
    const {email, password} = req.body  
    const user = await  User.findOne({email})

    // add the match password logic written in the method file  to also check for the password rather than just the user (email)
    if(user && (await user.matchPassword(password))){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash  
        })

    }else{
        res.status(400)
        throw new Error('Invalid email or Password')
    }

    res.status(200).json({message: 'Authenticate user'})
})



// @desc Register Users 
// route POST/ api/users
// access public
const registerUser = asyncHandler(async (req, res)=>{
    const {name, email, password} = req.body;

    // from database model to chck if user exist  
    const userExists = await User.findOne({email})
    if (userExists){
        res.status(400)
        throw new Error('User alrealdy exist')
    }
    const user = await User.create({
        name,
        email,
        password,
    })

    // when user has been successfully created
    if(user){
        // generate token and store in http only cokkie before precedding 
        generateToken(res, user._Id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash

        })

    }else{
        res.status(400)
        throw new Error('invalid user data')
    }
    // used only for test purpose 
    // res.status(200).json({message: 'Register User'})
})





// @desc Logout users
// route POST/ api/users/logout
// access public
const logoutUser = asyncHandler(async (req, res)=>{
   destroyCookie(res)
    res.status(200).json({message: 'User Logged out'})
})






// @desc Get users Profile
// route GET/ api/users/profile
// access private
const getUserProfile = asyncHandler(async (req, res)=>{
    const {email, password} = req.body 
    // const user = await User.findOne({email})
    user = {
        _id:req.User._id,
        name: req.user.name,
        email: req.user.email
    }
    console.log(req.user)
    res.status(200).json(req.user)
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


















import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import destroyCookie from '../utils/destroyCookie.js'


// @desc Auth user/set token
// route POST/ api/user/auth
// access public
const authUser = asyncHandler(async (req, res)=>{
    const {email, password} = req.body  
    const user = await  User.findOne({email})

    // add the match password logic written in the method file  to also check for the password rather than just the user (email)
    if(user && (await user.matchPassword(password))){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash  
        })

    }else{
        res.status(400)
        throw new Error('Invalid email or Password')
    }

    res.status(200).json({message: 'Authenticate user'})
})



// @desc Register Users 
// route POST/ api/users
// access public
const registerUser = asyncHandler(async (req, res)=>{
    const {name, email, password} = req.body;

    // from database model to chck if user exist  
    const userExists = await User.findOne({email})
    if (userExists){
        res.status(400)
        throw new Error('User alrealdy exist')
    }
    const user = await User.create({
        name,
        email,
        password,
    })

    // when user has been successfully created
    if(user){
        // generate token and store in http only cokkie before precedding 
        generateToken(res, user._Id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash

        })

    }else{
        res.status(400)
        throw new Error('invalid user data')
    }
    // used only for test purpose 
    // res.status(200).json({message: 'Register User'})
})





// @desc Logout users
// route POST/ api/users/logout
// access public
const logoutUser = asyncHandler(async (req, res)=>{
   destroyCookie(res)
    res.status(200).json({message: 'User Logged out'})
})






// @desc Get users Profile
// route GET/ api/users/profile
// access private
const getUserProfile = asyncHandler(async (req, res)=>{
    const {email, password} = req.body 
    // const user = await User.findOne({email})
    user = {
        _id:req.User._id,
        name: req.user.name,
        email: req.user.email
    }
    console.log(req.user)
    res.status(200).json(req.user)
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


















import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import destroyCookie from '../utils/destroyCookie.js'


// @desc Auth user/set token
// route POST/ api/user/auth
// access public
const authUser = asyncHandler(async (req, res)=>{
    const {email, password} = req.body  
    const user = await  User.findOne({email})

    // add the match password logic written in the method file  to also check for the password rather than just the user (email)
    if(user && (await user.matchPassword(password))){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash  
        })

    }else{
        res.status(400)
        throw new Error('Invalid email or Password')
    }

    res.status(200).json({message: 'Authenticate user'})
})



// @desc Register Users 
// route POST/ api/users
// access public
const registerUser = asyncHandler(async (req, res)=>{
    const {name, email, password} = req.body;

    // from database model to chck if user exist  
    const userExists = await User.findOne({email})
    if (userExists){
        res.status(400)
        throw new Error('User alrealdy exist')
    }
    const user = await User.create({
        name,
        email,
        password,
    })

    // when user has been successfully created
    if(user){
        // generate token and store in http only cokkie before precedding 
        generateToken(res, user._Id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash

        })

    }else{
        res.status(400)
        throw new Error('invalid user data')
    }
    // used only for test purpose 
    // res.status(200).json({message: 'Register User'})
})





// @desc Logout users
// route POST/ api/users/logout
// access public
const logoutUser = asyncHandler(async (req, res)=>{
   destroyCookie(res)
    res.status(200).json({message: 'User Logged out'})
})






// @desc Get users Profile
// route GET/ api/users/profile
// access private
const getUserProfile = asyncHandler(async (req, res)=>{
    const {email, password} = req.body 
    // const user = await User.findOne({email})
    user = {
        _id:req.User._id,
        name: req.user.name,
        email: req.user.email
    }
    console.log(req.user)
    res.status(200).json(req.user)
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


















import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import destroyCookie from '../utils/destroyCookie.js'


// @desc Auth user/set token
// route POST/ api/user/auth
// access public
const authUser = asyncHandler(async (req, res)=>{
    const {email, password} = req.body  
    const user = await  User.findOne({email})

    // add the match password logic written in the method file  to also check for the password rather than just the user (email)
    if(user && (await user.matchPassword(password))){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash  
        })

    }else{
        res.status(400)
        throw new Error('Invalid email or Password')
    }

    res.status(200).json({message: 'Authenticate user'})
})



// @desc Register Users 
// route POST/ api/users
// access public
const registerUser = asyncHandler(async (req, res)=>{
    const {name, email, password} = req.body;

    // from database model to chck if user exist  
    const userExists = await User.findOne({email})
    if (userExists){
        res.status(400)
        throw new Error('User alrealdy exist')
    }
    const user = await User.create({
        name,
        email,
        password,
    })

    // when user has been successfully created
    if(user){
        // generate token and store in http only cokkie before precedding 
        generateToken(res, user._Id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash

        })

    }else{
        res.status(400)
        throw new Error('invalid user data')
    }
    // used only for test purpose 
    // res.status(200).json({message: 'Register User'})
})





// @desc Logout users
// route POST/ api/users/logout
// access public
const logoutUser = asyncHandler(async (req, res)=>{
   destroyCookie(res)
    res.status(200).json({message: 'User Logged out'})
})






// @desc Get users Profile
// route GET/ api/users/profile
// access private
const getUserProfile = asyncHandler(async (req, res)=>{
    const {email, password} = req.body 
    // const user = await User.findOne({email})
    user = {
        _id:req.User._id,
        name: req.user.name,
        email: req.user.email
    }
    console.log(req.user)
    res.status(200).json(req.user)
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


















import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import destroyCookie from '../utils/destroyCookie.js'


// @desc Auth user/set token
// route POST/ api/user/auth
// access public
const authUser = asyncHandler(async (req, res)=>{
    const {email, password} = req.body  
    const user = await  User.findOne({email})

    // add the match password logic written in the method file  to also check for the password rather than just the user (email)
    if(user && (await user.matchPassword(password))){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash  
        })

    }else{
        res.status(400)
        throw new Error('Invalid email or Password')
    }

    res.status(200).json({message: 'Authenticate user'})
})



// @desc Register Users 
// route POST/ api/users
// access public
const registerUser = asyncHandler(async (req, res)=>{
    const {name, email, password} = req.body;

    // from database model to chck if user exist  
    const userExists = await User.findOne({email})
    if (userExists){
        res.status(400)
        throw new Error('User alrealdy exist')
    }
    const user = await User.create({
        name,
        email,
        password,
    })

    // when user has been successfully created
    if(user){
        // generate token and store in http only cokkie before precedding 
        generateToken(res, user._Id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash

        })

    }else{
        res.status(400)
        throw new Error('invalid user data')
    }
    // used only for test purpose 
    // res.status(200).json({message: 'Register User'})
})





// @desc Logout users
// route POST/ api/users/logout
// access public
const logoutUser = asyncHandler(async (req, res)=>{
   destroyCookie(res)
    res.status(200).json({message: 'User Logged out'})
})






// @desc Get users Profile
// route GET/ api/users/profile
// access private
const getUserProfile = asyncHandler(async (req, res)=>{
    const {email, password} = req.body 
    // const user = await User.findOne({email})
    user = {
        _id:req.User._id,
        name: req.user.name,
        email: req.user.email
    }
    console.log(req.user)
    res.status(200).json(req.user)
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


















import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import destroyCookie from '../utils/destroyCookie.js'


// @desc Auth user/set token
// route POST/ api/user/auth
// access public
const authUser = asyncHandler(async (req, res)=>{
    const {email, password} = req.body  
    const user = await  User.findOne({email})

    // add the match password logic written in the method file  to also check for the password rather than just the user (email)
    if(user && (await user.matchPassword(password))){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash  
        })

    }else{
        res.status(400)
        throw new Error('Invalid email or Password')
    }

    res.status(200).json({message: 'Authenticate user'})
})



// @desc Register Users 
// route POST/ api/users
// access public
const registerUser = asyncHandler(async (req, res)=>{
    const {name, email, password} = req.body;

    // from database model to chck if user exist  
    const userExists = await User.findOne({email})
    if (userExists){
        res.status(400)
        throw new Error('User alrealdy exist')
    }
    const user = await User.create({
        name,
        email,
        password,
    })

    // when user has been successfully created
    if(user){
        // generate token and store in http only cokkie before precedding 
        generateToken(res, user._Id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash

        })

    }else{
        res.status(400)
        throw new Error('invalid user data')
    }
    // used only for test purpose 
    // res.status(200).json({message: 'Register User'})
})





// @desc Logout users
// route POST/ api/users/logout
// access public
const logoutUser = asyncHandler(async (req, res)=>{
   destroyCookie(res)
    res.status(200).json({message: 'User Logged out'})
})






// @desc Get users Profile
// route GET/ api/users/profile
// access private
const getUserProfile = asyncHandler(async (req, res)=>{
    const {email, password} = req.body 
    // const user = await User.findOne({email})
    user = {
        _id:req.User._id,
        name: req.user.name,
        email: req.user.email
    }
    console.log(req.user)
    res.status(200).json(req.user)
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


















import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import destroyCookie from '../utils/destroyCookie.js'


// @desc Auth user/set token
// route POST/ api/user/auth
// access public
const authUser = asyncHandler(async (req, res)=>{
    const {email, password} = req.body  
    const user = await  User.findOne({email})

    // add the match password logic written in the method file  to also check for the password rather than just the user (email)
    if(user && (await user.matchPassword(password))){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash  
        })

    }else{
        res.status(400)
        throw new Error('Invalid email or Password')
    }

    res.status(200).json({message: 'Authenticate user'})
})



// @desc Register Users 
// route POST/ api/users
// access public
const registerUser = asyncHandler(async (req, res)=>{
    const {name, email, password} = req.body;

    // from database model to chck if user exist  
    const userExists = await User.findOne({email})
    if (userExists){
        res.status(400)
        throw new Error('User alrealdy exist')
    }
    const user = await User.create({
        name,
        email,
        password,
    })

    // when user has been successfully created
    if(user){
        // generate token and store in http only cokkie before precedding 
        generateToken(res, user._Id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash

        })

    }else{
        res.status(400)
        throw new Error('invalid user data')
    }
    // used only for test purpose 
    // res.status(200).json({message: 'Register User'})
})





// @desc Logout users
// route POST/ api/users/logout
// access public
const logoutUser = asyncHandler(async (req, res)=>{
   destroyCookie(res)
    res.status(200).json({message: 'User Logged out'})
})






// @desc Get users Profile
// route GET/ api/users/profile
// access private
const getUserProfile = asyncHandler(async (req, res)=>{
    const {email, password} = req.body 
    // const user = await User.findOne({email})
    user = {
        _id:req.User._id,
        name: req.user.name,
        email: req.user.email
    }
    console.log(req.user)
    res.status(200).json(req.user)
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


















import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import destroyCookie from '../utils/destroyCookie.js'


// @desc Auth user/set token
// route POST/ api/user/auth
// access public
const authUser = asyncHandler(async (req, res)=>{
    const {email, password} = req.body  
    const user = await  User.findOne({email})

    // add the match password logic written in the method file  to also check for the password rather than just the user (email)
    if(user && (await user.matchPassword(password))){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash  
        })

    }else{
        res.status(400)
        throw new Error('Invalid email or Password')
    }

    res.status(200).json({message: 'Authenticate user'})
})



// @desc Register Users 
// route POST/ api/users
// access public
const registerUser = asyncHandler(async (req, res)=>{
    const {name, email, password} = req.body;

    // from database model to chck if user exist  
    const userExists = await User.findOne({email})
    if (userExists){
        res.status(400)
        throw new Error('User alrealdy exist')
    }
    const user = await User.create({
        name,
        email,
        password,
    })

    // when user has been successfully created
    if(user){
        // generate token and store in http only cokkie before precedding 
        generateToken(res, user._Id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash

        })

    }else{
        res.status(400)
        throw new Error('invalid user data')
    }
    // used only for test purpose 
    // res.status(200).json({message: 'Register User'})
})





// @desc Logout users
// route POST/ api/users/logout
// access public
const logoutUser = asyncHandler(async (req, res)=>{
   destroyCookie(res)
    res.status(200).json({message: 'User Logged out'})
})






// @desc Get users Profile
// route GET/ api/users/profile
// access private
const getUserProfile = asyncHandler(async (req, res)=>{
    const {email, password} = req.body 
    // const user = await User.findOne({email})
    user = {
        _id:req.User._id,
        name: req.user.name,
        email: req.user.email
    }
    console.log(req.user)
    res.status(200).json(req.user)
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


















import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import destroyCookie from '../utils/destroyCookie.js'


// @desc Auth user/set token
// route POST/ api/user/auth
// access public
const authUser = asyncHandler(async (req, res)=>{
    const {email, password} = req.body  
    const user = await  User.findOne({email})

    // add the match password logic written in the method file  to also check for the password rather than just the user (email)
    if(user && (await user.matchPassword(password))){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash  
        })

    }else{
        res.status(400)
        throw new Error('Invalid email or Password')
    }

    res.status(200).json({message: 'Authenticate user'})
})



// @desc Register Users 
// route POST/ api/users
// access public
const registerUser = asyncHandler(async (req, res)=>{
    const {name, email, password} = req.body;

    // from database model to chck if user exist  
    const userExists = await User.findOne({email})
    if (userExists){
        res.status(400)
        throw new Error('User alrealdy exist')
    }
    const user = await User.create({
        name,
        email,
        password,
    })

    // when user has been successfully created
    if(user){
        // generate token and store in http only cokkie before precedding 
        generateToken(res, user._Id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash

        })

    }else{
        res.status(400)
        throw new Error('invalid user data')
    }
    // used only for test purpose 
    // res.status(200).json({message: 'Register User'})
})





// @desc Logout users
// route POST/ api/users/logout
// access public
const logoutUser = asyncHandler(async (req, res)=>{
   destroyCookie(res)
    res.status(200).json({message: 'User Logged out'})
})






// @desc Get users Profile
// route GET/ api/users/profile
// access private
const getUserProfile = asyncHandler(async (req, res)=>{
    const {email, password} = req.body 
    // const user = await User.findOne({email})
    user = {
        _id:req.User._id,
        name: req.user.name,
        email: req.user.email
    }
    console.log(req.user)
    res.status(200).json(req.user)
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


















import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import destroyCookie from '../utils/destroyCookie.js'


// @desc Auth user/set token
// route POST/ api/user/auth
// access public
const authUser = asyncHandler(async (req, res)=>{
    const {email, password} = req.body  
    const user = await  User.findOne({email})

    // add the match password logic written in the method file  to also check for the password rather than just the user (email)
    if(user && (await user.matchPassword(password))){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash  
        })

    }else{
        res.status(400)
        throw new Error('Invalid email or Password')
    }

    res.status(200).json({message: 'Authenticate user'})
})



// @desc Register Users 
// route POST/ api/users
// access public
const registerUser = asyncHandler(async (req, res)=>{
    const {name, email, password} = req.body;

    // from database model to chck if user exist  
    const userExists = await User.findOne({email})
    if (userExists){
        res.status(400)
        throw new Error('User alrealdy exist')
    }
    const user = await User.create({
        name,
        email,
        password,
    })

    // when user has been successfully created
    if(user){
        // generate token and store in http only cokkie before precedding 
        generateToken(res, user._Id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash

        })

    }else{
        res.status(400)
        throw new Error('invalid user data')
    }
    // used only for test purpose 
    // res.status(200).json({message: 'Register User'})
})





// @desc Logout users
// route POST/ api/users/logout
// access public
const logoutUser = asyncHandler(async (req, res)=>{
   destroyCookie(res)
    res.status(200).json({message: 'User Logged out'})
})






// @desc Get users Profile
// route GET/ api/users/profile
// access private
const getUserProfile = asyncHandler(async (req, res)=>{
    const {email, password} = req.body 
    // const user = await User.findOne({email})
    user = {
        _id:req.User._id,
        name: req.user.name,
        email: req.user.email
    }
    console.log(req.user)
    res.status(200).json(req.user)
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


















import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import destroyCookie from '../utils/destroyCookie.js'


// @desc Auth user/set token
// route POST/ api/user/auth
// access public
const authUser = asyncHandler(async (req, res)=>{
    const {email, password} = req.body  
    const user = await  User.findOne({email})

    // add the match password logic written in the method file  to also check for the password rather than just the user (email)
    if(user && (await user.matchPassword(password))){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash  
        })

    }else{
        res.status(400)
        throw new Error('Invalid email or Password')
    }

    res.status(200).json({message: 'Authenticate user'})
})



// @desc Register Users 
// route POST/ api/users
// access public
const registerUser = asyncHandler(async (req, res)=>{
    const {name, email, password} = req.body;

    // from database model to chck if user exist  
    const userExists = await User.findOne({email})
    if (userExists){
        res.status(400)
        throw new Error('User alrealdy exist')
    }
    const user = await User.create({
        name,
        email,
        password,
    })

    // when user has been successfully created
    if(user){
        // generate token and store in http only cokkie before precedding 
        generateToken(res, user._Id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash

        })

    }else{
        res.status(400)
        throw new Error('invalid user data')
    }
    // used only for test purpose 
    // res.status(200).json({message: 'Register User'})
})





// @desc Logout users
// route POST/ api/users/logout
// access public
const logoutUser = asyncHandler(async (req, res)=>{
   destroyCookie(res)
    res.status(200).json({message: 'User Logged out'})
})






// @desc Get users Profile
// route GET/ api/users/profile
// access private
const getUserProfile = asyncHandler(async (req, res)=>{
    const {email, password} = req.body 
    // const user = await User.findOne({email})
    user = {
        _id:req.User._id,
        name: req.user.name,
        email: req.user.email
    }
    console.log(req.user)
    res.status(200).json(req.user)
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


















import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import destroyCookie from '../utils/destroyCookie.js'


// @desc Auth user/set token
// route POST/ api/user/auth
// access public
const authUser = asyncHandler(async (req, res)=>{
    const {email, password} = req.body  
    const user = await  User.findOne({email})

    // add the match password logic written in the method file  to also check for the password rather than just the user (email)
    if(user && (await user.matchPassword(password))){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash  
        })

    }else{
        res.status(400)
        throw new Error('Invalid email or Password')
    }

    res.status(200).json({message: 'Authenticate user'})
})



// @desc Register Users 
// route POST/ api/users
// access public
const registerUser = asyncHandler(async (req, res)=>{
    const {name, email, password} = req.body;

    // from database model to chck if user exist  
    const userExists = await User.findOne({email})
    if (userExists){
        res.status(400)
        throw new Error('User alrealdy exist')
    }
    const user = await User.create({
        name,
        email,
        password,
    })

    // when user has been successfully created
    if(user){
        // generate token and store in http only cokkie before precedding 
        generateToken(res, user._Id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash

        })

    }else{
        res.status(400)
        throw new Error('invalid user data')
    }
    // used only for test purpose 
    // res.status(200).json({message: 'Register User'})
})





// @desc Logout users
// route POST/ api/users/logout
// access public
const logoutUser = asyncHandler(async (req, res)=>{
   destroyCookie(res)
    res.status(200).json({message: 'User Logged out'})
})






// @desc Get users Profile
// route GET/ api/users/profile
// access private
const getUserProfile = asyncHandler(async (req, res)=>{
    const {email, password} = req.body 
    // const user = await User.findOne({email})
    user = {
        _id:req.User._id,
        name: req.user.name,
        email: req.user.email
    }
    console.log(req.user)
    res.status(200).json(req.user)
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


















import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import destroyCookie from '../utils/destroyCookie.js'


// @desc Auth user/set token
// route POST/ api/user/auth
// access public
const authUser = asyncHandler(async (req, res)=>{
    const {email, password} = req.body  
    const user = await  User.findOne({email})

    // add the match password logic written in the method file  to also check for the password rather than just the user (email)
    if(user && (await user.matchPassword(password))){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash  
        })

    }else{
        res.status(400)
        throw new Error('Invalid email or Password')
    }

    res.status(200).json({message: 'Authenticate user'})
})



// @desc Register Users 
// route POST/ api/users
// access public
const registerUser = asyncHandler(async (req, res)=>{
    const {name, email, password} = req.body;

    // from database model to chck if user exist  
    const userExists = await User.findOne({email})
    if (userExists){
        res.status(400)
        throw new Error('User alrealdy exist')
    }
    const user = await User.create({
        name,
        email,
        password,
    })

    // when user has been successfully created
    if(user){
        // generate token and store in http only cokkie before precedding 
        generateToken(res, user._Id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash

        })

    }else{
        res.status(400)
        throw new Error('invalid user data')
    }
    // used only for test purpose 
    // res.status(200).json({message: 'Register User'})
})





// @desc Logout users
// route POST/ api/users/logout
// access public
const logoutUser = asyncHandler(async (req, res)=>{
   destroyCookie(res)
    res.status(200).json({message: 'User Logged out'})
})






// @desc Get users Profile
// route GET/ api/users/profile
// access private
const getUserProfile = asyncHandler(async (req, res)=>{
    const {email, password} = req.body 
    // const user = await User.findOne({email})
    user = {
        _id:req.User._id,
        name: req.user.name,
        email: req.user.email
    }
    console.log(req.user)
    res.status(200).json(req.user)
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


















import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import destroyCookie from '../utils/destroyCookie.js'


// @desc Auth user/set token
// route POST/ api/user/auth
// access public
const authUser = asyncHandler(async (req, res)=>{
    const {email, password} = req.body  
    const user = await  User.findOne({email})

    // add the match password logic written in the method file  to also check for the password rather than just the user (email)
    if(user && (await user.matchPassword(password))){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash  
        })

    }else{
        res.status(400)
        throw new Error('Invalid email or Password')
    }

    res.status(200).json({message: 'Authenticate user'})
})



// @desc Register Users 
// route POST/ api/users
// access public
const registerUser = asyncHandler(async (req, res)=>{
    const {name, email, password} = req.body;

    // from database model to chck if user exist  
    const userExists = await User.findOne({email})
    if (userExists){
        res.status(400)
        throw new Error('User alrealdy exist')
    }
    const user = await User.create({
        name,
        email,
        password,
    })

    // when user has been successfully created
    if(user){
        // generate token and store in http only cokkie before precedding 
        generateToken(res, user._Id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash

        })

    }else{
        res.status(400)
        throw new Error('invalid user data')
    }
    // used only for test purpose 
    // res.status(200).json({message: 'Register User'})
})





// @desc Logout users
// route POST/ api/users/logout
// access public
const logoutUser = asyncHandler(async (req, res)=>{
   destroyCookie(res)
    res.status(200).json({message: 'User Logged out'})
})






// @desc Get users Profile
// route GET/ api/users/profile
// access private
const getUserProfile = asyncHandler(async (req, res)=>{
    const {email, password} = req.body 
    // const user = await User.findOne({email})
    user = {
        _id:req.User._id,
        name: req.user.name,
        email: req.user.email
    }
    console.log(req.user)
    res.status(200).json(req.user)
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


















import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import destroyCookie from '../utils/destroyCookie.js'


// @desc Auth user/set token
// route POST/ api/user/auth
// access public
const authUser = asyncHandler(async (req, res)=>{
    const {email, password} = req.body  
    const user = await  User.findOne({email})

    // add the match password logic written in the method file  to also check for the password rather than just the user (email)
    if(user && (await user.matchPassword(password))){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash  
        })

    }else{
        res.status(400)
        throw new Error('Invalid email or Password')
    }

    res.status(200).json({message: 'Authenticate user'})
})



// @desc Register Users 
// route POST/ api/users
// access public
const registerUser = asyncHandler(async (req, res)=>{
    const {name, email, password} = req.body;

    // from database model to chck if user exist  
    const userExists = await User.findOne({email})
    if (userExists){
        res.status(400)
        throw new Error('User alrealdy exist')
    }
    const user = await User.create({
        name,
        email,
        password,
    })

    // when user has been successfully created
    if(user){
        // generate token and store in http only cokkie before precedding 
        generateToken(res, user._Id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash

        })

    }else{
        res.status(400)
        throw new Error('invalid user data')
    }
    // used only for test purpose 
    // res.status(200).json({message: 'Register User'})
})





// @desc Logout users
// route POST/ api/users/logout
// access public
const logoutUser = asyncHandler(async (req, res)=>{
   destroyCookie(res)
    res.status(200).json({message: 'User Logged out'})
})






// @desc Get users Profile
// route GET/ api/users/profile
// access private
const getUserProfile = asyncHandler(async (req, res)=>{
    const {email, password} = req.body 
    // const user = await User.findOne({email})
    user = {
        _id:req.User._id,
        name: req.user.name,
        email: req.user.email
    }
    console.log(req.user)
    res.status(200).json(req.user)
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


















import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import destroyCookie from '../utils/destroyCookie.js'


// @desc Auth user/set token
// route POST/ api/user/auth
// access public
const authUser = asyncHandler(async (req, res)=>{
    const {email, password} = req.body  
    const user = await  User.findOne({email})

    // add the match password logic written in the method file  to also check for the password rather than just the user (email)
    if(user && (await user.matchPassword(password))){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash  
        })

    }else{
        res.status(400)
        throw new Error('Invalid email or Password')
    }

    res.status(200).json({message: 'Authenticate user'})
})



// @desc Register Users 
// route POST/ api/users
// access public
const registerUser = asyncHandler(async (req, res)=>{
    const {name, email, password} = req.body;

    // from database model to chck if user exist  
    const userExists = await User.findOne({email})
    if (userExists){
        res.status(400)
        throw new Error('User alrealdy exist')
    }
    const user = await User.create({
        name,
        email,
        password,
    })

    // when user has been successfully created
    if(user){
        // generate token and store in http only cokkie before precedding 
        generateToken(res, user._Id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash

        })

    }else{
        res.status(400)
        throw new Error('invalid user data')
    }
    // used only for test purpose 
    // res.status(200).json({message: 'Register User'})
})





// @desc Logout users
// route POST/ api/users/logout
// access public
const logoutUser = asyncHandler(async (req, res)=>{
   destroyCookie(res)
    res.status(200).json({message: 'User Logged out'})
})






// @desc Get users Profile
// route GET/ api/users/profile
// access private
const getUserProfile = asyncHandler(async (req, res)=>{
    const {email, password} = req.body 
    // const user = await User.findOne({email})
    user = {
        _id:req.User._id,
        name: req.user.name,
        email: req.user.email
    }
    console.log(req.user)
    res.status(200).json(req.user)
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


















import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import destroyCookie from '../utils/destroyCookie.js'


// @desc Auth user/set token
// route POST/ api/user/auth
// access public
const authUser = asyncHandler(async (req, res)=>{
    const {email, password} = req.body  
    const user = await  User.findOne({email})

    // add the match password logic written in the method file  to also check for the password rather than just the user (email)
    if(user && (await user.matchPassword(password))){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash  
        })

    }else{
        res.status(400)
        throw new Error('Invalid email or Password')
    }

    res.status(200).json({message: 'Authenticate user'})
})



// @desc Register Users 
// route POST/ api/users
// access public
const registerUser = asyncHandler(async (req, res)=>{
    const {name, email, password} = req.body;

    // from database model to chck if user exist  
    const userExists = await User.findOne({email})
    if (userExists){
        res.status(400)
        throw new Error('User alrealdy exist')
    }
    const user = await User.create({
        name,
        email,
        password,
    })

    // when user has been successfully created
    if(user){
        // generate token and store in http only cokkie before precedding 
        generateToken(res, user._Id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash

        })

    }else{
        res.status(400)
        throw new Error('invalid user data')
    }
    // used only for test purpose 
    // res.status(200).json({message: 'Register User'})
})





// @desc Logout users
// route POST/ api/users/logout
// access public
const logoutUser = asyncHandler(async (req, res)=>{
   destroyCookie(res)
    res.status(200).json({message: 'User Logged out'})
})






// @desc Get users Profile
// route GET/ api/users/profile
// access private
const getUserProfile = asyncHandler(async (req, res)=>{
    const {email, password} = req.body 
    // const user = await User.findOne({email})
    user = {
        _id:req.User._id,
        name: req.user.name,
        email: req.user.email
    }
    console.log(req.user)
    res.status(200).json(req.user)
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


















import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import destroyCookie from '../utils/destroyCookie.js'


// @desc Auth user/set token
// route POST/ api/user/auth
// access public
const authUser = asyncHandler(async (req, res)=>{
    const {email, password} = req.body  
    const user = await  User.findOne({email})

    // add the match password logic written in the method file  to also check for the password rather than just the user (email)
    if(user && (await user.matchPassword(password))){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash  
        })

    }else{
        res.status(400)
        throw new Error('Invalid email or Password')
    }

    res.status(200).json({message: 'Authenticate user'})
})



// @desc Register Users 
// route POST/ api/users
// access public
const registerUser = asyncHandler(async (req, res)=>{
    const {name, email, password} = req.body;

    // from database model to chck if user exist  
    const userExists = await User.findOne({email})
    if (userExists){
        res.status(400)
        throw new Error('User alrealdy exist')
    }
    const user = await User.create({
        name,
        email,
        password,
    })

    // when user has been successfully created
    if(user){
        // generate token and store in http only cokkie before precedding 
        generateToken(res, user._Id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash

        })

    }else{
        res.status(400)
        throw new Error('invalid user data')
    }
    // used only for test purpose 
    // res.status(200).json({message: 'Register User'})
})





// @desc Logout users
// route POST/ api/users/logout
// access public
const logoutUser = asyncHandler(async (req, res)=>{
   destroyCookie(res)
    res.status(200).json({message: 'User Logged out'})
})






// @desc Get users Profile
// route GET/ api/users/profile
// access private
const getUserProfile = asyncHandler(async (req, res)=>{
    const {email, password} = req.body 
    // const user = await User.findOne({email})
    user = {
        _id:req.User._id,
        name: req.user.name,
        email: req.user.email
    }
    console.log(req.user)
    res.status(200).json(req.user)
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


















import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import destroyCookie from '../utils/destroyCookie.js'


// @desc Auth user/set token
// route POST/ api/user/auth
// access public
const authUser = asyncHandler(async (req, res)=>{
    const {email, password} = req.body  
    const user = await  User.findOne({email})

    // add the match password logic written in the method file  to also check for the password rather than just the user (email)
    if(user && (await user.matchPassword(password))){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash  
        })

    }else{
        res.status(400)
        throw new Error('Invalid email or Password')
    }

    res.status(200).json({message: 'Authenticate user'})
})



// @desc Register Users 
// route POST/ api/users
// access public
const registerUser = asyncHandler(async (req, res)=>{
    const {name, email, password} = req.body;

    // from database model to chck if user exist  
    const userExists = await User.findOne({email})
    if (userExists){
        res.status(400)
        throw new Error('User alrealdy exist')
    }
    const user = await User.create({
        name,
        email,
        password,
    })

    // when user has been successfully created
    if(user){
        // generate token and store in http only cokkie before precedding 
        generateToken(res, user._Id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash

        })

    }else{
        res.status(400)
        throw new Error('invalid user data')
    }
    // used only for test purpose 
    // res.status(200).json({message: 'Register User'})
})





// @desc Logout users
// route POST/ api/users/logout
// access public
const logoutUser = asyncHandler(async (req, res)=>{
   destroyCookie(res)
    res.status(200).json({message: 'User Logged out'})
})






// @desc Get users Profile
// route GET/ api/users/profile
// access private
const getUserProfile = asyncHandler(async (req, res)=>{
    const {email, password} = req.body 
    // const user = await User.findOne({email})
    user = {
        _id:req.User._id,
        name: req.user.name,
        email: req.user.email
    }
    console.log(req.user)
    res.status(200).json(req.user)
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


















import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import destroyCookie from '../utils/destroyCookie.js'


// @desc Auth user/set token
// route POST/ api/user/auth
// access public
const authUser = asyncHandler(async (req, res)=>{
    const {email, password} = req.body  
    const user = await  User.findOne({email})

    // add the match password logic written in the method file  to also check for the password rather than just the user (email)
    if(user && (await user.matchPassword(password))){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash  
        })

    }else{
        res.status(400)
        throw new Error('Invalid email or Password')
    }

    res.status(200).json({message: 'Authenticate user'})
})



// @desc Register Users 
// route POST/ api/users
// access public
const registerUser = asyncHandler(async (req, res)=>{
    const {name, email, password} = req.body;

    // from database model to chck if user exist  
    const userExists = await User.findOne({email})
    if (userExists){
        res.status(400)
        throw new Error('User alrealdy exist')
    }
    const user = await User.create({
        name,
        email,
        password,
    })

    // when user has been successfully created
    if(user){
        // generate token and store in http only cokkie before precedding 
        generateToken(res, user._Id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash

        })

    }else{
        res.status(400)
        throw new Error('invalid user data')
    }
    // used only for test purpose 
    // res.status(200).json({message: 'Register User'})
})





// @desc Logout users
// route POST/ api/users/logout
// access public
const logoutUser = asyncHandler(async (req, res)=>{
   destroyCookie(res)
    res.status(200).json({message: 'User Logged out'})
})






// @desc Get users Profile
// route GET/ api/users/profile
// access private
const getUserProfile = asyncHandler(async (req, res)=>{
    const {email, password} = req.body 
    // const user = await User.findOne({email})
    user = {
        _id:req.User._id,
        name: req.user.name,
        email: req.user.email
    }
    console.log(req.user)
    res.status(200).json(req.user)
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


















import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import destroyCookie from '../utils/destroyCookie.js'


// @desc Auth user/set token
// route POST/ api/user/auth
// access public
const authUser = asyncHandler(async (req, res)=>{
    const {email, password} = req.body  
    const user = await  User.findOne({email})

    // add the match password logic written in the method file  to also check for the password rather than just the user (email)
    if(user && (await user.matchPassword(password))){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash  
        })

    }else{
        res.status(400)
        throw new Error('Invalid email or Password')
    }

    res.status(200).json({message: 'Authenticate user'})
})



// @desc Register Users 
// route POST/ api/users
// access public
const registerUser = asyncHandler(async (req, res)=>{
    const {name, email, password} = req.body;

    // from database model to chck if user exist  
    const userExists = await User.findOne({email})
    if (userExists){
        res.status(400)
        throw new Error('User alrealdy exist')
    }
    const user = await User.create({
        name,
        email,
        password,
    })

    // when user has been successfully created
    if(user){
        // generate token and store in http only cokkie before precedding 
        generateToken(res, user._Id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // no password for now since we using bcrypt to hash

        })

    }else{
        res.status(400)
        throw new Error('invalid user data')
    }
    // used only for test purpose 
    // res.status(200).json({message: 'Register User'})
})





// @desc Logout users
// route POST/ api/users/logout
// access public
const logoutUser = asyncHandler(async (req, res)=>{
   destroyCookie(res)
    res.status(200).json({message: 'User Logged out'})
})






// @desc Get users Profile
// route GET/ api/users/profile
// access private
const getUserProfile = asyncHandler(async (req, res)=>{
    const {email, password} = req.body 
    // const user = await User.findOne({email})
    user = {
        _id:req.User._id,
        name: req.user.name,
        email: req.user.email
    }
    console.log(req.user)
    res.status(200).json(req.user)
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


















