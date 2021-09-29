import { Link } from "react-router-dom";

export default function AcercaDe() {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Acerca de Nosotros</h1>
            <p className="lead">hernannnnn  aprobameeeee que me costo uno y la mitad del otro!!!</p>
            <hr className="my-4" />
            <p>soy un estudiante de programador que quiere ganar una gerra con un chuchillo y una granada</p>
            <Link className="btn btn-primary btn-lg" to="/" role="button">Inicio</Link>
        </div>
    )
}