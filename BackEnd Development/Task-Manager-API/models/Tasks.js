import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema({
title:{
    type:String,
    required: [true, 'Task title is required'],
    trim: true
},
message:{
type: String,
required: [true, 'Task message is required'],
trim: true
},
completed: {
    type: Boolean,
    default: false
},
owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
}
},{
    timestamp:true
});

const Task = mongoose.model('Task', TaskSchema);

export default Task;