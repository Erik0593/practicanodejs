//tenemos que llamar a otros archivos de otro devs para poderlos ocupar
//en este caso llamamos a 'yargs-parser' para que nos separe el nombre de --name=Erik 
//en el segundo estamos llamando el codigo para ponerle color al texto en la terminal
const params = require('yargs-parser')(process.argv.slice(2))
const colors = require('colors')

console.log('params: ',params)

const nombres = [
    'carlos',
    'Sara',
    'Erik',
    'Ivonne',
    'Alberto',
    'Leo',
    'Alex',
    'Airy',
    'Freddy',
    'Jose'
]

const koderName = params.name
const exists = nombres.includes(koderName)

if(exists){
    //aqui estamos poniendo color a el texto, se debe de agregar .color 
    //despues de el texto
    console.log(`El nombre ${koderName} existe`.green)
}else{
    console.log(`Yo ni te topo`.red)
}

/*
un script que reciba mi nombre como parametro y que nos salude con colores de arcoiris
node saludo.js --nombre=erik
-Debe ser un nuevo proyecto de node
-Al termina, compartir el repositorio de Github
-- No Este versionada la carpeta node_modules
---Que corra el proyecto
*/