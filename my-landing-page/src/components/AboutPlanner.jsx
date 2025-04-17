import '../styles/AboutPlanner.css';
import checkIcon from '../Images/check-icon.png';

const AboutPlanner = () => {
  return (
    <section className="about-planner">
      <h3>Aprenda inglês de forma natural lendo histórias envolventes no seu nível.</h3>
      <div className="features-list">
        <div className="features-list-item">
          <img className='about-check-icon' src={checkIcon} />
          <p>Do básico ao avançado: 20 histórias adaptadas para o seu nível atual</p>
        </div>
        <div className="features-list-item">
          <img className='about-check-icon' src={checkIcon} />
          <p>Histórias com vocabulário e gramática adequados ao seu nível</p>
        </div>
        <div className="features-list-item">
          <img className='about-check-icon' src={checkIcon} />
          <p>Histórias curtas: Aprenda de forma leve e divertida</p>
        </div>
      </div>
      <p className='p-promotion-AboutPlanner'>O segredo dos poliglotas para aprender inglês mais rápido? Se planejar da forma correta!</p>
      <button className="purchase-button-about-planner">Botão de Compra</button>
    </section>
  );
};

export default AboutPlanner;