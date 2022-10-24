/**ejemplo Hooks.
 * useState()
 * useContext()
 */
import React, { useState, useContext } from 'react';

/**
 * 
 * @returns Componente1
 * Dispone de un contexto que va tener un valor que recibe desde el padre
 */
const miContexto = React.createContext(null)

const Componente1 = () => {
    //inicializamos un estado vacio q va rellenarse con los datos del padre q me pasara el valor del token
    const state = useContext(miContexto) 
    return (
        <div>
            <h1>
                el Token es: {state.token} 
            </h1>
            {/* pintamos el componente2 */}
            <Componente2></Componente2>
        </div>
    );
};

const Componente2 = () => {
    const state = useContext(miContexto);
    return (
        <div>
            <h2>
                la sesion es: {state.sesion}
            </h2>
        </div>
    );
}



export default function MiComponenteConContexto() {
    const estadoInicial = {
        token: '1234557',
        sesion: 1
    }
    //creamos estado de este componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    //funcion para actualizar nuevos valores, estos datos de sesion pueda acceder cualquier componente por debajo
    function actualizarSesion(){
        setSessionData(
            {
                token:'JWT123345',
                sesion: sessionData.sesion + 1 //la idea que cada vez q se actualice genere nuevo token e ID.
            } 
        );
    }

  return (
        <miContexto.Provider value={sessionData}>
            {/**todo lo que esta aqui dentro puede leer los datos de sessionData ademas de actualizarse,
            ademas si se actualiza, los componentes de aqui tb los actualiza */}
            <h1>Ejemplo de useState y useContext</h1>
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>Actualizar sesion</button>
        </miContexto.Provider>
    )
} 
