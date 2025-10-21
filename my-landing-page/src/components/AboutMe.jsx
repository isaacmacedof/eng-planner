// src/components/AboutMe.jsx
import '../styles/AboutMe.css'; // Importando o CSS
import fotoJoanna from '../Images/foto-joanna.png'; // Importando a imagem

const AboutMe = () => {
  // PASSO 1: Criamos um array com as credenciais.
  // Fica mais fácil de ler e adicionar novos itens!
  const credentials = [
    'Graduada em Letras Português/Inglês pela UFRJ',
    'Certificação de nível C2 pela Universidade de Michigan',
    'CELTA da Cambridge (ensino para falantes de outras línguas)',
    'Mestrado em literatura inglesa na UFRJ (em andamento)',
  ];

  return (
    <section className="aboutMe">
      <div className="aboutMe-container">
        {/* Coluna 1: Foto */}
        <div className="aboutMe-photo-wrapper">
          <img
            className="aboutMe-photo"
            src={fotoJoanna}
            alt="Foto da Joanna"
          />
        </div>

        {/* Coluna 2: Informações */}
        <div className="aboutMe-info-wrapper">
          <h3 className="aboutMe-greeting">Hi, there! Sou a teacher Joanna.</h3>
          
          <p className="aboutMe-description">
            Criei este planner para ajudar quem tem uma rotina corrida e estuda
            inglês por conta própria a manter o foco com um plano de estudos
            prático e significativo.
          </p>

          <h4 className="aboutMe-credentials-title">Minhas Qualificações:</h4>

          <ul className="aboutMe-credentials-list">
            {/* PASSO 2: Usamos .map() para criar a lista de credenciais */}
            {credentials.map((item, index) => (
              <li key={index} className="credential-item">
                {/* Ícone de "check" (visto) */}
                <svg
                  className="credential-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;