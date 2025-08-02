export const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

// import heroes fron './data/heroes'
// export default [    // defino el nombre cuando hago el import
//     {
//         id: 1,
//         name: 'Batman',
//         owner: 'DC'
//     },
//     {
//         id: 2,
//         name: 'Spiderman',
//         owner: 'Marvel'
//     },
//     {
//         id: 3,
//         name: 'Superman',
//         owner: 'DC'
//     },
//     {
//         id: 4,
//         name: 'Flash',
//         owner: 'DC'
//     },
//     {
//         id: 5,
//         name: 'Wolverine',
//         owner: 'Marvel'
//     },
// ];

const heroes2 = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

export const owners = ['DC', 'Marvel'];

// export default heroes2;
// Hago import de un default y de un elemento con export individual
// import heroes2, { owners } fron './data/heroes'

// export {
//     heroes as default,  // puedo definir que esta va a ser por defecto
//     owners
// }
// import heroes, { owners } fron './data/heroes'