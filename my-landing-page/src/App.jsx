// src/App.jsx
import './App.css';
import Hero from './components/Hero';
import AboutPlanner from './components/AboutPlanner';
import HowItWorks from './components/HowItWorks';
import FAQSection from './components/FAQSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe'; // Importando o componente AboutMe

function App() {
  return (
    <div className="App">
      <Hero />
      <AboutPlanner />
      <HowItWorks />
      <AboutMe />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
