import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Head from 'next/head';
//props son funciones op componenetes cualquier cosa que se utilice
// ((props.children)) 
//Voy a pasar componentes y todo iran en esa section y se agregara todo lo que estara arriba del props

const Container = (props) => {
    return (
        <div>
            <Navigation />
            <div >
                {props.children}
            </div>

            <Footer/>
        </div>
    )
}
export default Container;