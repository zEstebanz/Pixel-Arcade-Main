import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import estilos from '../public/css/style.module.css';
import axios from 'axios';

export function FormSignin() {
    const router = useRouter();

    // Estado
    const [usuario, setUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        edad: ''
    });

    // Actualizar Usuarios
    useEffect(() => {
        const fetchUsuario = async (id) => {
            try {
                const { data } = await axios.get("/api/users/" + id);
                setUsuario(data);
            } catch (error) {
                console.error(error.message);
            }
        };

        if (router.query.id) {
            fetchUsuario(router.query.id);
        }
    }, [router.query.id]);

    // Evento de cambio en el formulario
    const handleChange = ({ target: { name, value } }) => {
        setUsuario({ ...usuario, [name]: value });
    };

    // Evento de envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (router.query.id) {
            console.log(`actualizando datos`);
            const res = await axios.put(`/api/users/${router.query.id}`, {
                nombre: usuario.nombre,
                email: usuario.email,
                password: usuario.password,
                edad: usuario.edad
            });
            console.log(res);
        } else {
            const res = await axios.post('/api/users', usuario);
            console.log(res);
        }

        router.push('/game');
    };

    return (

        <div className={estilos.indexCoverBack}>

            <div className={`${estilos.formSignin} container pt-5 pb-5`}>
                <h2 className={`${estilos.textSubTituloPixel}`}>Registrate</h2>

                <div className="row justify-content-center">
                    <div className="col-lg-6">

                        <form className={`${estilos.formSigninText}`} onSubmit={handleSubmit}>
                            <div className="mb-1">
                                <label htmlFor="nombre" className="form-label">Nombre completo</label>
                                <input type="text" className="form-control" id="nombre" name="nombre" onChange={handleChange} value={usuario.nombre} required />
                            </div>
                            <div className="mb-1">
                                <label htmlFor="email" className="form-label">Correo electrónico</label>
                                <input type="email" className="form-control" id="email" name="email" onChange={handleChange} value={usuario.email} required />
                            </div>
                            <div className="mb-1">
                                <label htmlFor="password" className="form-label">Contraseña</label>
                                <input type="password" className="form-control" id="password" name="password" onChange={handleChange} value={usuario.password} required />
                            </div>
                            <div className="mb-1">
                                <label htmlFor="edad" className="form-label">Edad</label>
                                <input type="number" className="form-control" id="edad" name="edad" min={10} onChange={handleChange} value={usuario.edad} required />
                            </div>
                            <button type="submit" className={`${estilos.formSigninText} nes-btn mt-4`}>Registrarse
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>

    )
}