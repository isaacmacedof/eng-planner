import '../styles/Hero.css'; // Importando o CSS específico para o componente Hero
import './VideoSection'; // Importando o componente VideoSection
import VideoSection from './VideoSection';

const Hero = () => {
  return (
    <section className="hero">
      <h1>Planner Inglês 2025</h1>
       <VideoSection />
      <button>Comece Agora</button>
    </section>
  );
};

export default Hero;