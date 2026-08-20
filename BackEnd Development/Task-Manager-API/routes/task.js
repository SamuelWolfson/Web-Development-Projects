import express from 'express'
import Task from '../models/Task.js'
import authMiddleware from '../middleware/auth.js'
import { body, param, validationResult } from 'express-validator'

const router = express.Router();

router.use(authMiddleware);

router.post('/', [
    body('title')
    .isString()
    .notEmpty()
    .withMessage('Task title is required')
    .trim(),
    body('message')
    .optional()
    .isString()
    .trim()
] , async (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });

    try {
        const newTask = new Task({
            title: req.body.title,
            message: req.body.message,
            owner: req.user.userId
        });
        
        await newTask.save();
        res.status(201).json(newTask);

    } catch (err) {
        next(err);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const tasks = await Task.find({ owner: req.user.userId });
        res.json(tasks);

    } catch (err) {
        next(err);
    }
});

router.get('/:id',
    [
    param('id')
    .isMongoId()
    .withMessage('Invalid task ID format')
    ], async (req, res, next) => {
    
    const errors = validationResult(req);

    if(!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });
    
    try {
        const task = await Task.findOne({ _id: req.params.id, owner: req.user.userId });
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json(task);

    } catch (err) {
        next(err);
    }
});

router.patch('/:id',
    [
    param('id')
        .isMongoId()
        .withMessage('Invalid task ID format'),
    body('title')
        .optional()
        .isString()
        .notEmpty()
        .withMessage('Title cannot be empty')
        .trim(),
    body('message')
        .optional()
        .isString()
        .trim()
    ] ,async (req, res, next) => {

    const errors = validationResult(req);
    if(!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });

    try {
        const updatedTask = await Task.findOneAndUpdate({ _id: req.params.id, owner: req.user.userId },
             req.body, { returnDocument: 'after', runValidators:true });
        if(!updatedTask) return res.status(404).json({ message: 'Could not update task' });
        res.json(updatedTask);

    } catch (err) {
        next(err);
    }
});

router.delete('/:id', [
    param('id')
    .isMongoId()
    .withMessage('Invalid task ID format')
    ],

    async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });
    
        try {
        const deletedTask = await Task.findOneAndDelete({ 
            _id: req.params.id,
            owner: req.user.userId
         })
        
         if(!deletedTask) return res.status(404).json('Task not found, to delete it');
         res.json({ message: 'Task was deleted successfully' });

    } catch (err) {
        next(err);
    }
});

export default router;