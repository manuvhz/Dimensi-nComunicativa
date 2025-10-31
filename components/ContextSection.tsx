
import React from 'react';
import { IconListen, IconLanguage, IconFeedback, IconEmpathy, IconTechnology } from './icons';

const infoItems = [
  { icon: IconListen, title: 'Escucha Activa', description: 'Oír no es lo mismo que escuchar. Implica prestar atención plena para comprender el mensaje completo.' },
  { icon: IconLanguage, title: 'Lenguaje Claro', description: 'Adaptar el lenguaje al nivel de los estudiantes, evitando tecnicismos innecesarios.' },
  { icon: IconFeedback, title: 'Retroalimentación', description: 'Comunicación bidireccional que guía y motiva el aprendizaje del estudiante.' },
  { icon: IconEmpathy, title: 'Empatía Digital', description: 'Comprender y responder a las emociones de los estudiantes en entornos virtuales.' },
  { icon: IconTechnology, title: 'Tecnología', description: 'Usar herramientas digitales como puentes, no barreras, para la comunicación efectiva.' },
];

const ContextSection: React.FC = () => {
  return (
    <section id="contexto" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#00BFA6]">Significado y Contexto</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">La comunicación es el corazón del proceso didáctico. Descubre sus claves.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <h3 className="text-2xl font-bold font-poppins text-gray-800">¿Qué es la Dimensión Comunicativa?</h3>
            <p>Es el conjunto de procesos de interacción que permiten el intercambio de conocimientos, emociones y valores entre docentes y estudiantes. No se trata solo de transmitir información, sino de crear un diálogo que construya aprendizaje significativo.</p>
            <h3 className="text-2xl font-bold font-poppins text-gray-800">Su Papel en el Aula de Informática</h3>
            <p>En informática, donde los conceptos pueden ser abstractos y el lenguaje técnico, una comunicación clara y empática es crucial. Ayuda a desmitificar la complejidad, fomenta la colaboración en proyectos de código y asegura que todos los estudiantes, sin importar su nivel, se sientan incluidos y capaces de aprender.</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold font-poppins text-center mb-8 text-[#FF8C42]">Pilares de la Comunicación Docente</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {infoItems.map((item, index) => (
                <div key={index} className="group relative flex flex-col items-center text-center w-28">
                  <div className="bg-[#A0E7E5]/30 text-[#00BFA6] p-4 rounded-full transition-all duration-300 group-hover:bg-[#00BFA6] group-hover:text-white group-hover:scale-110">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <p className="mt-2 font-semibold text-sm">{item.title}</p>
                  <div className="absolute bottom-full mb-2 w-48 p-3 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-md">
                    {item.description}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-gray-800"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContextSection;
