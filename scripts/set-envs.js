const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();

const targetPathDev = './src/environments/environment.development.ts';
const targetPathProd = './src/environments/environment.ts';

const baseUrlDev = process.env['BASE_URL_LOCAL'];
const baseUrlProd = process.env['BASE_URL_PROD'];

const envDevFileContent = `
export const environment = {
  production: false,
  baseUrl: "${ baseUrlDev }"
};
`;

const envProdFileContent = `
export const environment = {
  production: true,
  baseUrl: "${ baseUrlProd }"
};
`;

// Creamos la carpeta environments dentro de la carpeta src.
// Si ya existe, la sobreescribimos.
mkdirSync('./src/environments', { recursive: true });

// Escribimos el contenido de la constante envDevFileContent
// dentro del archivo que esta en la ruta de la constante targetPath.
writeFileSync( targetPathDev, envDevFileContent );

// Escribimos el contenido de la constante envProdFileContent
// dentro del archivo que esta en la ruta de la constante targetPath.
writeFileSync( targetPathProd, envProdFileContent );
