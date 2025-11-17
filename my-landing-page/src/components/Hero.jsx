// src/components/Hero.jsx
import '../styles/Hero.css'; // Importando o CSS único e limpo

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="heroTitle">Planner Acelere seu Inglês 2025</h1>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/gnHpYohHM9M"
            title="Vídeo de Apresentação"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          >
          </iframe>
        </div>
      <button className="purchase-button">Comece Agora</button>
    </section>
  );
};

export default Hero;