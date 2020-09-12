# Empleo de API para obtención de información
## Autor: Jotivirix
## Descripción del Proyecto
Esta aplicacion nos permite consultar el año de publicacion y el trailer de una película que especificamos a la hora de ejecutar la aplicación. La consulta de la información se realiza sobre la base de datos de IMDB.

NOTA: En caso de que haya múltiples películas con el mismo nombre se obtendrá sólamente la primera por lo que no se garantiza una precisión total sobre la consulta.

Para el correcto funcionamiento de este proyecto necesitaremos tener instalado Node.js en nuestro equipo - https://nodejs.org/en/

### Recuerde instalar las librerías de Node con el comando
```
npm install
```

## Para ejecutar la aplicacion debe ejecutar el comando
```
node app -p "Titulo de la pelicula"
```

### Ejemplo
``` node app -p "Origen" ```
### El ejemplo anterior nos devuelve el siguiente resultado 
El año de publicacion de Origen fue 2010 y el trailer es: https://www.youtube.com/watch?v=Jvurpf91omw

### Se ruega encarecidamente que se autogeneren sus propias APIs en https://rapidapi.com/
### APIs empleadas - https://rapidapi.com/hmerritt/api/imdb-internet-movie-database-unofficial y https://rapidapi.com/IMDb-API/api/imdb-api1

### El uso de este código para fines lucrativos está completamente restringido

#### Este programa se utilizó siguiendo de ejemplo el código publicado por Fernando Herrera en su curso de Node.js en Udemy