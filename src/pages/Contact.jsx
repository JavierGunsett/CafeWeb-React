import React from "react";
import contacto from "../assets/contacto.jpg";

const Contact = () => (
  <>
    <main className="contenedor">
      <h2 className="centrar-texto">Contacto</h2>

      <div className="grid centrar-columnas">
        <div className="columnas-12">
          <img src={contacto} alt="imagen contacto" />
        </div>

        <div className="columnas-10 formulario-contacto">
          <form action="#">
            <div className="campo">
              <label for="nombre">Nombre</label>
              <input type="text" id="nombre" placeholder="Tu Nombre" />
            </div>
            <div className="campo">
              <label for="email">E-Mail</label>
              <input
                type="email"
                id="email"
                placeholder="Tu Correo Electrónico"
              />
            </div>
            <div className="campo mensaje">
              <label for="mensaje">Mensaje</label>
              <textarea id="mensaje"></textarea>
            </div>
            <div className="campo enviar">
              <input
                type="submit"
                value="Enviar"
                className="btn btn-primario"
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  </>
);

export default Contact;
