import { createPool } from 'mysql2/promise';

const password1 = ''; // Contraseña vacía para la primera base de datos
const password2 = '1808'; // Contraseña '1808' para la segunda base de datos

const pool = createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: process.env.NODE_ENV === 'production' ? password2 : password1,
  database: 'pixelarcade',
});

export { pool };