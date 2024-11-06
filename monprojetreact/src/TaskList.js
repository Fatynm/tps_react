import TaskItem from './TaskItem';
import './taskList.css';
function TaskList({ tasks }) {
return (
<ul className="task-list">
{tasks.map((task) => (
<TaskItem key={task.id} task={task} />
))}
</ul>
);
}
export default TaskList;