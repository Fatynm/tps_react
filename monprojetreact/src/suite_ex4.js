import TaskList1 from './TaskList1.js';

function App() {
const tasks = [
{ id: 1, text: 'Faire les courses'},
{ id: 2, text: 'Apprendre React'},
{ id: 3, text: 'Faire de l\'exercice'},
];

return (
<div>
<h1>Liste des Tâches</h1>
<TaskList1 tasks={tasks} />
</div>
);}
export default App;