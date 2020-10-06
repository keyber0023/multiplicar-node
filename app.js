const argv = require('./config/yargs').argv;

const { crearArchivo, listar } = require('./multiplicar/multiplicar');


switch (argv._[0]) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(response => {
                console.log(`El archivo ${response} ha sido creado`);
            })
            .catch(err => {
                console.log(err);
            });
        break;
    case 'listar':
        listar(argv.base, argv.limite);
        break;
    default:
        console.log('Comando no reconocido');

}

//  console.log(argv.base);
//  console.log(argv.limite);
/*

*/