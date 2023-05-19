import Container from '../components/Container';
import Head from 'next/head';
import estilos from '../public/css/style.module.css'
import React, { useState } from 'react';
import Router from 'next/router';
import { MensajeError } from '../components/ui/Formulario';

import firebase from '../firebase';

// validaciones
import useValidacion from '../hooks/useValidacion';
import validarCrearCuenta from '../validacion/validacionCrearCuenta'

const STATE_INICIAL = {
    nombre: '',
    email: '',
    password: ''
}


const signin = () => {

    const [error, guardarError] = useState(false);

    const { valores, errores, handleSubmit, handleChange, handleBlur } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);

    const { nombre, email, password } = valores;

    async function crearCuenta() {
        try {
            await firebase.registrar(nombre, email, password);
            Router.push('/');
        } catch (error) {
            console.error('Hubo un error al crear el usuario ', error.message);
            guardarError(error.message);
        }
    }

    return (

        <Container>
            <Head>
                <title>Pixel Arcade - Sign in </title>
            </Head>



            <div className={estilos.indexCoverBack}>
                <div class="d-flex justify-content-center align-items-center pt-5">
                    <div class="card p-4 shadow">
                        <h1 class="text-center">Crear Cuenta</h1>
                        <form onSubmit={handleSubmit} noValidate>
                            <div class="mb-3">
                                <label for="nombre" class="form-label">Nombre</label>
                                <input type="text" id="nombre" class="form-control" placeholder="Tu Nombre" name="nombre" value={nombre} onChange={handleChange} />
                            </div>

                            {errores.nombre && <MensajeError>{errores.nombre}</MensajeError>}

                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" id="email" class="form-control" placeholder="Tu Email" name="email" value={email} onChange={handleChange} />
                            </div>
                            {errores.email && <MensajeError>{errores.email}</MensajeError>}

                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" id="password" class="form-control" placeholder="Tu Password" name="password" value={password} onChange={handleChange} />
                            </div>
                            {errores.password && <MensajeError>{errores.password}</MensajeError>}

                            <input type="submit" class="btn btn-primary" value="Crear Cuenta" />
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default signin;