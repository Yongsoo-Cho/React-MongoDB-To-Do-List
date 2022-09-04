import React, { useState } from 'react';
import { createTask } from './task-operations';
import './task.css'

const TaskCreate = () => {

    const [content, setContent] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();

        const taskSubmit = { content };

        await createTask(taskSubmit);

        setContent("");
    };

    return(
        <div className='taskCreate'>

            <form onSubmit={handleSubmit}>
                <h3>TO DO</h3>
                <textarea 
                    type="text"
                    placeholder="Enter details here..." 
                    value={content} 
                    onChange={e => setContent(e.target.value)}
                />
                <button>Submit</button>
            </form>

        </div>
    );

};

export default TaskCreate;