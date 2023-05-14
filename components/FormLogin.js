import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import estilos from '../public/css/style.module.css';
import axios from 'axios';

export default function FormLogin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { error } = await verifyCredentials(email, password);

        if (error) {
            setError(error);
            return;
        }

        // Aquí es donde podrías redirigir al usuario a la página de inicio de la aplicación
        window.location.href = '/';

    };

    return (
        <div className={estilos.indexCoverBack}>

            <div className={`${estilos.formSignin} container pt-5 pb-5`}>
                <h2 className={`${estilos.textSubTituloPixel}`}>Iniciar Seción</h2>

                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <form className={`${estilos.formSigninText}`} onSubmit={handleSubmit}>

                            <div className="mb-1">
                                <label htmlFor="email" className="form-label">Correo electrónico</label>
                                <input type="email" className="form-control" id="email" name="email" required onChange={handleEmailChange} value={email} />
                            </div>
                            <div className="mb-1">
                                <label htmlFor="password" className="form-label">Contraseña</label>
                                <input type="password" className="form-control" id="password" name="password" required onChange={handlePasswordChange} value={password} />
                            </div>

                            <button type="submit" className={`${estilos.formSigninText} nes-btn mt-4`} >Ingresar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}