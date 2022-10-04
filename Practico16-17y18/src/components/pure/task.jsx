import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { task } from '../../models/task.class';
import '../../styles/task.scss';
import { level } from '../../models/levels.enum';


const TaskComponent = ({task, complete, remove}) => {

    useEffect(() => {
        console.log('Tarea creada');
        return () => {
            console.log(`Tarea: ${task.name} se va a desmontar `);
        };
    }, [task]);

    function taskLevelBadge(){

        switch (task.level) {
            case level.Normal:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {task.level}
                        </span>
                    </h6>
                )
                
            case level.Urgente:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                    </h6>
                )

            case level.Blocking:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {task.level}
                        </span>
                    </h6>
                )

            default:
                break;
        }
    }

    function taskIconoCompletado(params) {

        if (task.completed) {
            return(
                <i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>
            )} else {
                return (
                    <i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{color: 'red'}}></i>
                )}
        
    }

    const taskCompleted = {

        color: 'grey',
        textDecoration: 'line-through'

    }

    const taskPending = {
        
        color: 'red',
        fontWeight: 'bold'
    }

    return (

        <tr className='fw-normal' style={task.completed ? taskCompleted : taskPending}>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span className='ms-2'>{task.description}</span>
            </td>
            <td className='align-middle'>
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>

                {taskIconoCompletado()}

                <i className='bi-trash task-action' style={{color: 'tomato', fontSize: '20px'}} onClick={() => remove(task)}></i>

            </td>
        </tr>

    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(task).isRequired,
    complete: PropTypes.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
