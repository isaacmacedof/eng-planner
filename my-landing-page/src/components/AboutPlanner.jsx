// src/components/AboutPlanner.jsx
import '../styles/AboutPlanner.css';
// import checkIcon from '../Images/check-icon.png'; // REMOVIDO: Não precisamos mais do check

const AboutPlanner = () => {
  // PASSO 1: Criamos um array com as features do planner
  const features = [
    'Planner digital interativo, com quatro níveis de proficiência (A1 ~ B2), podendo ser usado no celular, computador ou tablet',
    'Checklists e trackers para medir progresso em vocabulário, listening, speaking, etc.',
    'Weekly reflection para editar e registrar o que aprendeu na semana e o que precisa ser revisado',
  ];

  return (
    <section className="about-planner">
      <h3>
        Aprenda inglês de forma natural com um planner envolvente no seu nível.
      </h3>
      <div className="features-list">
        {/* PASSO 2: Usamos .map() para criar a lista dinamicamente */}
        {features.map((feature, index) => (
          <div key={index} className="features-list-item">
            {/* PASSO 3: Adicionamos o novo ícone SVG de "Sparkle" (Brilho) */}
            <svg
              className="feature-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
            </svg>
            <p>{feature}</p>
          </div>
        ))}
      </div>
      <p className="p-promotion-AboutPlanner">
        O segredo dos poliglotas para aprender inglês mais rápido? Se planejar da
        forma correta!
      </p>
      
      {/* PASSO 4: Usamos a classe de botão genérica para consistência */}
      <button className="purchase-button">Compre Já</button>
    </section>
  );
};

export default AboutPlanner;