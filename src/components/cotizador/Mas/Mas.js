export default function Mas() {
    return (
      <div className="masdemil">
        <h2>
          Para una cotización de más de 10.000 etiquetas, te contactará un asistente comercial. 
          Por favor, completá el formulario con la información que corresponda.
        </h2>
        <form action="" className="masform">
          <div className="text-material__contacto m-2">
              <input type="text" name="nombre" className="select-text" />
              <span className="select-highlight"></span>
              <span className="select-bar"></span>
              <label className="select-label">Nombre</label>
          </div>

          <div className="text-material__contacto m-2">
              <input type="text" name="email" className="select-text" />
              <span className="select-highlight"></span>
              <span className="select-bar"></span>
              <label className="select-label">Email</label>
          </div>

          <div className="text-material__contacto m-2">
              <input type="text" name="telefono" className="select-text" />
              <span className="select-highlight"></span>
              <span className="select-bar"></span>
              <label className="select-label">Teléfono</label>
          </div>

          <div className="text-material__contacto m-2">
              <textarea name="mensaje" className="select-text" />
              <span className="select-highlight"></span>
              <span className="select-bar"></span>
              <label className="select-label">Mensaje</label>
          </div>
          <button type="submit" className="btn btn-contacto">Enviar</button>
        </form>
      </div>
    );
}