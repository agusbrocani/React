// import { heroes } from '../data/heroes'

// export const getHeroeById = (id) => {
//     return heroes.find((h) => h.id === id);
// }

// console.log(getHeroeById(2));

// console.log("Comparacion de findIndex con indexOf:");
// // const objetoHeroe = getHeroeById(2);
// const objetoHeroe = { id: 2, name: 'Spiderman', owner: 'Marvel' };
// const indiceHeroe = heroes.indexOf(objetoHeroe);
// console.log("Indice resultado: ", indiceHeroe);
// console.log(heroes[indiceHeroe]);

// export const getHeroeByOwner = (owner) => heroes.filter((h) => h.owner === owner);

// console.log(getHeroeByOwner('DC'));

import { heroes } from '../data/heroes'

export const getHeroeById = (id) => {
    return heroes.find((h) => h.id === id);
}

export const getHeroeByOwner = (owner) => heroes.filter((h) => h.owner === owner);
