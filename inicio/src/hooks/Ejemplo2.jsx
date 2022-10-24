/**
 * Ejemplo de uso de:
 * - useState()
 * - useRef()   - identifica valores espeficos, valores dentro de la vista
 * - useEffect() - nos vale para actualizar cambios de vista
 */
//empezamos como siempre usando un rfc, elegir un componente de tipo funcion
import React, {useState, useRef, useEffect} from 'react'; //nos traemos los hooks

const Ejemplo2 = () => {
    //vamos a crear dos contadores distintos con un estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //vamos a crear una referencia con useRef() para asociar una variable con un elemento del Dom componente(html)
    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1 +1);
    }

    function incrementar2(){
        setContador2(contador2 +1);
    }

    //trabajando con UseEffect, caso 1 ejecutar siempre un snippet de codigo
    //cada vez que haya un cambio en el estado del componente, se ejecuta aquello que este dentro del useEffect

   /*  useEffect(() => {
        console.log('cambio en el estado del componente');
        console.log('mostrando referencia a elemento del DOM')
        console.log(miRef);   
    }) */

   /*caso 2: ejecutar solo cuando cambie CONTADOR1
    cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
    en caso que cambie el contador2, no habra ejecucion*/
    
    useEffect(() => { //el useeffct recibe por parametro un callback, funcion q se ejecutara a posteriori
                        //y las dependencias, las listas en este caso sera el contador1
        console.log('cambio en el estado del contador 1');
        console.log('mostrando referencia a elemento del DOM')
        console.log(miRef);
    }, [contador1])

    

    return (
        <div>
            <h1>Ejemplo del useState(), useEffect() y useRef()</h1>
            <h2>Contador1: {contador1}</h2>
            <h2>Contador2: {contador2}</h2>
            {/* Elemento referenciado sera un h4 que queremos saber su contenido, usamos una
            propiedad que se llama ref*/}
            <h4 ref={miRef}>
                ejemplo de elemento referenciado
            </h4>
            <div>
                <button onClick={incrementar1}>Incrementar contador 1</button>
                <button onClick={incrementar2}>Incrementar contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
