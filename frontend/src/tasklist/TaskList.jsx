import React, { useEffect, useState } from 'react';
import { listTasks } from './task-operations';
import Task from './Task'

const TaskList = () => {
    const [prefix, setPrefix] = useState('');
    const [taskList, setTaskList] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const tasksResponse = await listTasks({ prefix });
            setTaskList(tasksResponse);
        };

        fetchData();
    }, [prefix]);

    const taskComponents = taskList.map(t => {
        return (
            <Task
                content = {t.content}
                createdAt = {t.createdAt}
            />
        );
    });
    
    return(
        <div>
            <input 
                type="text" 
                placeholder="Search tasks"
                onChange={e => setPrefix(e.target.value)}
                value = {prefix}
            />

            {taskComponents}
        </div>
    );

};

export default TaskList;