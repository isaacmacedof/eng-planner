// src/components/Feedbacks.jsx
import { useRef } from 'react';
import '../styles/Feedbacks.css';

const Feedbacks = () => {
  const carousel = useRef(null);

  const reviews = [
    {
      id: 1,
      name: 'Mariana Souza',
      role: 'Nível Básico (A2)',
      image: 'https://i.pravatar.cc/150?img=5',
      stars: 5,
      text: 'Eu sempre me perdia nos estudos, mas com esse planner consegui criar uma rotina. A parte de "Weekly Reflection" é a minha favorita!',
    },
    {
      id: 2,
      name: 'Carlos Mendes',
      role: 'Nível Intermediário (B1)',
      image: 'https://i.pravatar.cc/150?img=11',
      stars: 5,
      text: 'O melhor investimento que fiz para o meu inglês este ano. É muito prático e visualmente lindo. Dá vontade de abrir e estudar.',
    },
    {
      id: 3,
      name: 'Fernanda Lima',
      role: 'Estudante Autodidata',
      image: 'https://i.pravatar.cc/150?img=9',
      stars: 5,
      text: 'Material incrível! As checklists de vocabulário me ajudam muito a medir meu progresso real. Recomendo demais.',
    },
    // --- PÁGINA 2 (Novos Feedbacks) ---
    {
      id: 4,
      name: 'Roberto Alves',
      role: 'Foco em Business',
      image: 'https://i.pravatar.cc/150?img=33',
      stars: 5,
      text: 'Precisava de organização para estudar inglês para o trabalho. O planner ajudou-me a focar nas expressões essenciais.',
    },
    {
      id: 5,
      name: 'Juliana Costa',
      role: 'Preparação para Viagem',
      image: 'https://i.pravatar.cc/150?img=24',
      stars: 5,
      text: 'Viajei sentindo-me muito mais segura. Seguir o cronograma sugerido fez toda a diferença na minha confiança.',
    },
    {
      id: 6,
      name: 'Lucas Pereira',
      role: 'Nível Avançado (C1)',
      image: 'https://i.pravatar.cc/150?img=60',
      stars: 4,
      text: 'Mesmo já sendo avançado, uso para manter o vocabulário ativo. É excelente para não deixar o inglês "enferrujar".',
    },
  ];

  const renderStars = (count) => {
    return [...Array(count)].map((_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="star-icon"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
        />
      </svg>
    ));
  };

  // LÓGICA DE "PASSAR PÁGINA"
  const handleLeftClick = (e) => {
    e.preventDefault();
    // Rola para a esquerda o valor exato da largura visível do container
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    // Rola para a direita o valor exato da largura visível do container
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <section className="feedbacks-section">
      <h2>O QUE DIZEM NOSSOS ALUNOS</h2>
      
      <div className="carousel-wrapper">
        {/* Botão Esquerda */}
        <button className="carousel-btn prev-btn" onClick={handleLeftClick}>
          &#10094;
        </button>

        {/* Container dos Cards */}
        <div className="feedbacks-carousel" ref={carousel}>
          {reviews.map((review) => (
            <div key={review.id} className="feedback-card">
              <div className="feedback-header">
                <img src={review.image} alt={review.name} className="feedback-avatar" />
                <div className="feedback-info">
                  <h3>{review.name}</h3>
                  <span className="feedback-role">{review.role}</span>
                  <div className="feedback-stars">{renderStars(review.stars)}</div>
                </div>
              </div>
              <p className="feedback-text">"{review.text}"</p>
            </div>
          ))}
        </div>

        {/* Botão Direita */}
        <button className="carousel-btn next-btn" onClick={handleRightClick}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Feedbacks;