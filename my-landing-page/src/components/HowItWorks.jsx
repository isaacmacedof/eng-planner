// src/components/HowItWorks.jsx
import '../styles/HowItWorks.css'; // Importando o CSS específico para o componente HowItWorks
import checkIcon from '../Images/check-icon.png'; // Importando o ícone de check

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>Como Funciona?</h2>
      <div className="how-it-works-list">
        <div className="how-it-works-item">
          <img className='HowItWorks-check-icon' src={checkIcon} />
          <p>Conteúdo dos níveis básico ao avançado (A1 ao B2)</p>
        </div>
        <div className="how-it-works-item">
          <img className='HowItWorks-check-icon' src={checkIcon} />
          <p>Pratique listening, reading, writing, speaking, grammar e vocabulary</p>
        </div>
        <div className="how-it-works-item">
          <img className='HowItWorks-check-icon' src={checkIcon} />
          <p>Mantenha sua rotina de maneira autônoma e significativa</p>
        </div>
        <div className="how-it-works-item">
          <img className='HowItWorks-check-icon' src={checkIcon} />
          <p>Estude em casa e na hora que você quiser</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
