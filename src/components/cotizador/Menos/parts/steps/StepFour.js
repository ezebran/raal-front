export default function StepFour({step, nombre, setNombre, email, setEmail, telefono, setTelefono}){

    const handleChangeName = (e) => {
        setNombre(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangeTelefono = (e) => {
        setTelefono(e.target.value)
    }

    return(
        <>
            <div className={`wrap ${step !== 4 ? 'd-none' : ''}`}>
                <div className="text-material">

                    <input type="text" name="nombre" value={nombre} className="select-text" onChange={handleChangeName} />
                    <span className="select-highlight"></span>
                    <span className="select-bar"></span>
                    <label className="select-label">Nombre</label>
                </div>
            </div>

            <div className={`wrap ${step !== 4 ? 'd-none' : ''}`}>
                <div className="text-material">

                    <input type="text" name="email" value={email} className="select-text" onChange={handleChangeEmail} />
                    <span className="select-highlight"></span>
                    <span className="select-bar"></span>
                    <label className="select-label">Email</label>
                </div>
            </div>

            <div className={`wrap ${step !== 4 ? 'd-none' : ''}`}>
                <div className="text-material">
                    <input type="text" name="telefono" value={telefono} className="select-text" onChange={handleChangeTelefono} />
                    <span className="select-highlight"></span>
                    <span className="select-bar"></span>
                    <label className="select-label">Telefono</label>
                </div>
            </div>
        </>
    )
}