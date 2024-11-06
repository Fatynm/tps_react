import { useState } from 'react';
import './taskList.css';
// import './App.js';
function TaskItem1({ task}) {

    const [checked, setChecked] = useState(false);

    function handleChange() {
        setChecked(!checked);

    }
    
    return (
    <ul className='task-item'>
   <li><input
    type="checkbox"
    onChange={handleChange}
    /></li>
    <li>
    <span style={{ textDecoration: checked ? 'line-through' : 'none' }}>
     {task.text}
    </span>
    </li>
    </ul>
    );}
    

export default TaskItem1;
