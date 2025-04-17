// src/components/FAQSection.jsx
import '../styles/FAQSection.css';

// Importando o CSS específico para o componente FAQSection
// Este componente exibe uma seção de perguntas frequentes (FAQ) em um site
// de vendas, com perguntas e respostas relacionadas ao produto ou serviço oferecido.
// O componente é estilizado com CSS para garantir uma apresentação visual atraente
// e organizada. A seção inclui um título e uma lista de perguntas frequentes,
// cada uma com uma resposta correspondente. O objetivo é fornecer informações
// úteis aos visitantes do site, ajudando-os a esclarecer dúvidas comuns
// e incentivando a compra do produto ou serviço.

const FAQSection = () => {
  return (
    <section className="faq-section">
      <h2>Perguntas Frequentes</h2>
      <ul>
        <li>
          <strong>Pergunta 1:</strong> Eu ganho suporte do livro?
        </li>
        <li>
          <strong>Pergunta 2:</strong> O programador que fez esse site é gato?
        </li>
        <li>
          <strong>Pergunta 3:</strong> Com esse planner é certeza de fluência?
        </li>
        <li>
          <strong>Pergunta 4:</strong> Com esse planner é certeza de fluência?
        </li>
        <li>
          <strong>Pergunta 5:</strong> Com esse planner é certeza de fluência?
        </li>
        <li>
          <strong>Pergunta 6:</strong> Com esse planner é certeza de fluência?
        </li>
        <li>
          <strong>Pergunta 7:</strong> Com esse planner é certeza de fluência?
        </li>
      </ul>
    </section>
  );
};

export default FAQSection;
