const mongoose = require('mongoose');
const schema = mongoose.Schema;

const TaskSchema = new schema({
    content: String,
    createdAt: Date,
    updatedAt: Date,
    status: String
});

// data access object
const Task = mongoose.model('task', TaskSchema);
module.exports = Task;