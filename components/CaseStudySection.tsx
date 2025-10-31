import React, { useState } from 'react';
import type { CaseStudy } from '../types';
// FIX: Imported IconArrowRight to resolve reference error.
import { IconLightbulb, IconCheck, IconX, IconBrainCircuit, IconArrowRight } from './icons';

const caseStudies: CaseStudy[] = [
  {
    title: "El Estudiante Silencioso en Clase Virtual",
    scenario: "Un estudiante nunca participa verbalmente ni en el chat, aunque sus entregas son buenas. No sabes si está comprometido o simplemente es tímido.",
    failedStrategy: {
      title: "Estrategia Fallida: Ponerlo en Evidencia",
      description: "Preguntarle directamente 'Juan, ¿qué opinas?' sin previo aviso. Esto puede aumentar su ansiedad y hacer que se retraiga aún más."
    },
    successfulStrategy: {
      title: "Estrategia Exitosa: Abrir Canales Alternativos",
      description: "Usar una encuesta anónima para una pregunta de opinión, o pedir que envíen sus dudas por mensaje privado. Luego, en privado, reconocer su buen trabajo y preguntarle cómo prefiere participar."
    },
    psychologicalPrinciple: {
      name: "Presencia Social y Seguridad Psicológica",
      explanation: "Al ofrecer opciones de baja presión, aumentas su sensación de seguridad y le permites construir presencia social a su propio ritmo."
    }
  },
  {
    title: "Feedback de Código Delicado",
    scenario: "Un estudiante ha trabajado muy duro en un proyecto, pero la arquitectura del código es fundamentalmente incorrecta y necesita una reescritura importante.",
    failedStrategy: {
      title: "Estrategia Fallida: Crítica Directa al Resultado",
      description: "'Todo esto está mal, tienes que rehacerlo desde cero'. Este feedback es desmoralizador y no valora el esfuerzo invertido."
    },
    successfulStrategy: {
      title: "Estrategia Exitosa: Enfoque en el Proceso y el Crecimiento",
      description: "'Valoro enormemente las horas que has dedicado y celebro que hayas logrado que funcione. He identificado un problema en la base que podría limitarte en el futuro. ¿Podemos explorar juntos una estructura más escalable? Tu esfuerzo actual es un gran punto de partida.'"
    },
    psychologicalPrinciple: {
      name: "Mentalidad de Crecimiento (Growth Mindset)",
      explanation: "Al enfocarte en el esfuerzo y el aprendizaje futuro en lugar de etiquetar el trabajo actual como 'malo', fomentas la resiliencia y la motivación para mejorar."
    }
  },
  {
    title: "El Debate que se Salió de Control",
    scenario: "En un foro de discusión sobre 'Tabs vs. Spaces', dos estudiantes empiezan a atacarse personalmente, desviando el tema y creando un ambiente hostil.",
    failedStrategy: {
      title: "Estrategia Fallida: Ignorar o Borrar los Comentarios",
      description: "No intervenir envía el mensaje de que ese comportamiento es aceptable. Borrar sin explicación puede ser visto como censura."
    },
    successfulStrategy: {
      title: "Estrategia Exitosa: Moderación Pública y Conversación Privada",
      description: "Publicar un mensaje en el hilo recordando las normas de netiqueta y reenfocando la discusión. Luego, contactar a los dos estudiantes en privado para mediar, entender sus puntos de vista y recordarles el objetivo del debate."
    },
    psychologicalPrinciple: {
      name: "Netiqueta y Regulación Comunitaria",
      explanation: "La comunicación efectiva a veces requiere establecer y hacer cumplir límites claros para proteger el espacio de aprendizaje de toda la comunidad."
    }
  },
];

const CaseCard: React.FC<{ study: CaseStudy; isOpen: boolean; onClick: () => void }> = ({ study, isOpen, onClick }) => {
    return (
        <div className="border bg-white rounded-xl shadow-sm transition-all duration-500 overflow-hidden">
            <button onClick={onClick} className="w-full text-left p-6">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold font-poppins text-[#00BFA6]">{study.title}</h3>
                    <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
                        <IconArrowRight className="w-6 h-6 text-gray-400" />
                    </div>
                </div>
                <p className="mt-2 text-gray-600">{study.scenario}</p>
            </button>
            <div
                className="transition-all duration-500 ease-in-out"
                style={{ maxHeight: isOpen ? '1000px' : '0px' }}
            >
                <div className="px-6 pb-6 pt-2 space-y-4">
                    {/* Failed Strategy */}
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                        <div className="flex items-center gap-3">
                            <IconX className="w-5 h-5 text-red-600" />
                            <h4 className="font-bold text-red-800">{study.failedStrategy.title}</h4>
                        </div>
                        <p className="mt-2 text-red-700 ml-8">{study.failedStrategy.description}</p>
                    </div>
                    {/* Successful Strategy */}
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                         <div className="flex items-center gap-3">
                            <IconCheck className="w-5 h-5 text-green-600" />
                            <h4 className="font-bold text-green-800">{study.successfulStrategy.title}</h4>
                        </div>
                        <p className="mt-2 text-green-700 ml-8">{study.successfulStrategy.description}</p>
                    </div>
                     {/* Principle */}
                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                         <div className="flex items-center gap-3">
                            <IconBrainCircuit className="w-5 h-5 text-yellow-600" />
                            <h4 className="font-bold text-yellow-800">Principio Psicológico: {study.psychologicalPrinciple.name}</h4>
                        </div>
                        <p className="mt-2 text-yellow-700 ml-8">{study.psychologicalPrinciple.explanation}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CaseStudySection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="casos" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#00BFA6]/5">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#00BFA6]">Estudios de Caso Aplicados</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Analiza situaciones reales del aula de informática y descubre el impacto de diferentes estrategias comunicativas.</p>
                </div>
                <div className="space-y-6">
                    {caseStudies.map((study, index) => (
                        <CaseCard
                            key={index}
                            study={study}
                            isOpen={openIndex === index}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudySection;