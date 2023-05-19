import { useContext } from 'react'
import estilos from '../public/css/style.module.css'
import Link from 'next/link'
import { FirebaseContext } from '../firebase'

const Navigation = () => {

    const { usuario, firebase } = useContext(FirebaseContext);

    return (
        <nav className={`${estilos.navCustom} navbar navbar-expand-lg navbar-light `}>

            <div className="container-fluid">
                <Link href="/" className={`${estilos.navLogoCustom} navbar-brand`}>
                    Pixel Arcade
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className={`${estilos.btnPixelCustom3} nav-item`}>
                            <Link href="/" className="nav-link">
                                Home
                            </Link>
                        </li>

                        <li className={`${estilos.btnPixelCustom2} nav-item`}>
                            <Link href="/about" className="nav-link">
                                About
                            </Link>
                        </li>
                        <li className={`${estilos.btnPixelCustom1} nav-item`}>
                            <Link href="/contact" className="nav-link">
                                Contact
                            </Link>
                        </li>

                        {/* Si existe el usuario entonces */}
                        {usuario ? (
                            <ul className="navbar-nav ms-auto">

                                <li className={`${estilos.btnPixelCustom3} nav-item`}>
                                    <Link href="/game" className="nav-link">
                                        Games
                                    </Link>
                                </li>

                                <li className={`${estilos.btnPixelCustom2} nav-item`}>
                                    <Link href="/turnos" className="nav-link">
                                        Turnos
                                    </Link>
                                </li>

                                <li className={`${estilos.btnPixelCustom1} nav-item`}>
                                    <button className="nav-link" onClick={() => firebase.cerrarSesion()}>Cerrar Sesión</button>
                                </li>
                            </ul>
                        ) : (
                            <ul className="navbar-nav ms-auto">
                                <li className={`${estilos.btnPixelCustom1} nav-item`}>
                                    <Link href="/signin" className="nav-link">
                                        Sign in
                                    </Link>
                                </li>

                                <li className={`${estilos.btnPixelCustom2} nav-item`}>
                                    <Link href="/login" className="nav-link">
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        )}


                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;