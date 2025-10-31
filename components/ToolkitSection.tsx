
import React from 'react';
import { IconTools } from './icons';

const tools = [
  {
    name: 'Miro / FigJam',
    description: 'Pizarras colaborativas infinitas para lluvias de ideas, mapas conceptuales y diagramas de flujo en tiempo real.',
    useCase: 'Fomentar la comunicación visual y la co-creación.',
    color: 'blue'
  },
  {
    name: 'Loom / Screencastify',
    description: 'Graba tu pantalla y cámara para dar feedback de código personalizado, explicar conceptos complejos o crear mini-tutoriales.',
    useCase: 'Comunicación asíncrona clara y personal.',
    color: 'purple'
  },
  {
    name: 'Padlet / Jamboard',
    description: 'Muros digitales donde los estudiantes pueden publicar notas adhesivas con dudas, ideas o respuestas a una pregunta.',
    useCase: 'Recoger feedback y opiniones de forma rápida y organizada.',
    color: 'orange'
  },
  {
    name: 'Discord / Slack',
    description: 'Plataformas de comunicación por canales temáticos para organizar discusiones, compartir recursos y resolver dudas de proyectos.',
    useCase: 'Centralizar la comunicación del curso o de equipos.',
    color: 'teal'
  },
   {
    name: 'Mentimeter / Kahoot!',
    description: 'Herramientas para crear encuestas interactivas, nubes de palabras y quizzes en tiempo real durante la clase.',
    useCase: 'Medir la comprensión y aumentar la participación.',
    color: 'green'
  },
  {
    name: 'GitHub / GitLab',
    description: 'Más allá de repositorios, sus "issues" y "pull requests" son herramientas de comunicación formal para discutir cambios en el código.',
    useCase: 'Enseñar comunicación técnica y profesional.',
    color: 'gray'
  }
];

const colorVariants: { [key: string]: string } = {
    blue: 'from-blue-100 to-blue-200 border-blue-300',
    purple: 'from-purple-100 to-purple-200 border-purple-300',
    orange: 'from-orange-100 to-orange-200 border-orange-300',
    teal: 'from-teal-100 to-teal-200 border-teal-300',
    green: 'from-green-100 to-green-200 border-green-300',
    gray: 'from-gray-100 to-gray-200 border-gray-300',
}


const ToolkitSection: React.FC = () => {
  return (
    <section id="toolkit" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#00BFA6]/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#00BFA6]">Caja de Herramientas del Comunicador</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Potencia tu comunicación con herramientas digitales diseñadas para la colaboración y la claridad.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className={`bg-gradient-to-br ${colorVariants[tool.color]} p-6 rounded-xl shadow-lg border-2 transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}>
              <div className="flex items-center gap-4 mb-4">
                 <div className="bg-white p-2 rounded-full">
                     <IconTools className="w-6 h-6 text-gray-700" />
                 </div>
                 <h3 className="text-xl font-bold font-poppins text-gray-800">{tool.name}</h3>
              </div>
              <p className="text-gray-700 mb-4">{tool.description}</p>
              <p className="font-semibold text-sm text-gray-600 bg-white/70 py-1 px-3 rounded-full inline-block">{tool.useCase}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolkitSection;
