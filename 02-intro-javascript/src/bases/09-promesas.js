import { getHeroeById } from './08-imp-exp'
import { heroes } from '../data/heroes';

// resolve y reject tambien son callbacks
// const callback = (resolve, reject) => {
//     setTimeout(
//         () => {
//             // console.log('2 segundos después')
//             // resolve();

//             const heroe = getHeroeById(200);
//             console.log(heroe);
//             if (!heroe) {
//                 reject('Error: No se pudo encontrar el heroe');
//             }
//             resolve(heroe); // transfiere el valor al then
//         }, 2000
//     );
// };

// const funcionAEjecutarSiEstoyEnEstadoFulfilled = (heroe) => {
//     // console.log('ejecutando Then de la promesa');
//     console.log('heroe', heroe);
// };

// const funcionAEjecutarSiEstoyEnEstadoRejected = (errorMsg) => {
//     console.warn(errorMsg);
// };

// const promesa = new Promise(callback);  // son async por naturaleza

// promesa
// .then(funcionAEjecutarSiEstoyEnEstadoFulfilled)
// .catch(funcionAEjecutarSiEstoyEnEstadoRejected);

const getHeroeByIdAsync = (id) => {
    const callback = (resolve, reject) => {
        setTimeout(
            () => {
                // console.log('2 segundos después')
                // resolve();

                const heroe = getHeroeById(id);
                console.log(heroe);
                if (!heroe) {
                    reject('Error: No se pudo encontrar el heroe');
                }
                resolve(heroe); // transfiere el valor al then
            }, 2000
        );
    };  

    const promesa = new Promise(callback);  // son async por naturaleza

    return promesa;
};

const idHeroe = 2;
// getHeroeByIdAsync(idHeroe)
//     .then((heroe) => console.log('Heroe', heroe))
//     .catch((errorMsg) => console.warn(errorMsg)); 
// no tengo ni then, ni finally, ni catch
// SOLUCION: hago que la funcion retorne la promesa => lo tengo

// el then y el catch hacen el pasamanos a las funciones directamente
getHeroeByIdAsync(idHeroe)
    .then(console.log)
    .catch(console.warn);