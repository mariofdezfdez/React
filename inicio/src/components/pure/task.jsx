/* //lo primero creamos el componente (rfc), nuesto componente task va recibir unas props, estas props
recibira una tarea, este componente puro le va pasar la tarea en formato de prop */
import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

/* //con esto imprimos una tarea por props, es decir cuando yo tengo mi task-list le pasamos una instacia de task,
la tarea */
const TaskComponent = ({task})=> { //podria poner props, pero lo llamo task, recordar que esto es una prop
    return (
        <div>
            <h2>
                Nombre: {task.name}
            </h2>
            <h3>
                Descripción: {task.description}
            </h3>
            <h4>
                Nivel: {task.level}
            </h4>
            <h5>
                this task is: {task.completed ?'COMPLETED' : 'PENDING'}
            </h5>
        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)

};

export default TaskComponent;
