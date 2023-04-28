import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav className="row">
            <div>
            <h2>E-Commerce Escuela Juche</h2>
            <br />
            </div>
            <div className="col-md-6 d-flex justify-content-around">
                <button className="btn btn-secondary">Indumentaria</button>
                <button className="btn btn-secondary">Protección</button>
                <button className="btn btn-secondary">Accesorios</button>
            </div>

            <div className="col-md-6 text-right">
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar