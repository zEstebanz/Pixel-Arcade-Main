import estilos from '../../public/css/style.module.css'
import Container from '../../components/Container'

const doom = () => {
    return (
        <Container>
            <div className={`${estilos.indexCoverBack} d-flex justify-content-center pt-5`}>
                <div>
                    <iframe class="embed-responsive-item" src="https://www.retrogames.cc/embed/40297-doom-europe.html"width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>
                </div>
            </div>
        </Container>

    );
}
export default doom;
