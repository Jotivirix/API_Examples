//API Empleada --> https://rapidapi.com/IMDb-API/api/imdb-api1
//Documentacion de la API especifica --> https://imdb-api.com/api/#YouTubeTrailer-header

const axios = require('axios');

const getTrailerYoutube = async (idPelicula) => {

    const encodedURL = encodeURI(idPelicula);

    const instance = axios.create({
        baseURL: `https://imdb-api.com/en/API/YouTubeTrailer/k_N5si4CuK/${encodedURL}`,
        headers: { 'x-rapidapi-key': 'ada5200c0bmsh27a99582e7bf53ap139fccjsnfca79f88e22a', 'x-rapidapi-host': 'imdb-api1.p.rapidapi.com' }
    });

    const response = await instance.get()

    if (response.data.length === 0) {
        throw new Error(`No existen películas con el ID ${idPelicula} en IMDB por lo que no se ha podido encontrar el trailer`);
    }

    const data = response.data;
    const year = data.year;
    const trailer = data.videoUrl;

    return {
        year,
        trailer
    };

}

module.exports = {
    getTrailerYoutube
}
