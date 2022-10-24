//create first component type class class(rrcp)
import React, { Component } from 'react';
import PropTypes from 'prop-types'; //nos sirven para espeficiar el tipo de dato que le pasamos, number,string

class Greeting extends Component {
    /* //podemos tener un constructor, los componentes de tipo clase tienen constructores, propiedades de clase
    metodos clase y los de funciones son funciones tienen que devolver algo siempre.
    en los constructores podemos pasarle info, un ejemplo quiero poner hola y pasarle un nombre, hola mario
    y esa info se lo pasamos del padre*/
    constructor(props){ //las props son las propiedades que puede recibir un componente, un elemento html
        super(props); //para trabajar con las props que vengan a continuacion
        this.state={ //es un valor privado,info que tiene componente que puede modificarse para actualizar la vista
            age: 29
        }
    }
    render() {
        return ( //dentro de aqui solo podemos tener un solo elemento, div.
            <div>
                <h1>
                   hola {this.props.name} 
                </h1>
                <h2>
                    tu edad es de: {this.state.age}
                </h2>
                <div>
                    <button onClick={this.birthday}>
                        cumplir años
                    </button>
                </div>
            </div>
        );
    }
    birthday= () =>{ //funcion de tipo flecha, para hacer uso del this. la palabra reservada
        /* //usamos el setSate porque es la unica forma de actualizar la vista del valor reservado.
        le pasamos el prevSate que es el valor Previo, el valor anterior para modificarlo*/
        this.setState((prevState) =>(
            {
                age: prevState.age +1
            }
        ))       
    }
}

Greeting.propTypes = {
    name: PropTypes.string  
};

export default Greeting;


