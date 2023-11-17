import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import { LEVELS } from '../../../models/level.enum';
import { Task } from '../../../models/task.class';

function TaskForm({agregar}) {
    const nameRef=useRef(''); 
    const descriptionRef=useRef(''); 
    const levelRef=useRef(LEVELS.NORMAL); 

    function AgregarTask(e) { 
        e.preventDefault()
        const newTask=new Task( 
            nameRef.current.value, 
            descriptionRef.current.value, 
            false, 
            levelRef.current.value
        ); 
        agregar(newTask)
    }
  return (
    <form onSubmit={AgregarTask} className='d-flex justify-content-center mb-4'> 
    <div className='form-outline flex-fill'>
    Nombre<input ref={nameRef} id='IdName' type='text' required autoFocus/> <br></br>
    Descripción   <input ref={descriptionRef} id='IdDescription' type='text' required placeholder='Ingrese la descripción'/><br></br>
        <label htmlFor='IdSelect' className='sr-only' >Prioridad</label>
        <select ref={levelRef} id='IdSelect' defaultValue={LEVELS.NORMAL}>
            <option value={LEVELS.NORMAL}>NORMAL</option>
           <option value={LEVELS.URGENT}>URGENT</option>
           <option value={LEVELS.BLOCKING}>BLOCKING</option>
        </select>
    </div> 
    <button type='submit' className='btn btn-primary btn-lg ms-2' >Agregar</button>
    </form>
  )
}

TaskForm.propTypes = {
    agregar:PropTypes.func.isRequired
}

export default TaskForm


