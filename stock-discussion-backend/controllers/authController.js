const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { generateToken } = require('../utils/tokenUtils');

exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = new User({ username, email, password });
        await user.save();
        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            userId: user._id
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const token = generateToken(user._id);
        res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
