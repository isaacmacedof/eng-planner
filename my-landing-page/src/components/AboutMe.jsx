// src/components/AboutMe.jsx
import '../styles/AboutMe.css'; // Importando o CSS específico para o componente HowItWorks
import fotoJoanna from '../Images/foto-joanna.png'; // Importando a imagem da Joanna

const AboutMe = () => {
  return (
    <section className="aboutMe">
      <div className="personal-info">
        <div className="aboutMe-title">
          <h3>Sobre <br /> mim</h3>
          <div className="photo">
            <img className='aboutMe-photo' src={fotoJoanna} alt="Foto da Joanna" />
          </div>
        </div>
        <div className="info">
          <div className='aboutMe-text'>
            <p className='bold'>Depois de ensinar inglês por mais de 8 anos, eu lancei esse livro pra te ajudar a evoluir seu vocabulário de forma simples e com prática no dia a dia.</p>
            <p>De forma simples, você vai praticar através de leitura com histórias e contos de situações do dia a dia como ir ao mecânico, ou então algo que você precise na sua rotina.</p>
            <p>Esse livro foi estruturado e pensado para que você aprenda o máximo de vocabulário de forma prática e além da leitura, ainda vai contar com os áudios de todas as histórias para uma prática completa, treinando listening, vocabulário e speaking (lendo em voz alta).</p>
          </div>
          <button className="purchase-button">Compre Já!</button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;