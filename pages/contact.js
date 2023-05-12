import estilos from '../public/css/style.module.css'
import Container from '../components/Container';
import Head from 'next/head';

const contact = () => {
    return (

        <Container>
            <Head>
                <title>Pixel Arcade - Contact</title>
            </Head>

            <div className={estilos.indexCoverBack}>
                <h1 className={estilos.titleCover}>Pixel <span className={estilos.span}>Contact</span></h1>

                <section id="contact" className={`${estilos.sectionContact} py-5`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <p>Por favor, siéntase libre de contactarnos con cualquier pregunta o consulta..</p>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="name" name="name" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="email" name="email" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">Message</label>
                                        <textarea className="form-control" id="message" name="message" rows={5} required defaultValue={""} />
                                    </div>
                                    <button type="submit" className="nes-btn btn-primary">Send Message</button>
                                </form>
                            </div>
                            
                            <div className="col-lg-6">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.509755397263!2d-68.84852332479305!3d-32.91112777009468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e096e24fe67d3%3A0x8bd4ca97336e5fdb!2sIES%209-008%20Manuel%20Belgrano!5e0!3m2!1ses!2sar!4v1683400482745!5m2!1ses!2sar" width={350} height={300} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                </div>
                                <p>123 Main Street<br />Anytown, USA 12345<br />Phone: (123) 456-7890<br />Email: info@example.com</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </Container>
    )
}

export default contact;