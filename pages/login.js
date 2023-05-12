import FormLogin from '../components/FormLogin';
import Container from '../components/Container';
import Head from 'next/head';

const login = () => {
    return (

        <Container>
            <Head>
                <title>Pixel Arcade - Login </title>
            </Head>

            <FormLogin/>
        </Container>
    )
}

export default login;