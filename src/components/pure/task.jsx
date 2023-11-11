import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import '../../styles/task.scss'

function TaskComponent({task}) {

  useEffect(()=> { 
    console.log("Tarea creada"); 
    return ()=>{ 
      console.log("Tarea eliminada"); 
    }
}, [task]); 

  return (
    <div>
        <h2 className='task-name'>Nombre: {task.name}</h2>
        <h3>Descripción: {task.description}</h3>
        <h2>Nivel: {task.completed}</h2>
        <h5>Estado: {task.completed ? 'COMPLETED':'PENDING'}</h5>
    </div>
  )
}

TaskComponent.propTypes = {
    task:PropTypes.instanceOf(Task)

}

export default TaskComponent


