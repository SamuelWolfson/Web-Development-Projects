import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const router = express.Router();

router.post('/register', async (req,res) => {
try{
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password,10);

    const newUser = new User({username: username, password: hashedPassword });

    await newUser.save();

    res.status(201).json({ message:'User created successfully!' });
} catch (err) {
    res.status(500).json({ error: err.message });
}
});

router.post('/login', async (req,res) => {
try{
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if(!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
} catch (err) {
    res.status(500).json({ error: err.message });
}
});

export default router;