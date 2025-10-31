import React, { useState } from 'react';
// FIX: Imported IconCheck to resolve reference errors.
import { IconTeacher, IconChecklist, IconCheck } from './icons';

interface ProfileSectionProps {
    quizScore: number;
}

const profiles = {
    architect: {
        title: "El Arquitecto de Diálogos",
        description: "Valoras la claridad, la estructura y la lógica. Tu fortaleza es crear canales de comunicación eficientes y dar feedback preciso. Tu reto es recordar inyectar calidez y empatía para conectar a un nivel más personal.",
        icon: IconTeacher
    },
    connector: {
        title: "El Conector Empático",
        description: "Tu superpoder es la empatía. Creas espacios seguros donde los estudiantes se sienten escuchados y valorados. Tu reto es asegurar que tu comunicación, además de cálida, sea siempre clara y directa en los aspectos técnicos.",
        icon: IconTeacher
    },
    facilitator: {
        title: "El Facilitador Innovador",
        description: "Eres un puente entre el mundo del estudiante y el contenido. Usas su lenguaje y herramientas para hacer el aprendizaje relevante y motivador. Tu reto es balancear la innovación con la consistencia en tus métodos de comunicación.",
        icon: IconTeacher
    }
};

const ProfileSection: React.FC<ProfileSectionProps> = ({ quizScore }) => {
    const [clarity, setClarity] = useState(3);
    const [empathy, setEmpathy] = useState(3);
    const [profile, setProfile] = useState<keyof typeof profiles | null>(null);

    const generateProfile = () => {
        const totalScore = quizScore + clarity + empathy;
        if (totalScore > 8 && clarity > empathy) {
            setProfile('architect');
        } else if (totalScore > 8 && empathy >= clarity) {
            setProfile('connector');
        } else {
            setProfile('facilitator');
        }
    };
    
    if (profile) {
        const selectedProfile = profiles[profile];
        return (
             <section id="perfil" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#A0E7E5]/20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#00BFA6] mb-4">Tu Perfil Comunicador</h2>
                     <div className="bg-white p-8 rounded-2xl shadow-xl mt-8 text-center animate-fade-in">
                        <selectedProfile.icon className="w-16 h-16 mx-auto text-[#FF8C42] mb-4" />
                        <h3 className="text-2xl font-bold font-poppins text-[#FF8C42]">{selectedProfile.title}</h3>
                        <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto">{selectedProfile.description}</p>
                    </div>
                    
                    <div className="mt-16 text-left">
                        <h3 className="text-2xl font-bold font-poppins text-gray-800 text-center mb-6">Resumen Ejecutivo: Tus Claves para el Éxito</h3>
                        <div className="bg-white p-8 rounded-2xl shadow-xl space-y-4">
                            <div className="flex items-start gap-4">
                                <IconCheck className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold">La Comunicación es un Sistema, no un Acto.</h4>
                                    <p className="text-gray-600">Cada parte (emisor, receptor, canal, ruido) importa. Ser consciente del sistema te permite diagnosticar y solucionar problemas eficazmente.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <IconCheck className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold">Construye Puentes, no Muros.</h4>
                                    <p className="text-gray-600">Ante un problema, enfócate en la empatía y la indagación en lugar de la acusación. Tu objetivo es educar y guiar, no solo corregir.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <IconCheck className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold">Gestiona la Psicología, no solo la Tecnología.</h4>
                                    <p className="text-gray-600">Reduce la carga cognitiva, combate el vacío de empatía y construye presencia social. Las herramientas son el medio, la conexión humana es el fin.</p>
                                </div>
                            </div>
                        </div>
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
        )
    }

  return (
    <section id="perfil" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#A0E7E5]/20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#00BFA6]">Síntesis Final: Descubre tu Perfil</h2>
        <p className="mt-4 text-lg text-gray-600 mb-8">Para terminar, una última reflexión para personalizar tu aprendizaje.</p>
        
        <div className="bg-white p-8 rounded-2xl shadow-xl space-y-8">
            <div>
                <label className="block text-lg font-semibold text-gray-700 mb-3">En una escala del 1 al 5, ¿priorizas más la claridad y estructura (1) o la empatía y conexión (5) en tu comunicación?</label>
                <div className="flex justify-between items-center max-w-sm mx-auto">
                    <span className="text-sm font-bold">Claridad</span>
                    <input type="range" min="1" max="5" value={clarity} onChange={(e) => setClarity(parseInt(e.target.value))} className="w-full mx-4" />
                    <span className="text-sm font-bold">Empatía</span>
                </div>
            </div>
            <div>
                <label className="block text-lg font-semibold text-gray-700 mb-3">¿Te sientes más cómodo usando métodos tradicionales (1) o experimentando con nuevas herramientas digitales (5)?</label>
                 <div className="flex justify-between items-center max-w-sm mx-auto">
                    <span className="text-sm font-bold">Tradicional</span>
                    <input type="range" min="1" max="5" value={empathy} onChange={(e) => setEmpathy(parseInt(e.target.value))} className="w-full mx-4" />
                    <span className="text-sm font-bold">Innovador</span>
                </div>
            </div>
            <button
                onClick={generateProfile}
                className="bg-[#FF8C42] text-white font-bold py-3 px-8 rounded-full transition-transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
            >
                <IconChecklist className="w-6 h-6" />
                <span>Revelar mi Perfil y Resumen</span>
            </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;