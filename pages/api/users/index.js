import { pool } from '../../../config/db'

//Comunicacion con la base de datos , recibiendo y enviando iformacion
// Esta funcion stwitch que dpenediendo el metodo de pregunta, ejecuta una funcion u otra
// En caso que sea POST ejecuta la funcion guardad usuario
// En caso que sea Get ejecuta la funcion buscar usuario

export default async function handler(req, res) {
    switch (req.method) {
        case 'POST':
            return await guardar_usuario(req, res);
        case 'GET':
            return await buscar_usuario(req, res);
            default:
                break
    }
}

    // Esta funciona guarda los datos del formulario de registro en la base de datos
    const guardar_usuario = async (req, res) => {
        console.log('creando usuario')
        console.log(req.body)
        const { nombre, email,password, edad } = req.body;
        const [result] = await pool.query('INSERT INTO usuarios SET ?', {
            nombre,
            email,  
            password,
            edad
        });
        return res.status(200).json({ nombre, email, password, edad, id: result.insertId });
    }

    // Esta funciona busca los datos del formulario registrados en la base de datos
    const buscar_usuario = async (req, res) => {
        const [result] = await pool.query('SELECT * FROM usuarios');
        return res.status(200).json(result);
    }