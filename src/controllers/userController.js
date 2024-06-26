const userService = require('../services/userService');
const UserDto = require('../dto/userDto');

const listUsers = async (req, res) => {
    const users = await userService.getAllUsers();
    res.send(users.map(user => new UserDto(user)));
};

const getUserDetails = async (req, res) => {
    const user = await userService.getUserById(req.params.userId);
    if (!user) return res.status(404).send('User not found');
    res.send(new UserDto(user));
};

const createUser = async (req, res) => {
    const user = await userService.createUser(req.body);
    res.status(201).send(new UserDto(user));
};

const updateUser = async (req, res) => {
    const user = await userService.updateUser(req.params.userId, req.body);
    if (!user) return res.status(404).send('User not found');
    res.send(new UserDto(user));
};

const patchUser = async (req, res) => {
    const user = await userService.updateUser(req.params.userId, req.body);
    if (!user) return res.status(404).send('User not found');
    res.send(new UserDto(user));
};

const deleteUser = async (req, res) => {
    const user = await userService.deleteUser(req.params.userId);
    if (!user) return res.status(404).send('User not found');
    res.send({ message: 'User deleted successfully' });
};

module.exports = {
    listUsers,
    getUserDetails,
    createUser,
    updateUser,
    patchUser,
    deleteUser
};
