import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import '../../styles/task.scss'
import { LEVELS } from '../../models/level.enum';

function TaskComponent({task, complete, deleteTask}) {

  useEffect(()=> { 
    console.log("Tarea creada"); 
    return ()=>{ 
      console.log("Tarea eliminada"); 
    }
}, [task]); 

/** 
 * Function return Icon task
 */
function IconTask() 
{ 
  if (task.completed) return <i onClick={()=>complete(task)} className='bi-toggle-on task-action' style={{color:"green", fontSize:"20px"}}> </i>
  return <i onClick={()=>complete(task)} className='bi-toggle-off task-action' style={{color:"grey", fontSize:"20px"}}> </i>
  
}

function IconDelete() 
{ 
  return <i onClick={()=>deleteTask(task)} className="bg bi-trash task-action" style={{color:"red"}}></i>
}

function BadgeLevel() 
{ 
 switch(task.level) 
 { 
  case LEVELS.NORMAL: 
    return <span className='badge bg-primary'>{task.level}</span>
  
  case LEVELS.URGENT: 
    return <span className='badge bg-warning'>{task.level}</span>
  
  case LEVELS.BLOCKING: 
    return <span className='badge bg-danger'>{task.level}</span>
 }
}
  return (
    <tr> 
      <th> {task.name}</th> 
      <td>{task.description}</td>
      <td>{BadgeLevel()}</td>
      <td>{IconTask()}</td>
      <td>{IconDelete()}</td>
    </tr>
  )
}

TaskComponent.propTypes = {
    task:PropTypes.instanceOf(Task).isRequired, 
    complete:PropTypes.func.isRequired, 
    deleteTask:PropTypes.func.isRequired

}

export default TaskComponent


