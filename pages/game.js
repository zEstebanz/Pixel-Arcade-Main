import estilos from '../public/css/style.module.css'
import Container from '../components/Container';
import Head from 'next/head';
import Link from 'next/link';

const index = () => {

    return (

        <Container>
            <Head>
                <title>Pixel Arcade - Games</title>
            </Head>

            <div className={estilos.indexCoverBack}>
                <h1 className={estilos.titleCover}>Pixel<span className={estilos.span}> Games</span></h1>

                <div className="container">
                    <div className="row">

                        <div className={`col-md-4 mb-5`}>
                            <div className={`${estilos.boxGameCustom} h-100`}>
                                <Link href="/games/mario">
                                    <img src="https://i.3djuegos.com/juegos/5327/super_mario_bros/fotos/ficha/super_mario_bros-1698422.webp" className="card-img-top" alt="Juego 1" />
                                </Link>
                                <div className="card-body">
                                    <h3 className="card-title">Super Mario</h3>
                                    <p className="card-text">Super Mario Bros, Nintendo</p>
                                    <Link href="/games/mario" className="nes-btn btn-primary">Jugar</Link>
                                </div>
                            </div>
                        </div>


                        <div className={`col-md-4 mb-5`}>
                            <div className={`${estilos.boxGameCustom} h-100`}>
                                <Link href="/games/doom">
                                    <img src="https://i.3djuegos.com/juegos/5425/doom/fotos/ficha/doom-1716462.webp" className="card-img-top" alt="Juego 2" />
                                </Link>
                                <div className="card-body">
                                    <h3 className="card-title">Doom</h3>
                                    <p className="card-text">Doom, Sega Genesis</p>
                                    <Link href="/games/doom" className="nes-btn btn-primary">Jugar</Link>
                                </div>
                            </div>
                        </div>

                        <div className={`col-md-4 mb-5`}>
                            <div className={`${estilos.boxGameCustom} h-100`}>
                                <Link href="/games/sonic2">
                                    <img src="https://i.3djuegos.com/juegos/18474/sonic_the_hedgehog_2/fotos/ficha/sonic_the_hedgehog_2-5651061.webp" className="card-img-top" alt="Juego 3" />
                                </Link>
                                <div className="card-body">
                                    <h3 className="card-title">Sonic The Hedgehog 2</h3>
                                    <p className="card-text">Sonic The Hedgehog 2 16-bit, Sega Genesis</p>
                                    <Link href="/games/sonic2" className="nes-btn btn-primary">Jugar</Link>
                                </div>
                            </div>
                        </div>

                        <div className={`col-md-4 mb-5`}>
                            <div className={`${estilos.boxGameCustom} h-100`}>
                                <Link href="/games/streetf">
                                    <img src="https://i.3djuegos.com/juegos/15577/street_fighter_ii/fotos/ficha/street_fighter_ii-3952679.webp" className="card-img-top" alt="Juego 4" />
                                </Link>
                                <div className="card-body">
                                    <h3 className="card-title">Street Fighter 2</h3>
                                    <p className="card-text">Street Fighter 2</p>
                                    <Link href="/games/streetf" className="nes-btn btn-primary">Jugar</Link>
                                </div>
                            </div>
                        </div>

                        <div className={`col-md-4 mb-5`}>
                            <div className={`${estilos.boxGameCustom} h-100`}>
                                <Link href="/games/bomberman">
                                    <img src="https://i.3djuegos.com/juegos/14398/super_bomberman_r/fotos/ficha/super_bomberman_r-3985531.webp" className="card-img-top" alt="Juego 5" />
                                </Link>
                                <div className="card-body">
                                    <h3 className="card-title">Bomberman</h3>
                                    <p className="card-text"></p>
                                    <Link href="/games/bomberman" className="nes-btn btn-primary">Jugar</Link>
                                </div>
                            </div>
                        </div>

                        <div className={`col-md-4 mb-5`}>
                            <div className={`${estilos.boxGameCustom} h-100`}>
                                <Link href="/games/tetris">
                                    <img src="https://uvejuegos.com/img/caratulas/29965/Tetris-EEUU-MD.jpg" className="card-img-top" alt="Juego 5" />
                                </Link>
                                <div className="card-body">
                                    <h3 className="card-title">Tetris</h3>
                                    <p className="card-text"></p>
                                    <Link href="/games/tetris" className="nes-btn btn-primary">Jugar</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Container >
    )
}

export default index;