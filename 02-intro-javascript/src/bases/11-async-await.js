const getImagen = async () => {
    try {
        const api_key = 'EzcHMxU3qaKdRH1pC0KHEukwzfSwwlG0';
        const url = 'https://api.giphy.com/v1/gifs/random';
        
        const response = await fetch(`${url}?api_key=${api_key}`);
        // const data = await response.json();
        // const urlImagen = data.data.images.original.url;
        const { data } = await response.json();
        const urlImagen = data.images.original.url;
    
        console.log(urlImagen);
        const img = document.createElement('img');
        img.src = urlImagen;
    
        document.body.append(img);
    } catch (error) {
        // podria meter una imagen por defecto
        console.warn('Error: ', error);
    }
};

getImagen();