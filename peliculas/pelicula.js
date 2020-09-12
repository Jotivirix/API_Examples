//API Empleada --> https://rapidapi.com/hmerritt/api/imdb-internet-movie-database-unofficial?endpoint=apiendpoint_712d7dac-5b49-489c-888b-04c774a2964c

const axios = require('axios');

const getIDPeliculaIMDB = async (pelicula) => {

    const encodedURL = encodeURI(pelicula);
    
    const instance = axios.create({
        baseURL: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${encodedURL}`,
        headers: {'x-rapidapi-key': 'ada5200c0bmsh27a99582e7bf53ap139fccjsnfca79f88e22a', 'x-rapidapi-host':'imdb-internet-movie-database-unofficial.p.rapidapi.com'}
    });
    
    const response = await instance.get()

    if(response.data.titles.length === 0){
        throw new Error(`No existen películas con el título ${pelicula} en IMDB`);
    }

    const data = response.data.titles[0];
    const id = data.id;

    return {
        id
    }
    
}

module.exports = {
    getIDPeliculaIMDB
}
