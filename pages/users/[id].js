import axios from "axios";
import Container from '../../components/Container';
import { useRouter } from "next/router";

//Muestra la informacion del usuario
function detalles({ usuario }) {
    const router = useRouter();
    const handleDelete = async (id) => {
        await axios.delete(`/api/users/${id}`);
        router.push('/admin')
    }
    return (
        <Container>
            <div>
                <h1>Nombre: {usuario.nombre}</h1>
                <h1>email: {usuario.email}</h1>
                <h1>edad: {usuario.edad}</h1>
            </div>

            {/* 
            Crear y borrar datos, proximamente....

            <button
                className="bg-red-500 hover:bg-red-700 py-2 px-4 rounded focus:outline-none font-bold text-white"
                onClick={() => handleDelete(usuario.id)}
            >
                Borrar Datos
            </button>
            <button
                className="bg-gray-500 hover:bg-gray-700 ml-2 py-2 px-4 rounded focus:outline-none font-bold text-white"
                onClick={() => router.push(`/usuarios/editar/${usuario.id}`)}
            >
                Editar Datos
            </button> */}

        </Container>
    )
}

export const getServerSideProps = async (context) => {
    const { data: usuario } = await axios.get('http://localhost:3000/api/users/' + context.query.id);
    return {
        props: {
            usuario,
        }
    }
}

export default detalles;