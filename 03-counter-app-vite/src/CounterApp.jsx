import { useState } from 'react';
import PropTypes from 'prop-types'

// DECLARAR FUERA la funcion, ya que cuando vuelve a renderizar el componente, necesita espacio en memoria para esa funcion
// const funcionDeAccion = (parametroEventoDeTipoMouseEventOpcional, otro) => console.log('+1', parametroEventoDeTipoMouseEventOpcional);

const CounterApp = ({ value }) => {


    const funcionDeAccion = () => {
        value = 1000;
        // Lo cambio al valor, pero no lo volvio a renderizar => SOLUCION: usar Hook
        console.log(value);
    };
    return (
        <>
            <h1>CounterApp</h1>
            <h2> { value } </h2>
            {/* <button onClick={funcionDeAccion}>Mi Boton</button> */}
            {/* los argumentos tal cual vengan de onClick van a pasar a funcionDeAccion si no especifico nada */}
            {/* <button onClick={(event) => funcionDeAccion(event, otro)}>Mi Boton</button> */}
            <button onClick={ funcionDeAccion }>Mi Boton</button>
        
        </>
    );
};

export default CounterApp;

PropTypes.CounterApp = {
    value: PropTypes.number.isRequired
};