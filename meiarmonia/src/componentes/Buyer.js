import { useContext, useState } from "react";
import carritoContext from '../context/CartContext';


export default function Buyer() {
    const [confirmar, setConfirmar] = useState(false);
    const { finalizar } = useContext(carritoContext);

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [mail, setMail] = useState('');
    const [telefono, setTelefono] = useState('');

    const { userInfo } = useContext(carritoContext)

    return (
        <form>
            {!confirmar && (
                <>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label>Nombre</label>
                            <input
                                onChange={(e) => { setNombre(e.target.value) }}
                                type="text"
                                className="form-control"
                                id="validationServer01"
                                required />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Apellido</label>
                            <input
                                onChange={(e) => { setApellido(e.target.value) }}
                                type="text"
                                className="form-control"
                                id="validationServer02"
                                required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label>E-mail</label>
                            <input
                                onChange={(e) => { setMail(e.target.value) }}
                                type="mail"
                                className="form-control"
                                id="validationServer03"
                                aria-describedby="validationServer03Feedback"
                                required />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Telefono</label>
                            <input
                                onChange={(e) => { setTelefono(e.target.value) }}
                                type="phone"
                                className="form-control"
                                id="validationServer04"
                                aria-describedby="validationServer03Feedback"
                                required />
                        </div>
                    </div>
                    <button
                        onClick={(e) => { e.preventDefault(); userInfo(nombre, apellido, mail, telefono); setConfirmar(true) }}
                        className="btn btn-primary"
                        type="submit">
                        Finalizar
                    </button>
                </>
            )}

            {confirmar && (
                <button
                    onClick={(e) => { e.preventDefault(); finalizar() }}
                    className="btn btn-success"
                    type="submit">
                    Realizar Compra
                </button>
            )}

        </form>
    );
};

