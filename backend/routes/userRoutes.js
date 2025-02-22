import express from 'express';
import {
    authUser,
    registerUser, 
    logoutUser, 
    getUserProfile, 
    updateUserProfile
} from "../controllers/userController.js"
import protectRoute from '../middleware/authMiddleware.js'



const router = express.Router()


router.post('/', registerUser)
router.post('/auth', authUser)
router.post('/logout', logoutUser)
router.get('/profile',protectRoute, getUserProfile)
router.put('/profile',protectRoute, updateUserProfile)

    
export default router
