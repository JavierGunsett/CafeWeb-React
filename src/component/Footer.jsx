import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="site-footer">
    <div className="contenedor">
      <div className="barra">
        <p className="no-margin">
          Blog<span>DeCafé</span>
        </p>

        <nav className="navegacion">
          <Link to="about">Nosotros</Link>
          <Link to="courses">Cursos</Link>
          <Link to="contact">Contacto</Link>
        </nav>
      </div>
    </div>
  </footer>
);
export default Footer;
