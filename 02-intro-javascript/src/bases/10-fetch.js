// https://developers.giphy.com/
// Request URL[genérico]: https://api.giphy.com

// endpoint: https://developers.giphy.com/docs/api/endpoint/#random
// Requst URL Random Endpoint: api.giphy.com/v1/gifs/random	

// https://api.giphy.com/v1/gifs/random?api_key=EzcHMxU3qaKdRH1pC0KHEukwzfSwwlG0

const api_key = 'EzcHMxU3qaKdRH1pC0KHEukwzfSwwlG0';
const url = 'https://api.giphy.com/v1/gifs/random';

const request = fetch(`${url}?api_key=${api_key}`); // Promise<Response>

// const callbackThen = (resp) => {
//     // console.log(resp);
//     // uso otra Promise para obtener lo que está en el ReadeableStream
//     resp.json() // retorna una promesa que resulve cualquier cosa
//         .then(data => console.log('Data', data))
//         .catch(console.warn);
// };

// request.then(callbackThen).catch(console.warn);

// Forma reducida
// request
//     .then(resp => resp.json())    //promesas en cadena
//     .then(data => console.log('Data', data.data))
//     .catch(console.warn);   //este catch atrapa todo

request
    .then(resp => resp.json())    //promesas en cadena
    .then(({data}) => {
        console.log('Data', data.images.original.url);
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);   //e