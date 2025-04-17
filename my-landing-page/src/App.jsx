// src/App.jsx
import './App.css';
import Hero from './components/Hero';
import AboutPlanner from './components/AboutPlanner';
import HowItWorks from './components/HowItWorks';
import FAQSection from './components/FAQSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <AboutPlanner />
      <HowItWorks />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
