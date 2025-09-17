// src/components/AboutMe.jsx
import '../styles/AboutMe.css'; // Importando o CSS específico para o componente HowItWorks
import fotoJoanna from '../Images/foto-joanna.png'; // Importando a imagem da Joanna

const AboutMe = () => {
  return (
    <section className="aboutMe">
      <div className="personal-info">
        <div className="aboutMe-title">
          <div className="photo">
            <img className='aboutMe-photo' src={fotoJoanna} alt="Foto da Joanna" />
          </div>
        </div>
        <div className="info">
          <div className='aboutMe-text'>
            <p className='bold'>
              Hi, there! Sou a teacher Joanna. Sou graduada em Letras Português/Inglês pela UFRJ. Além disso, tenho certificação de nível C2 pela Universidade de Michigan.
            </p>
            <p>
              Também tenho o CELTA da Cambridge, que me possibilita ensinar a falantes de outras línguas maternas. Por fim, em 2024 iniciei meu mestrado em literatura inglesa na UFRJ.
            </p>
            <p> 
              Criei este planner para ajudar quem tem uma rotina corrida e estuda inglês por conta própria a manter o foco com um plano de estudos prático e significativo.
            </p>
          </div>
          <button className="purchase-button">Compre Já!</button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;