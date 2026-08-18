import express from 'express'
import Task from '../models/Task.js'
import authMiddleware from '../middleware/auth.js'

const router = express.Router();

router.use(authMiddleware);

router.post('/', async (req, res) => {
    try {
        const newTask = new Task({
            title: req.body.title,
            message: req.body.message,
            owner: req.user.userId
        });
        
        await newTask.save();
        res.status(201).json(newTask);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find({ owner: req.user.userId });
        res.json(tasks);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id, owner: req.user.userId });
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json(task);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const updatedTask = await Task.findOneAndUpdate({ _id: req.params.id, owner: req.user.userId },
             req.body, { new: true, runValidators:true });
        if(!updatedTask) return res.status(404).json({ message: 'Could not update task' });
        res.json(updatedTask);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedTask = await Task.findOneAndDelete({ 
            _id: req.params.id,
            owner: req.user.userId
         })
        
         if(!deletedTask) return res.status(404).json('Task not found, to delete it');
         res.json({ message: 'Task was deleted successfully' });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;