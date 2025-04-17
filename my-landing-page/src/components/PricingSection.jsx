// src/components/PricingSection.jsx
import '../styles/PricingSection.css'; // Importando o CSS específico para o componente PricingSection
// Este componente exibe uma seção de preços em um site de vendas, com informações
// sobre as vantagens do produto, o preço promocional e um botão de compra.
// O objetivo é incentivar os visitantes a adquirirem o produto, destacando
// as vantagens e a urgência da oferta. A seção inclui um título, uma lista de vantagens,
// um preço promocional e um botão de compra. Além disso, há um link para

const PricingSection = () => {
  return (
    <section className="pricing-section">
      <h2>Tudo por Apenas:</h2>
      <div className="offer">
        <div className="advantages">
          <h3>Vantagens de ter o Planner</h3>
          <ul>
            <li>Vantagem 1</li>
            <li>Vantagem 2</li>
            <li>Vantagem 3</li>
            <li>Vantagem 4</li>
            <li>Vantagem 5</li>
            <li>Vantagem 6</li>
          </ul>
        </div>
        <div className="price">
          <h3>De (Valor fictício) por apenas X, ou até X vezes de Y!</h3>
          <button className="purchase-button">COMPRE JÁ</button>
          <p>PREÇO ATÉ HOJE! Aproveite antes que volte ao normal!</p>
        </div>
      </div>
      <div className="faq-link">
        <a href="#faq">Perguntas Frequentes</a>
      </div>
    </section>
  );
};

export default PricingSection;
