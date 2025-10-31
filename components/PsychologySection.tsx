import React, { useState } from 'react';
import { IconBrainCircuit, IconUsers, IconEyeOff, IconArrowRight } from './icons';

const concepts = [
    {
        icon: IconBrainCircuit,
        title: "Carga Cognitiva",
        subtitle: "¿Demasiada información?",
        description: "Nuestro cerebro tiene una capacidad limitada para procesar información nueva. Una comunicación efectiva (mensajes claros, buena estructura, apoyos visuales) reduce la carga cognitiva innecesaria, permitiendo que el estudiante se concentre en aprender el contenido, no en descifrar el mensaje.",
        color: "#00BFA6"
    },
    {
        icon: IconUsers,
        title: "Presencia Social",
        subtitle: "¿Hay alguien real al otro lado?",
        description: "En el entorno digital, es la sensación de estar conectado con personas reales. Se construye a través de la comunicación personal: usar nombres, compartir anécdotas, mostrar empatía y fomentar la interacción. Una alta presencia social aumenta la motivación y el compromiso.",
        color: "#B388EB"
    },
    {
        icon: IconEyeOff,
        title: "Vacío de Empatía Digital",
        subtitle: "Asumiendo lo peor del otro.",
        description: "Sin el lenguaje no verbal, es fácil malinterpretar el tono de un texto y asumir intenciones negativas. Como docente, debes ser extra-claro y explícito con el tono. Fomenta una cultura de 'asumir la buena intención' entre los estudiantes para evitar conflictos innecesarios.",
        color: "#FF8C42"
    },
];

const PsychologySection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextConcept = () => {
        setActiveIndex((prev) => (prev + 1) % concepts.length);
    };

    const prevConcept = () => {
        setActiveIndex((prev) => (prev - 1 + concepts.length) % concepts.length);
    };

    const concept = concepts[activeIndex];
    const Icon = concept.icon;

    return (
        <section id="psicologia" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#B388EB]">La Psicología de la Comunicación Digital</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Entiende el 'porqué' detrás de las buenas prácticas para aplicarlas con intención.</p>
                </div>

                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                         <div className="relative w-80 h-80">
                            {concepts.map((c, index) => {
                                const isActive = index === activeIndex;
                                return (
                                <div
                                    key={index}
                                    className="absolute w-full h-full transition-all duration-500 ease-in-out"
                                    style={{
                                        opacity: isActive ? 1 : 0,
                                        transform: `scale(${isActive ? 1 : 0.95})`,
                                        zIndex: isActive ? 10 : 0,
                                    }}
                                >
                                    <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center text-center h-full border-t-8" style={{borderColor: c.color}}>
                                        {/* FIX: Moved style prop to parent div to fix type error, as icon components do not accept a style prop. The icon color is set via currentColor. */}
                                        <div className="p-4 rounded-full bg-gray-100 mb-4" style={{color: c.color}}>
                                             <c.icon className="w-16 h-16"/>
                                        </div>
                                        <h3 className="text-2xl font-bold font-poppins" style={{color: c.color}}>{c.title}</h3>
                                        <p className="text-gray-500 italic mt-1">{c.subtitle}</p>
                                    </div>
                                </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="relative min-h-[200px]">
                            <p className="text-lg text-gray-700 leading-relaxed transition-opacity duration-300">
                                {concept.description}
                            </p>
                        </div>
                         <div className="mt-6 flex items-center justify-between">
                            <button onClick={prevConcept} className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition rotate-180">
                                <IconArrowRight className="w-6 h-6 text-gray-600" />
                            </button>
                            <div className="flex gap-2">
                                {concepts.map((_, index) => (
                                    <button key={index} onClick={() => setActiveIndex(index)} className={`w-3 h-3 rounded-full transition-colors ${activeIndex === index ? 'bg-[#B388EB]' : 'bg-gray-300 hover:bg-gray-400'}`}></button>
                                ))}
                            </div>
                            <button onClick={nextConcept} className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition">
                                <IconArrowRight className="w-6 h-6 text-gray-600" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PsychologySection;