import React, { useEffect, useState } from 'react';
import { listTasks } from './task-operations';
import TaskCreate from './TaskCreate';
import Task from './Task'
import './task.css'

const TaskList = () => {
    const [prefix, setPrefix] = useState('');
    const [taskList, setTaskList] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const tasksResponse = await listTasks({ prefix });
            setTaskList(tasksResponse);
        };

        fetchData();
    }, [prefix, taskList]);

    const taskComponents = taskList.map(t => {
        return (
            <Task
                id = {t._id}
                key = {t._id}
                content = {t.content}
                createdAt = {t.createdAt}

                status = {t.status}
            />
        );
    });
    
    return(
        <div className='task_list_background'>

            <div className='taskList'>
                <input 
                    type="text" 
                    placeholder="Search tasks"
                    onChange={e => setPrefix(e.target.value)}
                    value = {prefix}
                />
                {taskComponents}
            </div>

            <TaskCreate/>
        </div>
    );

};

export default TaskList;