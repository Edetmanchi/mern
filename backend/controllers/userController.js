// @desc Auth user/set token
// route POST/ api/user/auth
// access public


const authUser = (req, res)=>{
    res.status(200).json({message: 'set user'})

}

export default authUser