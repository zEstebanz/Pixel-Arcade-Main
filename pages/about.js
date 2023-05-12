import estilos from '../public/css/style.module.css'
import Container from '../components/Container';
import Head from 'next/head';
const contact = () => {
    return (

        <Container>
            <Head>
                <title>Pixel Arcade - About</title>
            </Head>

            <div className={estilos.indexCoverBack}>

            <h1 className={estilos.titleCover}>Pixel<span className={estilos.span}> About</span></h1>

                <p className={estilos.textArcade}>Hace muchos años, en una pequeña ciudad, existía una tienda de videojuegos llamada "Pixel Arcade". El dueño de la tienda, un apasionado de los videojuegos retro, había abierto la tienda para compartir su amor por los juegos clásicos con la comunidad local.
                </p>

                <p className={estilos.textArcade}>
                    La tienda estaba llena de juegos retro, desde los clásicos de Atari hasta los más recientes de la era de los 16 bits. Los clientes de todas las edades y habilidades venían a la tienda para jugar y comprar sus juegos favoritos.
                </p>

                <p className={estilos.textArcade}>
                    Pero a medida que pasaban los años, la popularidad de los videojuegos retro comenzó a disminuir y la tienda comenzó a tener problemas para mantenerse a flote. El dueño sabía que necesitaba hacer algo para atraer a nuevos clientes y mantener a los antiguos interesados.
                </p>

                <p className={estilos.textArcade}>
                    Fue entonces cuando se le ocurrió la idea de organizar un torneo de videojuegos retro en la ciudad. La idea fue un éxito instantáneo y pronto se corrió la voz por toda la ciudad.
                </p>

                <p className={estilos.textArcade}>
                    La competencia se llevó a cabo en un edificio abandonado que el dueño de la tienda había alquilado para la ocasión. Se instalaron docenas de televisores y consolas de videojuegos antiguas, y se invitó a los jugadores más habilidosos de la ciudad a participar.
                </p>

                <p className={estilos.textArcade}>
                    El torneo fue un éxito rotundo. La gente se agolpaba alrededor de los televisores para ver a los jugadores competir en juegos clásicos como Pac-Man, Space Invaders y Donkey Kong. Incluso se presentaron algunos jugadores de otras ciudades y el torneo se convirtió en un evento regional.

                </p>

                <p className={estilos.textArcade}>
                    Después del éxito del torneo, Pixel Arcade se convirtió en el lugar de reunión para los jugadores retro de la ciudad y la tienda comenzó a prosperar de nuevo. Se agregaron nuevos juegos a la colección y se organizaron más eventos como el torneo.

                </p>

                <p className={estilos.textArcade}>
                    Hoy en día, Pixel Arcade sigue siendo un lugar especial para los fanáticos de los videojuegos retro. La tienda ha expandido su colección para incluir juegos modernos, pero siempre ha mantenido un enfoque en los clásicos que iniciaron todo. La tienda es un recordatorio de una época dorada de los videojuegos y del poder que pueden tener para reunir a las personas.
            </p>
        </div>

        </Container >
    )
}

export default contact;