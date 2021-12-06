const { argv } = require('./config/yargs');
const colors = require('colors/safe');
const { crearTabla, listarTabla } = require("./multiplicar/multiplicar");



// console.log(argv)
let commando = argv._[0];

switch (commando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(msg => console.log(msg))
            .catch(err => console.log(err))
        break;

    case 'crear':
        crearTabla(argv.base, argv.limite)
            .then(msg => console.log('Archivo creado:', colors.green(msg + '.txt')))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Commando no reconocido');
}




// let parametro = process.argv[2];
// let base = parametro.split('=')[1]


// console.log(base);
// let base = '7';
// crearTabla(base)
//     .then(msg => console.log(`
// Archivo creado: $ { msg }.txt `))
//     .catch(err => console.log(err));