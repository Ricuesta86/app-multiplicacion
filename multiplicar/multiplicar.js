const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        let data = '';




        if (!Number(base)) {
            reject(`La base ${base} no es un número.`);
            return;
        }

        if (!Number(limite)) {
            reject(`El limite ${limite} no es un número.`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }
        console.log("=================".green);
        console.log(`Tabla de ${base}`.green);
        console.log("=================".green);
        resolve(data);

    })
}

let crearTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base)) {
            reject(`La base ${base} no es un número.`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, err => {
            if (err) reject(err);
            resolve(`tablas-${base}-al-${limite}`);
        });
    });
}
module.exports = {
    crearTabla,
    listarTabla
}