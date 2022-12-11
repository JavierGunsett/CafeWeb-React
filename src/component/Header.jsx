const Header = () => (   
    <header className="site-header">
        <div className="contenedor">
            <div className="barra">
                <a href="/">
                    <h1 className="no-margin">Blog<span>DeCafé</span></h1>
                </a>
                <nav className="navegacion">
                    <a href="nosotros.html">Nosotros</a>
                    <a href="cursos.html">Cursos</a>
                    <a href="contacto.html">Contacto</a>
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