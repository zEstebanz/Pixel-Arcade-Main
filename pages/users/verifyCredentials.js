import bcrypt from 'bcryptjs'
import { pool } from '../../config/db';


export default async function verifyCredentials(username, password) {
  const { db } = await pool();

  const user = await db.collection('users').findOne({ username });

  if (!user) {
    return { error: 'Usuario no encontrado' };
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return { error: 'Contraseña incorrecta' };
  }

  return { user };
}
