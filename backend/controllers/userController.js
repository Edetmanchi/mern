import asyncHandler from 'express-async-handler'
// @desc Auth user/set token
// route POST/ api/user/auth
// access public
const authUser = asyncHandler(async (req, res)=>{
    res.status(200).json({message: 'set user'})

})

export {authUser}