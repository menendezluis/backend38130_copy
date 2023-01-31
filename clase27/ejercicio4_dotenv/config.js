const dotenv = require('dotenv');

dotenv.config();

const modo = process.env.MODO ?? 'prod';
const puerto = Number(process.env.PUERTO ?? 0);
const debug = process.env.DEBUG == 'true' ?? false;

console.log({ modo, puerto, debug });