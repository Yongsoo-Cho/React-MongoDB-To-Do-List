const express = require('express');
const router = express.Router();

const taskController = require('../controllers/task');

router.post('/create', taskController.createTask);
router.delete('/:taskId', taskController.deleteTask);
router.get('/:taskId', taskController.describeTask);

router.post('/list', taskController.listTasks);

module.exports = router;
