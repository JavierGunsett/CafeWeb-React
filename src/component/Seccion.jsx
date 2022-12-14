import Aside from "./Aside";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";

const Seccion = () => (
  <div className="contenido-principal contenedor">
    <main className="blog">
      <h2>Nuestro Blog</h2>
      <article className="entrada-blog">
        <div className="imagen">
          <img src={blog1} alt="Imagen blog" />
        </div>
        <div className="contenido-blog">
          <h3 className="no-margin">Tipos De Grano de Café</h3>
          <p>
            Sed laoreet, lorem et varius lacinia, massa leo mattis erat, sit
            amet fermentum ante turpis eget diam. Proin vulputate porta dolor,
            eu ullamcorper justo. Morbi suscipit vestibulum pellentesque. Nunc
            id erat tincidunt, semper ante eu, pulvinar neque.
          </p>
          <a href="entry" className="btn btn-primario">
            Leer Entrada
          </a>
        </div>
      </article>
      <article className="entrada-blog">
        <div className="imagen">
          <img src={blog2} alt="Imagen blog" />
        </div>
        <div className="contenido-blog">
          <h3 className="no-margin">3 Deliciosas recetas para café</h3>
          <p>
            Sed laoreet, lorem et varius lacinia, massa leo mattis erat, sit
            amet fermentum ante turpis eget diam. Proin vulputate porta dolor,
            eu ullamcorper justo. Morbi suscipit vestibulum pellentesque. Nunc
            id erat tincidunt, semper ante eu, pulvinar neque.
          </p>
          <a href="entry" className="btn btn-primario">
            Leer Entrada
          </a>
        </div>
      </article>
      <article className="entrada-blog">
        <div className="imagen">
          <img src={blog3} alt="Imagen blog" />
        </div>
        <div className="contenido-blog">
          <h3 className="no-margin">Beneficios del café</h3>
          <p>
            Sed laoreet, lorem et varius lacinia, massa leo mattis erat, sit
            amet fermentum ante turpis eget diam. Proin vulputate porta dolor,
            eu ullamcorper justo. Morbi suscipit vestibulum pellentesque. Nunc
            id erat tincidunt, semper ante eu, pulvinar neque.
          </p>
          <a href="entry" className="btn btn-primario">
            Leer Entrada
          </a>
        </div>
      </article>
    </main>

    <Aside />
  </div>
);

export default Seccion;
