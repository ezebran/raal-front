export default function FormularioContacto() {
    return(
        <div className="contacto-form">
            <div className="contacto-form__info">
                <h2>Contacto</h2>
                <p>
                    Manuel Ocampo 1170 - Hurlingham, Buenos Aires. <br />
                    Parque Industrial Good Park. <br /><br />
                    
                    Tel.: (+5411) 5263 7179, Int. 224 <br />
                    info@raal.com.ar <br />
                    www.raal.com.ar
                </p>
            </div>
            <div className="contacto-form__form">
                <form action="" className="form-contacto">
                    <div className="text-material__contacto">
                        <input type="text" name="nombre" className="select-text" />
                        <span className="select-highlight"></span>
                        <span className="select-bar"></span>
                        <label className="select-label">Nombre</label>
                    </div>

                    <div className="text-material__contacto">
                        <input type="text" name="email" className="select-text" />
                        <span className="select-highlight"></span>
                        <span className="select-bar"></span>
                        <label className="select-label">Email</label>
                    </div>

                    <div className="text-material__contacto">
                        <input type="text" name="telefono" className="select-text" />
                        <span className="select-highlight"></span>
                        <span className="select-bar"></span>
                        <label className="select-label">Teléfono</label>
                    </div>

                    <div className="text-material__contacto">
                        <textarea name="mensaje" className="select-text" />
                        <span className="select-highlight"></span>
                        <span className="select-bar"></span>
                        <label className="select-label">Mensaje</label>
                    </div>
                    <button type="submit" className="btn btn-contacto">Enviar</button>
                </form>
            </div>
        </div>
    );
}