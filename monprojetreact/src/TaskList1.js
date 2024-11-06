import TaskItem from './TaskItem1';
import './taskList.css';
function TaskList1({ tasks }) {
return (
<ul className='task-list'>
{tasks.map((task) => (
<TaskItem key={task.id} task={task} />
))}
</ul>
);
}
export default TaskList1;