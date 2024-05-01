import { Button } from '@mui/material';
import React from 'react';
import { useDrag } from 'react-dnd';

export default function Tasks({ task }) {

    const [, drag] = useDrag({
        type: 'TASK',
        item: { task },
      });

  return (
    <div>
        
        <Button
        variant='outlined'
         ref={drag}
         style={{marginRight: '0.2em'}}
        >
            {task.name}
        </Button>
        

  </div>
  )
}
