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
          <p>Conteúdo no seu nível: básico, intermediário e avançado</p>
        </div>
        <div className="how-it-works-item">
          <img className='HowItWorks-check-icon' src={checkIcon} />
          <p>Situações reais do dia a dia para aplicar na prática</p>
        </div>
        <div className="how-it-works-item">
          <img className='HowItWorks-check-icon' src={checkIcon} />
          <p>Exercícios práticos e explicações simples</p>
        </div>
        <div className="how-it-works-item">
          <img className='HowItWorks-check-icon' src={checkIcon} />
          <p>Método testado e aprovado por alunos</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
