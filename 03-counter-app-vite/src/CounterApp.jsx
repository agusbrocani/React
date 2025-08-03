import { useState } from 'react';
import PropTypes from 'prop-types'

// DECLARAR FUERA la funcion, ya que cuando vuelve a renderizar el componente, necesita espacio en memoria para esa funcion
// const funcionDeAccion = (parametroEventoDeTipoMouseEventOpcional, otro) => console.log('+1', parametroEventoDeTipoMouseEventOpcional);

const CounterApp = ({ value }) => {
    const [counter, setCounter] = useState(value);

    // const funcionDeAccion = () => {
    //     value = 1000
    //     // Lo cambio al valor, pero no lo volvio a renderizar => SOLUCION: usar Hook
    //     console.log(value);
    // };

    // const funcionDeAccion = () => {
    //     setCounter(counter + 1);
    //     // Lo cambio al valor, pero no lo volvio a renderizar => SOLUCION: usar Hook
    //     console.log(counter);
    // };

    console.log('render');
    const handleAdd = () => {
        setCounter((c) => c + 1);
    };

    const handleSubtract = () => {
        setCounter((c) => c > 0 ? c - 1 : 0);
    }

    const handleReset = () => {
        setCounter(0);
    }

    return (
        <>
            <h1>CounterApp</h1>
            {/* <h2> { value } </h2> */}
            <h2> { counter } </h2>
            {/* <button onClick={funcionDeAccion}>Mi Boton</button> */}
            {/* los argumentos tal cual vengan de onClick van a pasar a funcionDeAccion si no especifico nada */}
            {/* <button onClick={(event) => funcionDeAccion(event, otro)}>Mi Boton</button> */}

            {/* <button onClick={ funcionDeAccion }>Mi Boton</button> */}
        
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleSubtract }>-1</button>
            <button onClick={ handleReset }>Reset</button>

        </>
    );
};

export default CounterApp;

PropTypes.CounterApp = {
    value: PropTypes.number.isRequired
};