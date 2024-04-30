import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Square from './components/Square/Square';
import React, { useState } from 'react';
import Tasks from './components/Tasks/Tasks';

function App() {

  const tasks = [
    { name: 'Zjeść śniadanie', color: 'red' },
    { name: 'Zrobić obiad', color: 'blue' },
    { name: 'Pójść na trening', color: 'green' },
    { name: 'Posprzątać', color: 'gray' },
  ];

  const [squareTasks, setSquareTasks] = useState([]);

  const handleDrop = (task) => {
    
    if (!squareTasks.includes(task)) {
      setSquareTasks((prevTasks) => [...prevTasks, task]);
    }
  };

  return (
    <div >
       <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Square tasks={squareTasks} onDrop={handleDrop} />
      </div>
      <div>Twoje zadania:</div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {tasks.map((task, index) => (
          <Tasks key={index} task={task} />
        ))}
      </div>
    </DndProvider>
    </div>
  );
}

export default App;
