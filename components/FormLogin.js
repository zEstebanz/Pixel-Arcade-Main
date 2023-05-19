import React, { useState } from 'react';
import Router from 'next/router';
import { MensajeError } from './ui/Formulario';
import estilos from '../public/css/style.module.css'
import firebase from '../firebase/index';

// validaciones
import useValidacion from '../hooks/useValidacion';
import validarIniciarSesion from '../validacion/validacionIniciarSesion';

const STATE_INICIAL = {
    email: '',
    password: ''
}

const FormLogin = () => {
    {

        const [error, guardarError] = useState(false);

        const { valores, errores, handleSubmit, handleChange, handleBlur } = useValidacion(STATE_INICIAL, validarIniciarSesion, iniciarSesion);

        const { email, password } = valores;

        async function iniciarSesion() {
            try {
                await firebase.login(email, password);
                Router.push('/')
            } catch (error) {
                console.error('Hubo un error al autenticar el usuario', error.message);
                guardarError(error.message);
            }
        }

        return (
            <div className={estilos.indexCoverBack}>

                <div class="d-flex justify-content-center align-items-center pt-5">
                    <div class="card p-4 shadow">
                        <h1 class="text-center">Iniciar Sesión</h1>
                        <form onSubmit={handleSubmit} noValidate>

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

                            {error && <MensajeError>{error}</MensajeError>}

                            <input type="submit" class="btn btn-primary" value="Iniciar Sesión" />
                        </form>
                    </div>
                </div>

            </div>
        )

    }
}

export default FormLogin;