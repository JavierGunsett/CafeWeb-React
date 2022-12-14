import React from "react";
import img from "../assets/nosotros.jpg"


const About = () => {
  return (
    
      <main className="contenedor">
        <h2 className="centrar-texto">Sobre Nosotros</h2>
        <div className="grid">
          <div className="columnas-6">
            <img src={img} alt="Imagen Nosotros" />
          </div>
          <div className="columnas-6">
            <p>
              Nulla vehicula finibus magna. Quisque tincidunt velit id lectus
              facilisis, a hendrerit urna iaculis. Donec posuere felis at lacus
              interdum, et feugiat tortor scelerisque. Sed finibus auctor sapien
              in ultricies. Nam rutrum non mauris eget fermentum.
            </p>

            <p>
              In cursus, enim quis dictum finibus, nisl enim pulvinar augue,
              sagittis eleifend nulla nibh ut justo. Duis magna enim, feugiat
              eget tristique at, pulvinar a diam. Mauris augue velit, iaculis ut
              nibh non, interdum faucibus libero. Curabitur porttitor placerat
              elit, non cursus purus. Sed justo ipsum, aliquam eu maximus vel,
              elementum nec leo. Fusce gravida lacus non lacinia auctor.
            </p>
          </div>
        </div>
      </main>
    
  );
};

export default About;
