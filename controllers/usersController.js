import User from '../models/User.js'

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password')
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json(`Server error while fetching users`, err)
    }
}

export const getUserByID = async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.findById(id).select('-password')
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(`Server error while fetching the user`, err)
    }
}

export const getUserProfile = async (req, res) => {
    const { id } = req.user
    try {
        const user = await User.findById(id).select('-password')
        if (!user) {
            return res.status(404).json(`User profile not found`)
        }
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(`Server error while fetching the user profile`, err)
    }
}
