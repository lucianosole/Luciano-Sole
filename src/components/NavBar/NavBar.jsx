import CartWidget from "../CartWidget/CartWidget"
import Favoritos from "../Favs/Favoritos"

const NavBar = () => {
    return(
        <nav className="row">
            <div>
            <h1 className="display-4">E-Commerce Escuela Juche</h1>
            <br />
            </div>
            <div className="col-md-6 d-flex justify-content-around">
                <button className="btn btn-secondary">Indumentaria</button>
                <button className="btn btn-secondary">Protección</button>
                <button className="btn btn-secondary">Accesorios</button>
            </div>

            <div className="col-md-6 d-flex justify-content-end">
            <Favoritos />
            <CartWidget />
                
            </div>
        </nav>
    )
}

export default NavBar