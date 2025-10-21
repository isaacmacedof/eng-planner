// src/components/PricingSection.jsx
import '../styles/PricingSection.css'; // Importando o CSS

const PricingSection = () => {
  // PASSO 1: O array agora é de OBJETOS.
  // Cada objeto tem o seu próprio ícone SVG (como na referência) e o seu texto.
  const advantages = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
        </svg>
      ),
      text: 'Como formar frases corretamente',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
        </svg>
      ),
      text: 'Como se comunicar com confiança',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3c-4.97 0-9 4.03-9 9v7c0 1.1.9 2 2 2h4v-8H5v-1c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-4v8h4c1.1 0 2-.9 2-2v-7c0-4.97-4.03-9-9-9z" />
        </svg>
      ),
      text: 'Como entender o inglês falado',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
        </svg>
      ),
      text: 'Como escrever melhor',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z" />
        </svg>
      ),
      text: 'Expressões e vocabulários essenciais',
    },
  ];

  return (
    // PASSO 2: A secção agora é "transparente", como em HowItWorks
    <section className="pricing-section">
      {/* Título como o da referência */}
      <h2>TUDO ISSO, POR APENAS:</h2>

      <div className="offer">
        {/* Coluna 1: Vantagens */}
        <div className="advantages">
          <ul className="advantages-list">
            {advantages.map((item, index) => (
              <li key={index} className="pricing-list-itens">
                <div className="advantage-icon-wrapper">
                  {item.icon}
                </div>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna 2: Caixa de Preço */}
        <div className="price">
          {/* Re-hierarquia do preço (como na referência) */}
          <div className="price-original-line">
            De <span className="price-no-promo">119,90</span> por apenas
          </div>
          <div className="price-main">
            R$ 55,90{' '}
            <span className="price-installments">ou em até 10x de</span>
          </div>
          <p className="price-destaque">R$ 5,59!</p>

          {/* Botão com a seta "->" */}
          <button className="purchase-button">COMPRE JÁ &rarr;</button>

          {/* PASSO 3: Selos de Confiança (Novos) */}
          <div className="trust-badge-container">
            <div className="trust-badge">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2z" />
              </svg>
              <span>Compra Segura</span>
            </div>
            <div className="trust-badge">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
              <span>Satisfação Garantida</span>
            </div>
            <div className="trust-badge">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              <span>Privacidade Protegida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;