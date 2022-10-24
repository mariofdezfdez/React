import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import {Task}  from '../../models/task.class';
import TaskComponent from '../pure/task';
//no es necesario usar los propTypes

const TaskListComponent = () => {
    //tiene una tarea por defecto para hacer la prueba
    const defaultTask = new Task('mario', 'descripcion', true, LEVELS.NORMAL);  
    return (
        <div>
            <div>
                <h1>
                    your tasks:
                </h1>
            </div>
            {/*imprimos la tarea inferior llamada taskComponent y le pasamos por props la tarea q quiera*/}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
