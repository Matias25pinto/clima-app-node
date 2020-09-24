const axios = require('axios');

// cuando una funcion es async es porque adentro contiene una promesa, una funcion async devuelve una Promesa
const getLugarLatLng = async(direccion) => {
    // Convertimos nuestros string en un URL con una funcion de JS encodeURI(string);
    const encodeUrl = encodeURI(direccion);
    //console.log(encodeUrl);
    //En mi aso use argv.direccion en la url porque daba error en geocode.xyz, con el formato de url

    // Para hacer una peticion GET
    const instance = axios.create({
        baseURL: `https://geocode.xyz/Hauptstr.,+57632+"${ direccion }"?json=1`,
        //timeout: 1000, // para configurar el tiempo de respuesta
        //headers: { 'X-Custom-Header': 'foobar' } // Para configurar encabezado si es que tiene
    });

    const resp = await instance.get(); // utilizo await para indicarle a la funcion asyc que debe esperar a que se termine de ejecutar esta promesa para que devuelva resultado

    const data = resp.data;

    if (data.error) {
        throw new Error(`ERROR!!!! No hay resultado para ${direccion}`);
    }

    const city = data.standard.city
    const lat = data.latt;
    const lng = data.longt;

    return {
        city,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}