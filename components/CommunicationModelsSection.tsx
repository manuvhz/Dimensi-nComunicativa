
import React, { useState } from 'react';
import { IconTeacher, IconStudent, IconBarrier, IconFeedback, IconTechnology } from './icons';

type ModelComponent = 'emitter' | 'message' | 'channel' | 'receiver' | 'feedback' | 'noise';

const componentDetails: Record<ModelComponent, { title: string; description: string; icon: React.ElementType }> = {
    emitter: {
        title: "Emisor (Docente)",
        description: "Eres tú. Tu claridad, empatía y conocimiento del tema son el punto de partida. ¿Tu intención es clara?",
        icon: IconTeacher
    },
    message: {
        title: "Mensaje (Contenido y Tono)",
        description: "No es solo 'qué' dices, sino 'cómo' lo dices. Incluye el contenido, el lenguaje corporal (en video), los emojis y la estructura.",
        icon: IconFeedback
    },
    channel: {
        title: "Canal (La Tecnología)",
        description: "La plataforma que usas: Zoom, correo, un foro, etc. Cada canal tiene sus propias reglas y limitaciones.",
        icon: IconTechnology
    },
    receiver: {
        title: "Receptor (Estudiante)",
        description: "Cada estudiante recibe el mensaje con su propio contexto, conocimientos previos y estado emocional. La comunicación no es universal.",
        icon: IconStudent
    },
    feedback: {
        title: "Retroalimentación (El Retorno)",
        description: "La respuesta del estudiante, ya sea una pregunta, una tarea entregada o un emoji. Cierra el círculo y te permite ajustar.",
        icon: IconFeedback
    },
    noise: {
        title: "Ruido (Las Interferencias)",
        description: "Cualquier cosa que distorsiona el mensaje: mala conexión a internet, notificaciones, sobrecarga de información o incluso prejuicios.",
        icon: IconBarrier
    },
};

const CommunicationModelsSection: React.FC = () => {
    const [selectedComponent, setSelectedComponent] = useState<ModelComponent | null>('emitter');

    const handleSelectComponent = (component: ModelComponent) => {
        setSelectedComponent(component);
    };

    const DetailCard = ({ component }: { component: ModelComponent | null }) => {
        if (!component) return null;
        const details = componentDetails[component];
        const Icon = details.icon;
        return (
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-[#00BFA6] relative animate-fade-in" key={component}>
                 <div className="absolute -top-5 -left-5 bg-[#00BFA6] text-white p-3 rounded-full shadow-lg">
                    <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-poppins text-[#00BFA6] mt-4 mb-2 ml-8">{details.title}</h3>
                <p className="text-gray-700 ml-8">{details.description}</p>
            </div>
        );
    };

    return (
        <section id="models" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#00BFA6]/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#00BFA6]">Modelos de Comunicación Interactivos</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">La comunicación es un sistema. Explora sus partes para entender el todo.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Interactive Diagram */}
                    <div className="w-full max-w-lg mx-auto">
                        <svg viewBox="0 0 300 180" className="w-full">
                            <defs>
                                <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#FF8C42" />
                                </marker>
                            </defs>
                            
                            {/* Paths */}
                            <path d="M 60 90 H 240" stroke="#FF8C42" strokeWidth="2" markerEnd="url(#arrow)" />
                            <path d="M 240 100 C 150 150, 150 150, 60 100" stroke="#A0E7E5" strokeWidth="2" strokeDasharray="4" fill="none" markerEnd="url(#arrow)" />

                            {/* Nodes */}
                            <g onClick={() => handleSelectComponent('emitter')} className="cursor-pointer group">
                                <circle cx="40" cy="90" r="20" fill={selectedComponent === 'emitter' ? '#00BFA6' : 'white'} stroke="#00BFA6" strokeWidth="2" />
                                <text x="40" y="95" textAnchor="middle" fill={selectedComponent === 'emitter' ? 'white' : '#00BFA6'} className="font-bold text-[10px] group-hover:scale-110 transition-transform">Tú</text>
                            </g>
                             <g onClick={() => handleSelectComponent('receiver')} className="cursor-pointer group">
                                <circle cx="260" cy="90" r="20" fill={selectedComponent === 'receiver' ? '#00BFA6' : 'white'} stroke="#00BFA6" strokeWidth="2" />
                                <text x="260" y="95" textAnchor="middle" fill={selectedComponent === 'receiver' ? 'white' : '#00BFA6'} className="font-bold text-[8px] group-hover:scale-110 transition-transform">Alumno</text>
                            </g>

                            {/* Labels */}
                             <g onClick={() => handleSelectComponent('message')} className="cursor-pointer">
                                <text x="150" y="80" textAnchor="middle" className="font-semibold text-sm fill-gray-700 hover:fill-[#FF8C42]">Mensaje</text>
                            </g>
                            <g onClick={() => handleSelectComponent('channel')} className="cursor-pointer">
                                <text x="150" y="105" textAnchor="middle" className="font-light text-[10px] fill-gray-500 hover:fill-[#FF8C42]">(vía Zoom)</text>
                            </g>
                             <g onClick={() => handleSelectComponent('feedback')} className="cursor-pointer">
                                <text x="150" y="135" textAnchor="middle" className="font-semibold text-sm fill-gray-700 hover:fill-[#A0E7E5]">Feedback</text>
                            </g>

                            {/* Noise */}
                             <g onClick={() => handleSelectComponent('noise')} className="cursor-pointer">
                                <path d="M 100 20 l 5 10 l -10 0 Z" fill="#FF8C42" />
                                <text x="100" y="15" textAnchor="middle" className="font-semibold text-xs fill-red-500">Ruido</text>
                                <path d="M 180 40 l 5 -10 l 10 0 Z" fill="#FF8C42" />
                                <text x="195" y="45" textAnchor="middle" className="font-semibold text-xs fill-red-500">Ruido</text>
                            </g>
                        </svg>
                    </div>

                    {/* Details */}
                    <div className="min-h-[180px]">
                        <DetailCard component={selectedComponent} />
                    </div>
                </div>
            </div>
             <style>{`
              @keyframes fade-in {
                from { opacity: 0; transform: scale(0.95); }
                to { opacity: 1; transform: scale(1); }
              }
              .animate-fade-in {
                animation: fade-in 0.4s ease-out forwards;
              }
            `}</style>
        </section>
    );
};

export default CommunicationModelsSection;
