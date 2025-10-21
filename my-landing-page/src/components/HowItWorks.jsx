// src/components/HowItWorks.jsx
import '../styles/HowItWorks.css'; // Importando o CSS

const HowItWorks = () => {
  // PASSO 1: O array agora é de OBJETOS.
  // Cada objeto tem o seu próprio ícone SVG e o seu texto.
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM11 13H5.09c.32 3.9 3.51 7 7.41 7 .1 0 .19-.01.29-.02-.1-.08-.19-.17-.29-.27-1.19-1.19-2.07-2.61-2.56-4.15-.1-.32-.14-.66-.14-1v-1.56zM13 13v1.56c0 .34.04.68.14 1 .49 1.53 1.37 2.96 2.56 4.15.1.1.19.19.29.27.1-.01.19-.02.29-.02 3.9-.01 7.09-3.11 7.41-7H13zm0-2h7.91c-.32-3.9-3.51-7-7.41-7-.1 0-.19.01-.29.02.1.08.19.17.29.27 1.19 1.19 2.07 2.61 2.56 4.15.1.32.14.66.14 1v1.56zM11 11V9.44c0-.34-.04-.68-.14-1-.49-1.53-1.37-2.96-2.56-4.15-.1-.1-.19-.19-.29-.27C8.11 4.01 8 4 7.91 4c-3.9.01-7.09 3.11-7.41 7H11z" />
        </svg>
      ),
      text: 'Conteúdo dos níveis básico ao avançado (A1 ao B2)',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
        </svg>
      ),
      text: 'Pratique listening, reading, writing, speaking, grammar e vocabulary',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.29-6.29L22 12V6h-6z" />
        </svg>
      ),
      text: 'Mantenha sua rotina de maneira autônoma e significativa',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
        </svg>
      ),
      text: 'Estude em casa e na hora que você quiser',
    },
  ];

  return (
    <section className="how-it-works">
      {/* PASSO 2: Título em maiúsculas */}
      <h2>COMO FUNCIONA?</h2>

      <div className="how-it-works-list">
        {/* PASSO 3: O .map() agora acede a item.icon e item.text */}
        {features.map((item, index) => (
          <div className="how-it-works-item" key={index}>
            <div className="how-it-works-icon-wrapper">
              {item.icon}
            </div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;