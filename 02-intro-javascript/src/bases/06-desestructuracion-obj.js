const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

// const {nombre} = persona;
const {nombre:nombre2} = persona;
const {nombre, edad, clave} = persona;

console.log(nombre, edad, clave);

// const retornarPersona = (persona) => {
//     const {nombre, edad, clave} = persona;
//     console.log(nombre, edad, clave);
// };

// const retornarPersona = ({nombre, edad, clave}) => {
//     console.log(nombre, edad, clave);
// };

// const retornarPersona = ({nombre, edad, clave, rango = 'CEO'}) => {
//     console.log(nombre, edad, clave, rango);
// };

// retornarPersona(persona);

const useContext = ({nombre, edad, clave, rango = 'CEO'}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    };
};

const avenger = useContext(persona);
const {nombreClave: nombreAvenger, anios: aniosAvenger} = avenger;

// const {nombreClave, anios, latlng:{lat, lng}} = avenger;
const {nombreClave, anios, latlng} = avenger;
const {lat, lng} = latlng;

console.log(avenger.nombreClave, avenger.anios);
console.log(nombreAvenger, aniosAvenger);
console.log(lat, lng);

