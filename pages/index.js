import React, { useContext } from 'react';
import estilos from '../public/css/style.module.css'
import Container from '../components/Container';
import Head from 'next/head';
import Link from 'next/link';
import { FirebaseContext } from '../firebase';

const index = () => {

    const { usuario, firebase } = useContext(FirebaseContext);

    return (

        <Container>
            <Head>
                <title>Pixel Arcade</title>
            </Head>

            <div className={estilos.indexCoverBack}>

                <h1 className={estilos.titleCover}>Pixel<span className={estilos.span}> Arcade</span></h1>

                {usuario ? (
                    <>
                        <section className={`${estilos.welcomeCustom} nes-container with-title is-centered`}>
                            <h2 className={`${estilos.titleCustom} title`}>Welcome {usuario.displayName} to Pixel Arcade</h2>
                            <p>Hola {usuario.displayName}!!</p>
                            <p>En Pixel Arcade, te ofrecemos una amplia selección de videojuegos emocionantes. ¡Sumérgete en el mundo de la diversión y la aventura!</p>
                            <p>Explora nuestras diferentes categorías de juegos</p>
                            <Link href="/game" className="nes-btn is-success">Jugar ahora</Link>

                            <h2></h2>
                            <p>También queremos recordarte que puedes registrarte en nuestro sistema para solicitar turnos en nuestro local de videojuegos. ¡Aprovecha al máximo tu experiencia en Pixel Arcade!</p>
                            <Link href="/game" className="nes-btn">Pedir Turnos</Link>
                        </section>

                    </>

                ) : (
                    <>
                        <section className={`${estilos.welcomeCustom} nes-container with-title is-centered`}>
                            <h2 className={`${estilos.titleCustom} title`}>Welcome to Pixel Arcade</h2>
                            <p>Pixel Arcade es un sistema de gestión de usuarios y una plataforma online donde pueden jugar a juegos retro.</p>

                            <p>¿Quieres jugar a juegos online? Haz clic en el botón de abajo para empezar.</p>
                            <Link href="/login" className="nes-btn is-success">Jugar ahora</Link>

                            <p className='mt-5'>¿Eres Nuevo? Registrate aqui</p>
                            <Link href="/signin" className="nes-btn is-primary">Crear Cuenta</Link>

                            <p className='mt-5'>¿Ya tienes una cuenta? Inicia Sesion aqui</p>
                            <Link href="/login" className="nes-btn">Iniciar Sesión</Link>
                        </section>
                    </>
                )}

            </div>



        </Container>
    )
}

export default index;