import { useContext } from 'react';
import estilos from '../public/css/style.module.css'
import Link from 'next/link';
import { FirebaseContext } from '../firebase'


const Footer = () => {
    const { usuario, firebase } = useContext(FirebaseContext);

    return (
        <footer className={`${estilos.footerCustom} text-white py-5`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h4 className="mb-4">Contacto</h4>
                        <ul className="list-unstyled">
                            <li>Pixel Arcade</li>
                            <li>Calle Falsa 123</li>
                            <li>contacto@pixelarcade.com</li>
                            <li>555-1234</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4 className="mb-4">Redes sociales</h4>
                        <ul className="list-unstyled">

                            <li><a href="#" className={estilos.footerCustomRS}><i class="nes-icon instagram is-large"></i></a></li>
                            <li><a href="#" className={estilos.footerCustomRS}> <i class="nes-icon twitter is-large"></i></a></li>
                            <li><a href="#" className={estilos.footerCustomRS}><i class="nes-icon whatsapp is-large"></i></a></li>

                        </ul>
                    </div>

                    {/* Si existe el usuario entonces */}
                    {usuario ? (
                        <div className="col-md-4">
                            <h4 className="mb-4">Cerrar Sesión</h4>
                            <Link class={`${estilos.btnCustomLargo} nes-btn`} href="/signin">SignOut</Link>
                        </div>
                    ) : (
                        <div className="col-md-4">
                            <h4 className="mb-4">Signin</h4>
                            <Link class={`${estilos.btnCustomLargo} nes-btn`} href="/signin">Signin</Link>
                            <hr></hr>
                            <h4 className="mb-4">Login</h4>
                            <Link class={`${estilos.btnCustomLargo} nes-btn`} href="/login">Login</Link>
                        </div>
                    )}

                </div>
                <hr />
                <div className="text-center">
                    <p className="mb-0">© 2023 Pixel Arcade. Trabajo Practico Modelado de Software</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;