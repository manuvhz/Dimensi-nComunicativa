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
    
    const EmitterIcon = componentDetails.emitter.icon;
    const ReceiverIcon = componentDetails.receiver.icon;
    const NoiseIcon = componentDetails.noise.icon;

    return (
        <section id="models" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#00BFA6]/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#00BFA6]">Modelos de Comunicación Interactivos</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">La comunicación es un sistema. Explora sus partes para entender el todo.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Interactive Diagram */}
                    <div className="w-full max-w-lg mx-auto p-4">
                        <svg viewBox="0 0 400 220" className="w-full font-sans">
                            <defs>
                                <marker id="arrow-message" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#FF8C42" />
                                </marker>
                                <marker id="arrow-feedback" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#A0E7E5" />
                                </marker>
                            </defs>
                            
                            {/* PATHS */}
                            <path id="messagePath" d="M 80 110 Q 200 40, 320 110" stroke="#FF8C42" strokeWidth="2.5" fill="none" markerEnd="url(#arrow-message)" />
                            <path id="feedbackPath" d="M 320 120 Q 200 190, 80 120" stroke="#A0E7E5" strokeWidth="2" strokeDasharray="5 5" fill="none" markerEnd="url(#arrow-feedback)" />
                            
                            {/* NODES */}
                            <g onClick={() => handleSelectComponent('emitter')} className="cursor-pointer group">
                                <circle cx="60" cy="115" r="28" fill={selectedComponent === 'emitter' ? '#00BFA6' : 'white'} stroke="#00BFA6" strokeWidth="2" className="transition-all" />
                                <foreignObject x="46" y="101" width="28" height="28">
                                    <EmitterIcon className={`w-full h-full transition-colors ${selectedComponent === 'emitter' ? 'text-white' : 'text-[#00BFA6]'}`} />
                                </foreignObject>
                                <text x="60" y="155" textAnchor="middle" className="font-bold text-sm fill-gray-700">Docente</text>
                            </g>

                            <g onClick={() => handleSelectComponent('receiver')} className="cursor-pointer group">
                                <circle cx="340" cy="115" r="28" fill={selectedComponent === 'receiver' ? '#00BFA6' : 'white'} stroke="#00BFA6" strokeWidth="2" className="transition-all" />
                                <foreignObject x="326" y="101" width="28" height="28">
                                    <ReceiverIcon className={`w-full h-full transition-colors ${selectedComponent === 'receiver' ? 'text-white' : 'text-[#00BFA6]'}`} />
                                </foreignObject>
                                <text x="340" y="155" textAnchor="middle" className="font-bold text-sm fill-gray-700">Estudiante</text>
                            </g>

                            {/* CLICKABLE LABELS */}
                            <text x="200" y="60" textAnchor="middle" onClick={() => handleSelectComponent('message')} className={`font-semibold text-lg cursor-pointer transition-colors ${selectedComponent === 'message' ? 'fill-[#FF8C42]' : 'fill-gray-800'}`}>
                                Mensaje
                            </text>
                            <text x="200" y="80" textAnchor="middle" onClick={() => handleSelectComponent('channel')} className={`font-medium text-sm cursor-pointer transition-colors ${selectedComponent === 'channel' ? 'fill-gray-500' : 'fill-gray-500 hover:fill-gray-800'}`}>
                                (Canal: Plataforma Digital)
                            </text>
                            <text x="200" y="175" textAnchor="middle" onClick={() => handleSelectComponent('feedback')} className={`font-semibold text-lg cursor-pointer transition-colors ${selectedComponent === 'feedback' ? 'fill-[#00BFA6]' : 'fill-gray-800'}`}>
                                Retroalimentación
                            </text>

                            {/* NOISE */}
                            <g onClick={() => handleSelectComponent('noise')} className="cursor-pointer group">
                                <foreignObject x="140" y="50" width="24" height="24">
                                    <div className="transition-transform group-hover:scale-110">
                                        <NoiseIcon className={`w-full h-full ${selectedComponent === 'noise' ? 'text-red-500' : 'text-red-400/80'}`} />
                                    </div>
                                </foreignObject>
                                <foreignObject x="240" y="80" width="24" height="24">
                                    <div className="transition-transform group-hover:scale-110" style={{ transform: 'rotate(30deg)' }}>
                                        <NoiseIcon className={`w-full h-full ${selectedComponent === 'noise' ? 'text-red-500' : 'text-red-400/80'}`} />
                                    </div>
                                </foreignObject>
                                <text x="200" y="25" textAnchor="middle" className={`font-bold text-base transition-colors ${selectedComponent === 'noise' ? 'fill-red-600' : 'fill-red-500'}`}>
                                    Ruido
                                </text>
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