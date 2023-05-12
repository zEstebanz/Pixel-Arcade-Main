import {pool} from '../../config/db'

export default function hanlder(req, res) {
    pool.query('SELECT NOW()')

    res.status(200).json({ name: 'Hello World'})
}