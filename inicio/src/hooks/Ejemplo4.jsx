/* Ejemplo para entender el uso de props.children */
import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
           <h1>Ejemplo de children props</h1>
           <h2>
            Nombre: {props.nombre}

           </h2>
           {/* props.children pintaran por defecto aquello q se encuentre entre etiquetas apertura y cierre 
           del componente de orden superior  */}
           {props.children}
        </div>
    );
}

export default Ejemplo4;
