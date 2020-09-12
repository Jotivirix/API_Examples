
const pelicula = require('./peliculas/pelicula');
const trailer = require('./trailers/trailer');

const argv = require('yargs').options({
    pelicula: {
        alias: 'p',
        descripcion: 'Nombre de la pelicula de la que queremos informacion',
        demand: true
    }
}).argv;

const getInfo = async (peli) => {

    try {
        const IDPelicula = await pelicula.getIDPeliculaIMDB(peli);
        const datosPeli = await trailer.getTrailerYoutube(IDPelicula.id);
        return `El año de publicacion de ${peli} fue ${datosPeli.year} y el trailer es: ${datosPeli.trailer}`;
    }
    catch (e) {
        return `No se obtuvieron datos para la pelicula ${pelicula}`;
    }
    
    //Salida
    //El año de estreno de la pelicula XXXX fue XXXX
    //El trailer de la película es XXX
}

getInfo(argv.pelicula).then(console.log).catch(console.log);

//Obtenemos el ID de la pelicula mediante su titulo
//pelicula.getIDPeliculaIMDB(argv.pelicula).then(console.log);

//Obtenemos el año de estreno y su trailer en Youtube
//trailer.getTrailerYoutube('tt0087332').then(console.log);
