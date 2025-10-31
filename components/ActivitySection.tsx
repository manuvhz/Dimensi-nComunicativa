
import React, { useState } from 'react';
import { IconCheck, IconX, IconLightbulb } from './icons';

type Message = {
    text: string;
    effective: boolean;
    explanation: string;
    icon: React.ElementType;
};

type Scenario = {
  situation: string;
  messages: Message[];
};

const scenarios: Scenario[] = [
  {
    situation: "Un estudiante está frustrado porque su programa no compila y no sabe por qué.",
    messages: [
      { text: "“El error es obvio, te falta un punto y coma.”", effective: false, explanation: "Este mensaje puede sonar condescendiente y no ayuda al estudiante a aprender a depurar.", icon: IconX },
      { text: "“¡A todos nos pasa! ¿Qué tal si leemos juntos el mensaje de error y vemos qué pista nos da?”", effective: true, explanation: "¡Perfecto! Este enfoque es empático, colaborativo y enseña una habilidad (leer errores).", icon: IconCheck },
      { text: "“Revisa la sintaxis con atención, seguro lo encuentras.”", effective: false, explanation: "Aunque es mejor, sigue siendo vago y puede aumentar la frustración.", icon: IconLightbulb },
    ],
  },
  {
    situation: "Un equipo entrega un proyecto colaborativo que, aunque funciona, está muy desorganizado.",
    messages: [
      { text: "“¡Felicidades por hacer que funcione! Ahora, ¿cómo podríamos mejorar la legibilidad para que otro programador lo entienda fácil?”", effective: true, explanation: "¡Excelente! Valida el esfuerzo primero y luego abre la puerta a la mejora de forma constructiva.", icon: IconCheck },
      { text: "“El código es un caos. Tienen que rehacerlo.”", effective: false, explanation: "Crítica destructiva que desmotiva y no ofrece una guía clara.", icon: IconX },
      { text: "“Les faltó aplicar los principios de código limpio que vimos.”", effective: false, explanation: "Señalador y acusatorio. No invita a la reflexión ni a la mejora.", icon: IconLightbulb },
    ],
  },
  {
    situation: "Durante una clase virtual, haces una pregunta abierta y nadie responde. Silencio absoluto.",
    messages: [
        { text: "“¿Nadie? Bueno, continúo.”", effective: false, explanation: "Cierra la puerta a la participación y puede hacer que los estudiantes se sientan intimidados.", icon: IconX },
        { text: "“Voy a darles un minuto para que piensen su respuesta y la escriban en el chat. ¡No hay respuestas incorrectas!”", effective: true, explanation: "¡Genial! Reduce la presión, da tiempo para pensar y ofrece una vía de participación de bajo riesgo (el chat).", icon: IconCheck },
        { text: "“Ok, Juan, ¿qué opinas tú?”", effective: false, explanation: "Poner a un estudiante en evidencia sin previo aviso puede generar ansiedad y ser contraproducente.", icon: IconLightbulb },
    ],
  },
  {
    situation: "Un estudiante te muestra con orgullo una solución a un problema que, aunque creativa, es muy ineficiente.",
    messages: [
        { text: "“Me encanta la originalidad de tu enfoque. Es una forma muy interesante de resolverlo. ¿Exploramos ahora una vía más óptima?”", effective: true, explanation: "¡Fantástico! Valida la creatividad y el esfuerzo antes de introducir el concepto de eficiencia, manteniendo alta la motivación.", icon: IconCheck },
        { text: "“Esta solución no es práctica para problemas más grandes, no es escalable.”", effective: false, explanation: "Aunque es cierto, el mensaje es puramente crítico y puede aplastar la iniciativa del estudiante.", icon: IconX },
        { text: "“Hay una forma mucho más simple de hacer esto.”", effective: false, explanation: "Minimiza el trabajo del estudiante y puede hacer que se sienta poco inteligente.", icon: IconLightbulb },
    ],
  }
];

