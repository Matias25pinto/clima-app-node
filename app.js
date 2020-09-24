const lugar = require('./lugar/lugar'); // importar lugar
const clima = require('./clima/clima');
// si no se quiere usar un comando intermedio en vez de usar .commod, se puede usar .option
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `La temperatura de ${coords.city} es de ${temp}°C`;
    } catch (error) {
        return `ERROR!! no se pudo determinar el clima de ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(data => console.log(data))
    .catch(err => console.log(err));