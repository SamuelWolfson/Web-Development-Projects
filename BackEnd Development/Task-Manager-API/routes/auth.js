import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import { body, validationResult } from 'express-validator'

const router = express.Router();

router.post('/register', [body('username').isString()
    .isLength({ min: 3 })
    .withMessage('Username must be at least 3 letters long')
    .trim(), body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
    ] , async (req, res, next) => {
        const errors = validationResult(req);

        if(!errors.isEmpty())
            return res.status(400).json({ errors: errors.array() });
        
try{
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password,10);

    const newUser = new User({username: username, password: hashedPassword });

    await newUser.save();

    res.status(201).json({ message:'User created successfully!' });
} catch (err) {

    if (err.code === 11000) {

            err.statusCode = 400;
            err.message = 'Username is already taken';
        }

        next(err);
}
});

router.post('/login', [
    body('username').notEmpty()
    .withMessage('Username is required')
    .trim(),
    body('password')
    .notEmpty()
    .withMessage('Password is required')
] , async (req, res, next) => {

            const errors = validationResult(req);

        if(!errors.isEmpty())
            return res.status(400).json({ errors: errors.array() });
        
try{
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if(!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.cookie('token', token, {
        httpOnly: true,
        maxAge: 3600000
    });

    res.json({ message: 'User logged in successfully' });
} catch (err) {
    next(err);
}
});

router.post('/logout', async (req, res) => {
    res.clearCookie('token');
    res.json({ message: 'User logged out successfully' });
});

export default router;