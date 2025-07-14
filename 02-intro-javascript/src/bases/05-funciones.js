const saludar = function(nombre) {
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

const saludar3 = (nombre) => `Hola ${nombre}`

console.log(saludar3('Agustin'));

// const getUser = () => ({
//     uid: 'AB123',
//     username: 'MiUserID'
// });

const getUser = () => {
    return ({
    uid: 'AB123',
    username: 'MiUserID'
})};

const user = getUser();
console.log(user);

// Tarea
// 1. Transformar a una funcion flecha getUsuarioActivo
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas

// function getUsuarioActivo(nombre) {
//     return {
//         uid: 'ABC567',
//         username: nombre
//     }
// }

const getUsuarioActivo = (nombre) =>({
        uid: 'ABC567',
        username: nombre
});

const usuarioActivo = getUsuarioActivo('Agustin');
console.log(usuarioActivo);