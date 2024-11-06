import { useState } from 'react';
import './taskList.css';

function TaskItem({ task}) {
    const [checked, setChecked] = useState(false);

    function handleChange() {
        setChecked(!checked);

    }
    return (
       <ul className='task-item'>
        <li>
            <input type="checkbox" onChange={handleChange} /></li>
        <li>
        <figure style={{ opacity: checked ? 0.5 : 1 }}>
        {task.figure}
        </figure>
        </li>
        </ul>);
        }


export default TaskItem;









