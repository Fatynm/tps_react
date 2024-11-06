// import { useState } from 'react';
import './App.js';
function TaskItem({ task}) {

    return (
        <li>
            <input type="checkbox" checked={task.completed} disabled />
            <figure style={{ opacity: task.completed ? 0.4 : 1 }}>
        {task.figure}
        </figure>
            </li>);
        }


export default TaskItem;









