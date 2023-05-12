import estilos from '../../public/css/style.module.css'
import Container from '../../components/Container';

const mario = () => {
    return (
        <Container>
            <div className={`${estilos.indexCoverBack} d-flex justify-content-center pt-5`}>
                <div>
                    <iframe src="https://www.retrogames.cc/embed/44789-super-mario-bros-two-player-hack-shared-lives.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>
                </div>
            </div>
        </Container>

    );
}
export default mario;