const FlipCard: React.FC<{ message: Message; onSelect: () => void; isSelected: boolean; isDisabled: boolean }> = ({ message, onSelect, isSelected, isDisabled }) => {
  return (
    <div className="w-full h-48 [perspective:1000px]">
      <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${isSelected ? '[transform:rotateY(180deg)]' : ''}`}>
        {/* Front */}
        <button onClick={onSelect} disabled={isDisabled} className="absolute w-full h-full bg-white rounded-lg shadow-md border-2 border-gray-200 p-4 text-center flex flex-col justify-center items-center [backface-visibility:hidden] transition-colors hover:border-[#00BFA6] hover:bg-[#00BFA6]/5 disabled:cursor-not-allowed disabled:bg-gray-100">
          <p className="text-lg text-gray-700">"{message.text}"</p>
        </button>
        {/* Back */}
        <div className={`absolute w-full h-full rounded-lg shadow-lg p-4 flex flex-col justify-center items-center text-white [backface-visibility:hidden] [transform:rotateY(180deg)] ${message.effective ? 'bg-green-500' : 'bg-orange-500'}`}>
          <message.icon className="w-10 h-10 mb-2" />
          <p className="font-semibold text-center">{message.explanation}</p>
        </div>
      </div>
    </div>
  );
};


const ActivitySection: React.FC = () => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);

  const handleSelectMessage = (index: number) => {
    if (selectedIndex !== null) return;
    setSelectedIndex(index);
  };

  const nextScenario = () => {
    if (currentScenarioIndex < scenarios.length - 1) {
      setCurrentScenarioIndex(prev => prev + 1);
      setSelectedIndex(null);
    } else {
      setFinished(true);
    }
  };
  
  const resetActivity = () => {
      setCurrentScenarioIndex(0);
      setSelectedIndex(null);
      setFinished(false);
  }

  const progress = ((currentScenarioIndex + 1) / scenarios.length) * 100;

  return (
    <section id="actividad" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#FF8C42]">Actividad: Elige tu Mensaje</h2>
        <p className="mt-4 text-lg text-gray-600">En cada situación, una de tus respuestas construye un puente. Las otras crean barreras. ¡Elige sabiamente!</p>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8 text-left">
          {!finished ? (
            <>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-semibold text-gray-600">Situación {currentScenarioIndex + 1} de {scenarios.length}</p>
                  <p className="font-bold text-[#FF8C42]">{Math.round(progress)}% Completado</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-[#FF8C42] to-[#ffaf7e] h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                </div>
              </div>
              
              <p className="text-xl text-center font-semibold text-gray-800 mb-8 bg-gray-100 p-4 rounded-lg">{scenarios[currentScenarioIndex].situation}</p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {scenarios[currentScenarioIndex].messages.map((msg, index) => (
                  <FlipCard 
                    key={index} 
                    message={msg} 
                    onSelect={() => handleSelectMessage(index)}
                    isSelected={selectedIndex === index}
                    isDisabled={selectedIndex !== null && selectedIndex !== index}
                  />
                ))}
              </div>

              {selectedIndex !== null && (
                <div className="mt-8 text-center animate-fade-in">
                  <button onClick={nextScenario} className="w-full md:w-auto bg-[#00BFA6] text-white font-bold py-3 px-8 rounded-full transition-transform hover:scale-105 shadow-lg">
                    {currentScenarioIndex < scenarios.length - 1 ? 'Siguiente Situación' : 'Finalizar Actividad'}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-10">
              <h3 className="text-3xl font-bold font-poppins text-green-500 mb-4">¡Actividad Completada!</h3>
              <p className="text-2xl italic text-gray-700 mb-8">"Comunicar bien no solo informa, ¡también inspira!"</p>
              <button onClick={resetActivity} className="bg-[#FF8C42] text-white font-bold py-3 px-8 rounded-full transition-transform hover:scale-105 shadow-lg">
                  Repetir Actividad
              </button>
            </div>
          )}
        </div>
      </div>
       <style>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.5s ease-out forwards;
          }
        `}</style>
    </section>
  );
};

export default ActivitySection;
