import React, { useEffect, useState } from 'react'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/level.enum'
import TaskComponent from '../pure/task';
import TaskForm from '../pure/forms/taskForm';

function TaskListComponent() {
    const defaultTask1=new Task('Example1','Tarea de Ejemplo1',true, LEVELS.NORMAL);
    const defaultTask2=new Task('Example2', 'Tarea2',false, LEVELS.URGENT ); 
    const defaultTask3= new Task('Example3', 'Tarea3', false, LEVELS.BLOCKING);  
    //Estado del componente
    const [tasks, setTasks]=useState([defaultTask1, defaultTask2, defaultTask3]); 
    const [loading, setLoading]=useState(true); 

    //Ciclo de vida del componente
    useEffect(()=> { 
      console.log("Tarea modificada"); 
      setLoading(false)
      return () => { 
        console.log("Tarea eliminada"); 
      }
    }, [tasks])

    //Determina si la tarea esta completada
    function CompletedTask(task) 
    { 
      const taskIndex=tasks.indexOf(task); 
      const taskTemp=[...tasks]; 
      taskTemp[taskIndex].completed=!taskTemp[taskIndex].completed; 
      setTasks(taskTemp); 
      
    }

    function DeleteTask(task) { 
      const taskIndex=tasks.indexOf(task); 
      const taskElement=tasks[taskIndex]; 
      const taskTemp=tasks.filter(element=>element!=taskElement); 
      setTasks(taskTemp); 
    }

    function AgregarTask(task) 
    { 
      const taskTemp=[...tasks]; 
      taskTemp.push(task); 
      setTasks(taskTemp)
      console.log(task); 
    }

  return (
    <div className="col-12" >
      <div className='card'> 
      <div className='card-header' style={{"textAlign":"center"}}> 
       Tarea 
      </div>
      <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position:"relative", height:"400px"}}> 
        <table className='table'> 
          <thead> 
            <tr> 
              <th scope="col"> Titulo</th> 
              <th scope="col">Descripción</th> 
              <th scope="col">Prioridad</th> 
              <th scope="col">Acciones</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead> 
          <tbody> 
          { 
            tasks.map((task, index)=><TaskComponent 
            key={index} 
            task={task}
            complete={CompletedTask}
            deleteTask={DeleteTask}
            ></TaskComponent>)
          }            
          </tbody>
        </table>
      </div>
      <TaskForm agregar={AgregarTask}></TaskForm>
      </div>
    </div>
  )
}

export default TaskListComponent
