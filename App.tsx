
import React, { useRef, useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import ContextSection from './components/ContextSection';
import CommunicationModelsSection from './components/CommunicationModelsSection';
import PsychologySection from './components/PsychologySection';
import BarriersSection from './components/BarriersSection';
import QuizSection from './components/QuizSection';
import ActivitySection from './components/ActivitySection';
import ChatSimulatorSection from './components/ChatSimulatorSection';
import CaseStudySection from './components/CaseStudySection';
import ToolkitSection from './components/ToolkitSection';
import GlossarySection from './components/GlossarySection';
import ProfileSection from './components/ProfileSection';
import Footer from './components/Footer';
import Header from './components/Header';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [quizScore, setQuizScore] = useState(0);

  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    contexto: useRef<HTMLDivElement>(null),
    modelos: useRef<HTMLDivElement>(null),
    psicologia: useRef<HTMLDivElement>(null),
    barreras: useRef<HTMLDivElement>(null),
    quiz: useRef<HTMLDivElement>(null),
    actividad: useRef<HTMLDivElement>(null),
    simulador: useRef<HTMLDivElement>(null),
    casos: useRef<HTMLDivElement>(null),
    toolkit: useRef<HTMLDivElement>(null),
    glosario: useRef<HTMLDivElement>(null),
    perfil: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="bg-white text-gray-800 antialiased">
      <Header activeSection={activeSection} />
      <main>
        <div ref={sectionRefs.hero} id="hero"><HeroSection /></div>
        <div ref={sectionRefs.contexto} id="contexto"><ContextSection /></div>
        <div ref={sectionRefs.modelos} id="modelos"><CommunicationModelsSection /></div>
        <div ref={sectionRefs.psicologia} id="psicologia"><PsychologySection /></div>
        <div ref={sectionRefs.barreras} id="barreras"><BarriersSection /></div>
        <div ref={sectionRefs.quiz} id="quiz"><QuizSection setFinalScore={setQuizScore} /></div>
        <div ref={sectionRefs.actividad} id="actividad"><ActivitySection /></div>
        <div ref={sectionRefs.simulador} id="simulador"><ChatSimulatorSection /></div>
        <div ref={sectionRefs.casos} id="casos"><CaseStudySection /></div>
        <div ref={sectionRefs.toolkit} id="toolkit"><ToolkitSection /></div>
        <div ref={sectionRefs.glosario} id="glosario"><GlossarySection /></div>
        <div ref={sectionRefs.perfil} id="perfil"><ProfileSection quizScore={quizScore} /></div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
