const activo = false;

// const mensaje = activo ? 'Activo' : 'Inactivo';

// Si solo quiero ejecutar una parte
    // Como NO HACERLO
    // const mensaje = activo ? 'Activo' : null;

const mensaje = activo && 'Activo';

console.log(mensaje);   // EQUIVALENTE => activo ? 'Activo' : false;

