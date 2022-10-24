import { LEVELS } from "./levels.enum";
/* //esta clase sera nuestra clase de tareas tendra nombre, descripcion si esta completada, urgencia.
la idea es tener una lista de tareas y una tarea, es decir, un contenedor todas las tareas y un componente
como tarea. */
export class Task{
    name='';
    description='';
    completed = false;
    level = LEVELS.NORMAL; //por defecto sera normal

    constructor(name, description, completed, level){
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.level = level;  
    }
}
