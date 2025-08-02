const personajes = ['Goku', 'Vegueta', 'Trunks'];

console.log(personajes[0]);

// quiero cada posicion del array en una cte

const [ , , p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

// const arr = retornaArreglo();
const [letras, numeros] = retornaArreglo();

const useState = (valor) => {
    return [valor, () => {console.log('Hola Mundo')}];
}
const arr = useState('Goku');
arr[1]();

const [, holaMundo] = useState('Goku');
holaMundo();

const useStateTarea = (nombre) => {
    return [nombre, () => console.log("Cambie el nombre " + nombre)];
}

const [nombre, setNombre] = useStateTarea('Agustin');
console.log(nombre);