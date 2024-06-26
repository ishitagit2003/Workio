const User = require('../models/userModel');

const createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

const getUserById = async (id) => {
    return await User.findById(id).where({ isDeleted: false });
};

const getAllUsers = async () => {
    return await User.find({ isDeleted: false });
};

const updateUser = async (id, updateData) => {
    return await User.findByIdAndUpdate(id, updateData, { new: true }).where({ isDeleted: false });
};

const deleteUser = async (id) => {
    return await User.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
};

module.exports = {
    createUser,
    getUserById,
    getAllUsers,
    updateUser,
    deleteUser
};
