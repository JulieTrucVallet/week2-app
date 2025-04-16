import User from '../models/Users.js'

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password')
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json({ message: 'Server error while fetching users', error: err })
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
        res.status(500).json({ message: 'Server error while fetching the user', error: err })
    }
}

export const getUserProfile = async (req, res) => {
    const { id } = req.user
    try {
        const user = await User.findById(id).select('-password')
        if (!user) {
            return res.status(404).json({ message: 'User profile not found' })
        }
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json({ message: 'Server error while fetching the user profile', error: err })
    }
}
