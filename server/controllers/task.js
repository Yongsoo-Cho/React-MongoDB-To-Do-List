const Task = require('../models/task');
const { taskStatusMap } = require('../utils/task');

exports.createTask = async (req, res) => {
    const task = new Task({
        content: req.body.content,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: taskStatusMap.UNRESOLVED
    });

    await task.save();

    res.json({ message: 'task created' });
};

exports.deleteTask = async (req, res) => {
    await Task.deleteOne({ _id: req.params.taskId });
    res.json({message: 'Task has been deleted.'});
};

exports.describeTask = async (req, res) => {
    const task = await Task.findOne({ _id: req.params.taskId });
    res.json(task);
};

exports.listTasks = async (req, res) => {
    const { prefix } = req.body;

    const tasks = await Task.find( {content: { $regex: prefix, $options: "i" } } );

    res.json(tasks);
};

exports.resolveTask = async (req, res) => {
    const task = await Task.findOne({ _id: req.params.taskId });
    let status;

    if(task.status === taskStatusMap.RESOLVED){
        status = taskStatusMap.UNRESOLVED;
    }
    else{
        status = taskStatusMap.RESOLVED;
    }

    await Task.updateOne({ _id: req.params.taskId }, { status });

    res.json({message: 'Task has been updated.'});
};