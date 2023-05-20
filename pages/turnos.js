import React, { useContext } from 'react';
import estilos from '../public/css/style.module.css'
import Container from '../components/Container';
import Head from 'next/head';
import Link from 'next/link';
import { FirebaseContext } from '../firebase';

const turnos = () => {

    const { usuario, firebase } = useContext(FirebaseContext);

    return (

        <Container>
            <Head>
                <title>Pixel Arcade</title>
            </Head>

            <div className={estilos.indexCoverBack}>

                <h1 className={estilos.titleCover}>Pixel<span className={estilos.span}> Turnos</span></h1>

                <div>
                    <div class="d-flex justify-content-center align-items-center mt-5">
                        <div class="card p-4 shadow">
                            <h1 class="text-center">Crear Turnos</h1>
                            <form>
                                <div>
                                    <div className="mb-3">
                                        <label htmlFor="nombre" className="form-label">Nombre completo</label>
                                        <input type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre completo" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="fecha" className="form-label">Fecha del turno</label>
                                        <input type="date" className="form-control" id="fecha" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="horario" className="form-label">Horario del turno</label>
                                        <input type="time" className="form-control" id="horario" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="maquina" className="form-label">Tipo de máquina</label>
                                        <select className="form-select" id="maquina" required>
                                            <option value>Selecciona el tipo de máquina</option>
                                            <option value="consola">Consola</option>
                                            <option value="arcade">Arcade</option>
                                            <option value="otras">Otras</option>
                                            {/* Otras opciones de tipos de máquina */}
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Solicitar turno</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



        </Container>
    )
}

export default turnos;