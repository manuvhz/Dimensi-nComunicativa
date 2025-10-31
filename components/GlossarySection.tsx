
import React from 'react';
import type { GlossaryTerm } from '../types';
import { IconGlossary } from './icons';

const terms: GlossaryTerm[] = [
  { term: "Netiqueta", definition: "Conjunto de normas de comportamiento y cortesía en internet. Es la etiqueta del mundo digital, crucial para mantener un ambiente de respeto en foros y clases virtuales.", category: "Concepto" },
  { term: "Comunicación Asíncrona", definition: "Interacción que no ocurre en tiempo real. Ejemplos: correo electrónico, foros de discusión, comentarios en tareas. Permite flexibilidad y reflexión.", category: "Tipo" },
  { term: "Comunicación Síncrona", definition: "Interacción que ocurre en tiempo real. Ejemplos: videoconferencias, chats en vivo. Fomenta la inmediatez y la espontaneidad.", category: "Tipo" },
  { term: "Andamiaje (Scaffolding)", definition: "Apoyo temporal que el docente proporciona al estudiante para ayudarle a alcanzar una meta de aprendizaje que no podría lograr solo. Se retira gradualmente.", category: "Pedagogía" },
  { term: "Carga Cognitiva", definition: "La cantidad total de esfuerzo mental que se utiliza en la memoria de trabajo. Una buena comunicación busca reducir la carga cognitiva innecesaria para centrarse en el aprendizaje.", category: "Pedagogía" },
  { term: "Feedback Formativo", definition: "Retroalimentación continua y orientada al proceso, diseñada para guiar y mejorar el aprendizaje del estudiante, en lugar de solo calificar el resultado final.", category: "Concepto" },
  { term: "Presencia Social", definition: "El grado en que los participantes de una comunidad en línea se sienten conectados y se perciben como personas reales. Se construye con interacciones personales y empáticas.", category: "Concepto" },
  { term: "Alfabetización Digital", definition: "La habilidad para encontrar, evaluar, utilizar, compartir y crear contenido usando tecnologías digitales y de internet. Incluye la habilidad de comunicarse efectivamente en estos medios.", category: "Pedagogía" },
];

const GlossarySection: React.FC = () => {
  return (
    <section id="glosario" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#FF8C42]">Glosario de Comunicación Digital</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Un diccionario de bolsillo para el docente comunicador del siglo XXI.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {terms.map((item, index) => (
                <div key={index} className="bg-gray-50 border-l-4 border-[#FF8C42] p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold font-poppins text-gray-800">{item.term}</h3>
                    <p className="mt-2 text-gray-600">{item.definition}</p>
                    <span className="inline-block bg-[#FF8C42]/20 text-[#d96d2b] text-xs font-semibold mt-4 px-2.5 py-0.5 rounded-full">{item.category}</span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default GlossarySection;
