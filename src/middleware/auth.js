const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const authenticate = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) return res.status(401).send('Access denied. No token provided.');

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).send('Invalid token.');
    }
};

module.exports = authenticate;
