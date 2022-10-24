//create other component type Function (rfcp)
import React, {useState }from 'react'; //Le pasamos el estado el useSate, llamado hook
import PropTypes from 'prop-types';

const GreetingF = (props) => {
    //nombre variable, funcion que la actualizara = al valor inicial
    const [age, setstate] = useState(29);

    const birthday = ()=>{ //con este metodo actualizamos el State
        setstate(age+1);
    }

    return (
    <div>
        <h1>
           hola {props.name} desde componente funcional
        </h1>
        <h2>
            tu edad es de: {age}
        </h2>
        <div>
            <button onClick={birthday}>
                cumplir años
            </button>
        </div>
    </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string

};

export default GreetingF;
