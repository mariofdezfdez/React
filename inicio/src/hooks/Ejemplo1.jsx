/* ejemplo de uso del Hook useState, crear un componente de tipo funcion y accder a su estado privado
a traves de un hook y tb modificarlo */

import React, {useState} from 'react'; //para trabajar con hooks hay q importarlos, siempre empiezan por USE.

const Ejemplo1 = () => { //no me interesa trabajar con pops
    //Valor inicial para un contador
    const valorInicial = 0;

    //Valor inicial para una persona
    const personaInicial = {
        nombre : 'Mario',
        email : 'mariofernandezfernandez1@gmail.com'
    }
    /*queremos que el valor inicial y la persona inicial sean parte del estado del componente para asi gestionar
    su cambio y que este se vea reflejado en la vista del componente
    const [nombreVariable, funcionParaCambiar] = useState(valorInicial) */
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    //funcion para actualizar el estado privado que contiene el contador
    function incrementarContador(){
        setContador(contador + 1); //funcion para cambiar(nuevoValor)
    }
    function actualizarPersona(){ //funcion para actualizar es estado de persona en el componente
        setPersona(
            {
                nombre: 'pepe',
                email: 'pepe@gmail.com'
            }
        )
    }


    return (
        <div>
            <h1>Ejemplo del useState()</h1>
            <h2>Contador: {contador}</h2>
            <h2>Datos de la Persona</h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h3>Email: {persona.email}</h3>
            {/* haremos un bloque de botones para actualizar el estado del componente */}
            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Actualizar Persona</button>

        </div>
    );
}

export default Ejemplo1;

