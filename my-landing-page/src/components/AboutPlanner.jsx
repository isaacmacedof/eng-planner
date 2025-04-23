import '../styles/AboutPlanner.css';
import checkIcon from '../Images/check-icon.png';

const AboutPlanner = () => {
  return (
    <section className="about-planner">
      <h3>Aprenda inglês de forma natural com um planner envolvente no seu nível.</h3>
      <div className="features-list">
        <div className="features-list-item">
          <img className='about-check-icon' src={checkIcon} />
          <p>Planner digital interativo, com quatro níveis de proficiência (A1 ~ B2), podendo ser usado no celular, computador ou tablet</p>
        </div>
        <div className="features-list-item">
          <img className='about-check-icon' src={checkIcon} />
          <p>Checklists e trackers para medir progresso em vocabulário, listening, speaking, etc.</p>
        </div>
        <div className="features-list-item">
          <img className='about-check-icon' src={checkIcon} />
          <p>Weekly reflection para editar e registrar o que aprendeu na semana e o que precisa ser revisado</p>
        </div>
      </div>
      <p className='p-promotion-AboutPlanner'>O segredo dos poliglotas para aprender inglês mais rápido? Se planejar da forma correta!</p>
      <button className="purchase-button-about-planner">Botão de Compra</button>
    </section>
  );
};

export default AboutPlanner;