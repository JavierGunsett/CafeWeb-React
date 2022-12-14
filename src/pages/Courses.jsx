import React from "react";
import curso1 from '../assets/curso1.jpg'
import curso2 from '../assets/curso2.jpg'
import curso3 from '../assets/curso3.jpg'


const Courses = () =>( 
    <>   

    <main className="contenedor">
        <h2 className="centrar-texto">Nuestros Próximos Cursos y Talleres</h2>

        <article className="curso grid">
            <div className="columnas-4">
                <img src={curso1} alt="Imagen Curso"/>
            </div>
            <div className="columnas-8">
                <h4 className="no-margin">Técnicas de extracción de café</h4>
                <p className="no-margin">Fecha: <span>20 Agosto de 2019</span> </p>
                <p className="no-margin">Precio: <span>Gratis</span> </p>
                <p className="no-margin">Cupo: <span>20</span> </p>

                <p className="descripcion">span Praesent nec magna eu libero dapibus aliquet. Ut at fringilla nulla. Aenean in urna diam. Donec sit amet purus tristique, sodales purus quis, faucibus nunc. Integer et tincidunt ipsum. Sed laoreet, lorem et varius lacinia, massa leo mattis erat, sit amet fermentum ante turpis eget diam. Proin vulputate porta dolor, eu ullamcorper justo. Morbi suscipit vestibulum pellentesque. Nunc id erat tincidunt, semper ante eu, pulvinar neque.</p>
            </div>
        </article>

        <article className="curso grid">
            <div className="columnas-4">
                <img src={curso2} alt="Imagen Curso"/>
            </div>
            <div className="columnas-8">
                <h4 className="no-margin">Taller para tostar y moler granos</h4>
                <p className="no-margin">Fecha: <span>24 Agosto de 2019</span> </p>
                <p className="no-margin">Precio: <span>Gratis</span> </p>
                <p className="no-margin">Cupo: <span>20</span> </p>

                <p className="descripcion">span Praesent nec magna eu libero dapibus aliquet. Ut at fringilla nulla. Aenean in urna diam. Donec sit amet purus tristique, sodales purus quis, faucibus nunc. Integer et tincidunt ipsum. Sed laoreet, lorem et varius lacinia, massa leo mattis erat, sit amet fermentum ante turpis eget diam. Proin vulputate porta dolor, eu ullamcorper justo. Morbi suscipit vestibulum pellentesque. Nunc id erat tincidunt, semper ante eu, pulvinar neque.</p>
            </div>
        </article>
    
        <article className="curso grid">
            <div className="columnas-4">
                <img src={curso3} alt="Imagen Curso"/>
            </div>
            <div className="columnas-8">
                <h4 className="no-margin">4 Recetas de café para principiantes</h4>
                <p className="no-margin">Fecha: <span>29 Agosto de 2019</span> </p>
                <p className="no-margin">Precio: <span>Gratis</span> </p>
                <p className="no-margin">Cupo: <span>20</span> </p>

                <p className="descripcion">span Praesent nec magna eu libero dapibus aliquet. Ut at fringilla nulla. Aenean in urna diam. Donec sit amet purus tristique, sodales purus quis, faucibus nunc. Integer et tincidunt ipsum. Sed laoreet, lorem et varius lacinia, massa leo mattis erat, sit amet fermentum ante turpis eget diam. Proin vulputate porta dolor, eu ullamcorper justo. Morbi suscipit vestibulum pellentesque. Nunc id erat tincidunt, semper ante eu, pulvinar neque.</p>
            </div>
        </article>
    </main>

    
    </>
)

export default Courses;