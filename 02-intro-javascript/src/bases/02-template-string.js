const nombre = 'Agustin';
const apellido = 'Brocani';
const nombreCompleto = `
${nombre} 
${apellido}
${1 + 1}`;
console.log(nombreCompleto);

function getSaludo(nombre) {
    // nombre + undefined (SI NO LE ENVIE NADA)
    return 'Hello ' + nombre;
}

console.log(`Este es un texto: ${getSaludo('Agustin Brocani')}`);
