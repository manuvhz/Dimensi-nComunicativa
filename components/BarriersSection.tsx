
import React, { useState } from 'react';
import { IconBarrier, IconBridge } from './icons';

const communicationData = [
  {
    barrier: 'Ruido Técnico y Sobrecarga',
    icon: IconBarrier,
    bridges: [
      'Establecer canales claros para cada tipo de comunicación (anuncios, dudas, social).',
      'Fomentar la comunicación asíncrona para respetar los tiempos de cada uno.',
      'Hacer pausas activas en clases virtuales para combatir la fatiga de pantalla.'
    ],
  },
  {
    barrier: 'Falta de Contexto No Verbal',
    icon: IconBarrier,
    bridges: [
      'Usar emojis y GIFs de forma intencionada para añadir tono y emoción.',
      'Encender la cámara (si es posible y apropiado) en momentos clave de la discusión.',
      'Practicar la sobre-comunicación verbal: expresar explícitamente el tono ("Lo digo en tono de broma...").'
    ],
  },
  {
    barrier: 'Ambigüedad y Malentendidos',
    icon: IconBarrier,
    bridges: [
      'Utilizar la técnica del parafraseo: "Entonces, si entiendo bien, lo que necesitas es..."',
      'Enviar resúmenes o minutas después de reuniones o clases importantes.',
      'Crear un glosario de términos técnicos comunes del curso para asegurar un lenguaje compartido.'
    ],
  },
];

const BarriersSection: React.FC = () => {
  const [selectedBarrier, setSelectedBarrier] = useState(0);

  return (
    <section id="barreras" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#FF8C42]">Barreras y Puentes en la Comunicación</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Toda comunicación enfrenta obstáculos. Aprende a construir puentes para superarlos.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Barreras */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-poppins text-red-500 text-center md:text-left">Barreras Comunes</h3>
            {communicationData.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedBarrier(index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 flex items-center gap-4 ${
                  selectedBarrier === index
                    ? 'bg-[#FF8C42]/20 border-[#FF8C42] shadow-lg'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-8 h-8 text-red-500 flex-shrink-0" />
                <span className="font-semibold text-lg">{item.barrier}</span>
              </button>
            ))}
          </div>

          {/* Puentes */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-inner min-h-[300px]">
            <h3 className="text-2xl font-bold font-poppins text-teal-500 mb-6 text-center md:text-left">Construyendo Puentes</h3>
            <ul className="space-y-4">
              {communicationData[selectedBarrier].bridges.map((bridge, index) => (
                <li key={index} className="flex items-start gap-3 animate-fade-in">
                  <IconBridge className="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{bridge}</span>
                </li>
              ))}
            </ul>
             <style>{`
              @keyframes fade-in {
                from { opacity: 0; transform: translateX(-10px); }
                to { opacity: 1; transform: translateX(0); }
              }
              .animate-fade-in {
                animation: fade-in 0.5s ease-out forwards;
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BarriersSection;
