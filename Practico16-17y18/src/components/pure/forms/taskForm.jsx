import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { level } from '../../../models/levels.enum';
import { task } from '../../../models/task.class';

const TaskForm = ({add, length}) => {

    const nameRef = useRef('');
    const descRef = useRef('');
    const levelRef = useRef(level.Normal);

    function addTask(e) {
        e.preventDefault();
        const newTask = new task(nameRef.current.value,
                                 descRef.current.value,
                                 false,
                                 levelRef.current.value);
        add(newTask);
    }

    const normalStyle = {

        color: 'blue',
        fontWeight: 'bold'
    }

    const urgentStyle = {

        color: 'yellow',
        fontWeight: 'bold'
    }

    const bloqStyle = {

        color: 'red',
        fontWeight: 'bold'
    }

    return (

        <form onSubmit={addTask} className='d-flex justify-content-center align-item-center mb-4'>
            <div className='form-outline flex-fill'>
                <input placeholder='Ingrese nombre' ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus/>
                <input placeholder='Ingrese descripcion' ref={descRef} id='inputDesc' type='text' className='form-control form-control-lg' required/>
                <select className='form-control form-control-lg' placeholder='Seleccione prioridad' ref={levelRef} defaultValue={level.Normal} id='selectLevel'>
                    <option style={normalStyle} value={level.Normal}>Normal</option>
                    <option style={urgentStyle} value={level.Urgente}>Urgente</option>
                    <option style={bloqStyle} value={level.Blocking}>Blocking</option>
                </select>
                <button type='submit' className='btn btn-success btn-lg ms-2'>
                    {length ? 'Agregar' : 'Crear primera tarea'}
                </button>
            </div>
        </form>
    );
}

TaskForm.protoTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default TaskForm;
