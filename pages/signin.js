import { FormSignin } from '../components/FormSignin';
import Container from '../components/Container';
import Head from 'next/head';

const signin = () => {
    return (

        <Container>
            <Head>
                <title>Pixel Arcade - Sign in </title>
            </Head>

            <FormSignin />
        </Container>
    )
}

export default signin;