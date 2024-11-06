
import TaskList from './TaskList';
import mon from './faty.jpg';
import ff from './flr.jpg';
import fs from './lyt.jpg';

function Ex4() {
    const tasks = [
        
        { id: 1, figure:<img src={mon}  alt="Figure 1" style={{ width: '200px', height: '300px' }}/>},
        { id: 2, figure: <img src={ff}  alt="Figure 2" style={{ width: '200px', height: '300px' }} />},
        { id: 3, figure: <img src={fs}  alt="Figure 3" style={{ width: '200px', height: '300px' }}/>},
    ];

    return (
    <div>
    <h1>Liste des figures</h1>
    <TaskList tasks={tasks} />
    </div>
    );
}
export default Ex4;
