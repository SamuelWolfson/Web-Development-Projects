import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema({
title:{
    type:String,
    required: [true, 'Task title is required'],
    trim: true
},
message:{
type: String,
required: false,
trim: true
},
completed: {
    type: Boolean,
    default: false
},
owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: 'User'
}
},{
    timestamps:true
});

const Task = mongoose.model('Task', TaskSchema);

export default Task;