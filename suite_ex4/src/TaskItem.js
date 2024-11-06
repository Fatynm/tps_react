import { useState } from 'react';
import './App.js';
function TaskItem({ task}) {

    const [checked, setChecked] = useState(false);

    function handleChange() {
        setChecked(!checked);

    }
    
    return (
    <li>
    <input
    type="checkbox"
    onChange={handleChange}
    />
<span style={{ textDecoration: checked ? 'line-through' : 'none' }}>
{task.text}
</span>
    </li>
    );}
    

export default TaskItem;
