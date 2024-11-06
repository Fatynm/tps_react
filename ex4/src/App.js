import './App.css';
import TaskList from './TaskList';
import mon from './faty.jpg';
import ff from './flr.jpg';
import fs from './lyt.jpg';

function App() {
    const tasks = [
        
        { id: 1, figure:<img src={mon}  alt="Figure 1" style={{ width: '70px', height: '110px' }}/>, completed:false },
        { id: 2, figure: <img src={ff}  alt="Figure 2" style={{ width: '70px', height: '110px' }} />, completed: true },
        { id: 3, figure: <img src={fs}  alt="Figure 3" style={{ width: '70px', height: '110px' }}/>, completed: false },
    ];

    return (
    <div>
    <h1>Liste des figures</h1>
    <TaskList tasks={tasks} />
    </div>
    );
}
export default App;





