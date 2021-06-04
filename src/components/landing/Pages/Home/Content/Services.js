import digital from './../../../../../static/home-badges/impresora.png'
import flexo from './../../../../../static/home-badges/rodillos.png'

export default function Services() {
    return (
        <section className="servicios">
            <h2 className="servicios-title">¡Impresión de etiquetas autoadhesivas!</h2>
            <h3 className="servicios-subtitle">Tecnología actualizada para cumplir con las necesidades del <br></br> mercado</h3>
            <div className="servicios-wrap">
                <div className="servicios-desc">
                    <h6>NUESTROS SERVICIOS</h6>
                    <h2>Sistema de <br></br> Impresión</h2>
                </div>
                <div className="servicios-boxes">

                    <div className="servicio-box">
                        <div className="blue-span"></div>
                        <h6>sistema de impresión</h6>
                        <div className="servicio-box-title">
                            <img src={flexo} ></img>
                            <h2>Flexográfica</h2>
                        </div>
                        <p>Contamos con sistemas de impresión flexo gráfico
                             hasta 8 colores para cantidades grandes, y con impresión 
                             digital (HP INDIGO) para pequeñas cantidades.</p>
                    </div>

                    <div className="servicio-box">
                        <div className="blue-span"></div>
                        <h6>sistema de impresión</h6>
                        <div className="servicio-box-title">
                            <img src={digital} ></img>
                            <h2>Digital</h2>
                        </div>
                        <p>Contamos con sistemas de impresión flexo gráfico
                             hasta 8 colores para cantidades grandes, y con impresión 
                             digital (HP INDIGO) para pequeñas cantidades.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}