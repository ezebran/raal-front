import foto1 from './../../../../../static/empresa/1.jpg'
import foto2 from './../../../../../static/empresa/2.jpg'
import foto3 from './../../../../../static/empresa/3.jpg'

export default function Historia () {
    return(
        <section className="historia">
            <h2 className="historia__title">Historia</h2>
            <div className="historia__content">
                <div className="content__left">
                    <p>
                        Su fundador, Roberto Alterman, junto a su padre Raúl, inicio sus actividades en el año 1963 con 
                        la fabricación de envases de cartón. Con el correr de los años y el advenimiento de los materiales 
                        autoadhesivos se comenzaron a identificar los envases con etiquetas autoadhesivas, 
                        para luego discontinuar la fabricación de envases y abocarse con exclusividad a la producción de 
                        etiquetas autoadhesivas en rollo. La actualización tecnológica y la mejora en la calidad de los 
                        productos y servicio al cliente han sido el motor de crecimiento de Raal.
                    </p>
                    <div className="cl__img">
                        <img src={foto2} alt="foto2" />
                    </div>
                    <p>
                        Este crecimiento nos ha llevado a la necesidad de mudar la actividad industrial a una planta 
                        modelo en el parque industrial Good Park en la localidad de Hurlingam. En este nuevo predio 
                        contamos con más de 3000 m2 cubiertos dispuestos con un lay out que nos permite optimizar 
                        los procesos productivos y tener los espacios suficientes acorde a las Buenas Prácticas de 
                        Manufactura requeridas por nuestros clientes.
                    </p>
                </div>
                <div className="content__right">
                    <img src={foto1} alt="foto1" className="histori_cr__first" />
                    <img src={foto3} alt="foto3" />
                </div>
            </div>
        </section>
    );
}