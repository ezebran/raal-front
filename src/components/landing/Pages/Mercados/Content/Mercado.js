import mercado1 from './../../../../../static/mercados/mercado_1.jpg'

export default function Mercado({showModal, setShowModal, merca}) {
    const handleClickModal = (e) => {
        e.preventDefault();
        setShowModal(!showModal)
    }
    return (
        <article>
            <div className="img-cont">
                <img src={mercado1} alt="mercado_1" />
            </div>
            <div className="article-content">
                <h3>{merca.titulo}</h3>
                <p>
                    {merca.descripcion}
                </p>
                <a href="#" onClick={handleClickModal}>Ver galería de trabajos</a>
            </div>
        </article>
    );
}