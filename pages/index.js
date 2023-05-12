import estilos from '../public/css/style.module.css'
import Container from '../components/Container';
import Head from 'next/head';
import Link from 'next/link';

const index = () => {
    return (

        <Container>
            <Head>
                <title>Pixel Arcade</title>
            </Head>

            <div className={estilos.indexCoverBack}>

                <h1 className={estilos.titleCover}>Pixel<span className={estilos.span}> Arcade</span></h1>

                <section className={`${estilos.welcomeCustom} nes-container with-title is-centered`}>
                    <h2 className={`${estilos.titleCustom} title`}>Welcome to Pixel Arcade</h2>
                    <p>Pixel Arcade es un sistema de gestión de usuarios y una plataforma online donde pueden jugar a juegos retro.</p>

                    <p>¿Quieres jugar a juegos online? Haz clic en el botón de abajo para empezar.</p>
                    <Link href="game" className="nes-btn is-success">Jugar ahora</Link>

                    <p className='mt-5'>¿Eres Nuevo? Registrate aqui</p>
                    <Link href="/signin" className="nes-btn is-primary">Signin</Link>

                    <p className='mt-5'>¿Ya tienes una cuenta? Inicia Sesion aqui</p>
                    <Link href="/login" className="nes-btn">Login</Link>
                </section>
            </div>

        </Container>
    )
}

export default index;