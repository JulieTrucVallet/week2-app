import User from '../models/Users.js'

export const getUserProfile = async (req, res) => {
    const {id} = req.user
    try{
        const user = await User.findById(id).select('-password')
        if(!userById){
            return res.status(404).json({message : `User not found`})
        }
        return res.status(200).json(userById)
    }
    catch(err){
        return res.status(500).json(`Internal server error`, err)
    }
}