import { useState } from 'react';
import upIcon from '../Images/mais-icon.png';
import '../styles/FAQSection.css';

const FAQSection = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const faqItems = [
    {
      question: "Como é liberado o acesso ao livro?",
      answer: "Após a compra, você receberá um link para download do livro em formato digital."
    },
    {
      question: "Em quanto tempo o acesso é liberado?",
      answer: "O acesso é liberado imediatamente após a confirmação do pagamento."
    },
    {
      question: "Como recebo os áudios para prática?",
      answer: "Os áudios serão enviados para o seu e-mail após a compra do livro."
    },
    {
      question: "O livro é adequado para iniciantes?",
      answer: "Sim, o livro foi projetado para iniciantes e também para quem deseja aprimorar seus conhecimentos."
    },
    {
      question: "Quais temas são abordados no nível básico?",
      answer: "O livro aborda temas como vocabulário básico, expressões cotidianas e frases úteis."
    },
    {
      question: "Posso praticar listening com este livro?",
      answer: "Sim, o livro contém materiais de áudio para praticar a compreensão auditiva."
    },
    {
      question: "Qual é o preço do livro?",
      answer: "O preço do livro é R$99,99. Oferecemos descontos especiais em compras em grupo."
    }
  ];

  return (
    <section className="faq-section">
      <h2>Perguntas Frequentes</h2>
      <ul>
        {faqItems.map((item, index) => (
          <li
            key={index}
            className={`faq-item ${selectedQuestion === index ? 'expanded' : ''}`}
            onClick={() => setSelectedQuestion(index === selectedQuestion ? null : index)}
          >
            <div className='faq-question'>
              <div className='faq-question-image'>
                <img className='maisIcon' src={upIcon} />
              </div>
              {item.question}
            </div>
            <div
              className={`faq-answer-container ${selectedQuestion === index ? "expanded" : ""}`}
            >
              {selectedQuestion === index && (
                <p className="faq-answer">{item.answer}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FAQSection;
