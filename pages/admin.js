import axios from 'axios';
import { FormSignin } from '../components/FormSignin';
import Container from '../components/Container';
import Link from 'next/link';
import estilos from '../public/css/style.module.css'

function Admin({ usuarios }) {
    return (
        <Container>
            <div className={`${estilos.indexCoverBack}`}>
                <h1 className={`${estilos.titleCover}`}>Usuarios</h1>
                {usuarios.map((usuario) => (
                    <Link href={`/users/${usuario.id}`} key={usuario.id}>
                        <div className="container">
                            <table className={`${estilos.textCustomAdmin} table`}>
                                <thead>
                                    <tr>
                                        <th>Nombre: {usuario.nombre}</th>
                                        <th>Email: {usuario.email}</th>
                                        <th>Edad: {usuario.edad} años</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Aquí se insertarán los datos de los usuarios */}
                                </tbody>
                            </table>
                        </div>
                    </Link>
                ))}
            </div>
        </Container>
    )
}
export const getServerSideProps = async (context) => {
    const { data: usuarios } = await axios.get('http://localhost:3000/api/users');
    return {
        props: {
            usuarios,
        },
    }
}

export default Admin; 