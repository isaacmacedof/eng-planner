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
      <h2>OFERTA IMPERDÍVEL:</h2>
      <div className="offer">
        <div className="advantages">
          <ul className="advantages-list">
            <li className='pricing-list-itens'>Como formar frases corretamente</li>
            <li className='pricing-list-itens'>Como se comunicar com confiança</li>
            <li className='pricing-list-itens'>Como entender o inglês falado</li>
            <li className='pricing-list-itens'>Como escrever melhor</li>
            <li className='pricing-list-itens'>Expressões e vocabulários essenciais</li>
          </ul>
        </div>
        <div className="price">
          <h3>De <span className='price-no-promo'>119,90</span> por apenas 55.90, ou até 10 vezes de <p className='price-destaque'>5,59!</p></h3>
          <button className="purchase-button">COMPRE JÁ</button>
          <p>PREÇO ATÉ HOJE! Aproveite antes que volte ao normal!</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
