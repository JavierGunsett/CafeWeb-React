import {Link} from "react-router-dom"

const Header = () => (   
    <header className="site-header">
        <div className="contenedor">
            <div className="barra">
                <Link to="/">
                    <h1 className="no-margin">Blog<span>DeCafé</span></h1>
                </Link>
                <nav className="navegacion">
                    <Link to="../pages/About">Nosotros</Link>
                    <Link to="../pages/Courses">Cursos</Link>
                    <Link to="../pages/Contact">Contacto</Link>
                </nav>
            </div>

            <div className="texto-header">
                <h2 className="no-margin">Blog de Café con consejos y Cursos</h2>
                <p className="no-margin">Aprende de los expertos con las mejores recetas y consejos</p>
            </div>

        </div>
    </header>
    
)

export default Header;