// src/components/Hero.jsx
import '../styles/Hero.css'; // Importando o CSS único e limpo

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="heroTitle">Planner Inglês 2025</h1>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/69PqKAhtsXQ?rel=0&modestbranding=1"
            title="Vídeo de Apresentação"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      <button className="purchase-button">Comece Agora</button>
    </section>
  );
};

export default Hero;