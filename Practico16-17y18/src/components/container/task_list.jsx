import React, {useState, useEffect} from 'react';
import { level } from '../../models/levels.enum';
import { task } from '../../models/task.class';
import TaskComponent  from '../pure/task';
import '../../styles/task.scss';
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {

    const defaultTask1 = new task('Ariel', 'Descripcion', false, level.Normal)   
    const defaultTask2 = new task('Lionel', 'Descripcion2', true, level.Urgente)
    const defaultTask3 = new task('Neymar', 'Descripcion3', false, level.Blocking)
    
    const [Task, setTask] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        console.log('Modificacion de tareas');
        setLoading(false)
        return () => {
            console.log('componente Desmontado');
        };
    }, [Task]);

    function completeTask(task) {
        console.log('Tarea completa: ', task);
        const index = Task.indexOf(task);
        const tempTask = [...Task]
        tempTask[index].completed = !tempTask[index].completed;
        setTask(tempTask)
    }

    function deleteTask(task) {
        console.log('Tarea borrada: ', task);
        const index = Task.indexOf(task);
        const tempTask = [...Task];
        tempTask.splice(index, 1);
        setTask(tempTask);
    }

    function addTask(task) {
        console.log('Tarea agregada: ', task);
        //const index = Task.indexOf(task);
        const tempTask = [...Task];
        tempTask.push(task);
        setTask(tempTask);
    }

    const Table = () => {

        return(

        <table>
            <thead>
                <tr>
                    <th scope='col'>Titulo</th>
                    <th scope='col'>Descripcion</th>
                    <th scope='col'>Prioridad</th>
                    <th scope='col'>Acciones</th>

                 </tr>
            </thead>
            <tbody>

                {Task.map((task, index) => {
                    return(

                        <TaskComponent 
                            key={index}
                            task= {task}
                            complete={completeTask}
                            remove={deleteTask}
                            >                                   
                        </TaskComponent>
                    )
                })}

            </tbody>
        </table>
        )
    }

    let taskTable;

    if(Task.length > 0){

        taskTable = <Table></Table>
    } else{

        taskTable = (
            <div>
                <h3>No hay ninguna tarea!</h3>
                <h4>Por favor ingrese una nueva tarea</h4>
            </div>
        )
    }

    const loadingStyle = {
        
        color: 'grey',
        fontsize: '30px',
        fontWeight: 'bold'
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Tu tarea:</h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position: 'relative', height: '400px'}}>
                        {loading ? (<p style={loadingStyle}>Cargando tareas...</p>) : taskTable}
                    </div>                   
                </div>
            </div>
            {/* TODO: Aplicar un Map/for para renderizar una lista*/}
            <TaskForm add={addTask} length={Task.length}></TaskForm>
        </div>
    );
};

export default TaskListComponent;
