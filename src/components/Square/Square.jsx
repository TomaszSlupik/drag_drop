import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

export default function Square({ tasks, onDrop }) {

  const [, drop] = useDrop({
    accept: 'TASK',
    drop: (item) => onDrop(item.task),
  });

  const style = {
    btn: {marginBottom: '0.4em'},
    btnsquare: {position: 'absolute', bottom: '2%', right: '2%', backgroundColor: 'green', color: '#fff'},
    textsquare: {fontSize: '0.8rem', color: 'black', padding: '0.2em 0.4em' }
  }


  const [previousTasks, setPreviousTasks] = useState(tasks)

  console.log(previousTasks)

  const clearTasks = () => {
    onDrop([])
  }

  return (
    <div
      ref={(node) => drop(node)}
      style={{
        position: 'relative',
        width: '250px',
        height: '250px',
        border: '2px dashed black',
        marginBottom: '20px',
        padding: '0.2em 0.3em'
      }}
    >
      {
        tasks.length === 0 ? 
        (
          <div style={style.textsquare}>Umieść zadania w kwadracie</div>
        )
        
        : 
        (
          <Button 
          // onClick={clearTasks}
          variant='outlined'
          style={style.btnsquare}>Zapisz zadania</Button>
        )
      }
      
      
      {tasks.map((task, index) => (

        <Button
        key={index}
        variant='contained'
        style={style.btn}
        >
           {task.name} 
        </Button>
      ))}
    </div>
  );
}
