const Aside = () =>(
    <aside className="cursos">
        <h2>Nuestros Cursos y Talleres</h2>

        <ul className="cursos-lista">
            <li className="curso">
                <h4 className="no-margin">Técnicas de extracción de café</h4>
                <p className="no-margin">Precio: <span>Gratis</span> </p>
                <p className="no-margin">Cupo: <span>20</span> </p>
                <a href="cursos.html" className="btn btn-secundario">Más Información</a>
            </li>
            <li className="curso">
                <h4 className="no-margin">4 Recetas de café para principiantes</h4>
                <p className="no-margin">Precio: <span>Gratis</span> </p>
                <p className="no-margin">Cupo: <span>20</span> </p>
                <a href="cursos.html" className="btn btn-secundario">Más Información</a>
            </li>
        </ul>
    </aside>
)

export default Aside;