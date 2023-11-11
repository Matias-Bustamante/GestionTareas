import React, { useEffect, useState } from 'react'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/level.enum'
import TaskComponent from '../pure/task';

function TaskListComponent() {
    const defaultTask=new Task('Example','Tarea de Ejemplo',false, LEVELS.NORMAL); 
    //Estado del componente
    const [task, setTask]=useState([defaultTask]); 
    const [loading, setLoading]=useState(true); 

    //Ciclo de vida del componente
    useEffect(()=> { 
      console.log("Tarea modificada"); 
      setLoading(false)
      return () => { 
        console.log("Tarea eliminada"); 
      }
    }, [task])

  return (
    <div>
      <div> 
      <h1>Tarea: </h1>
      </div>
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  )
}

export default TaskListComponent
