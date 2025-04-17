// src/components/HowItWorks.jsx
import '../styles/HowItWorks.css'; // Importando o CSS específico para o componente HowItWorks

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>Como Funciona?</h2>
      <div className="icons">
        <div className="icon">
          <p>Ícone 1</p>
          <p>Texto explicativo 1</p>
        </div>
        <div className="icon">
          <p>Ícone 2</p>
          <p>Texto explicativo 2</p>
        </div>
        <div className="icon">
          <p>Ícone 3</p>
          <p>Texto explicativo 3</p>
        </div>
        <div className="icon">
          <p>Ícone 4</p>
          <p>Texto explicativo 4</p>
        </div>
      </div>
      <div className="personal-info">
        <div className="photo">
          <p>FOTO MINHA</p>
        </div>
        <div className="info">
          <h3>TÍTULO</h3>
          <p>Texto sobre quem sou eu</p>
          <button className="purchase-button">Botão de Compra</button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
