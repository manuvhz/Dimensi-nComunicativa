
import React from 'react';
import { IconPlay, IconListen, IconLanguage, IconEmpathy, IconTechnology } from './icons';

const ResourcesSection: React.FC = () => {
  const handleAudioPlay = () => {
    alert("Imagina escuchar una voz cálida diciendo: 'La mejor herramienta tecnológica en el aula sigue siendo la conexión humana. Comunica para conectar, y la tecnología seguirá.'");
  };

  return (
    <section id="recursos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#B388EB]">Recursos Multimedia Inspiradores</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Explora diferentes formas de entender y aplicar la comunicación.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video and Audio Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-poppins text-gray-800 mb-4">Video Reflexivo</h3>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
                 <img src="https://picsum.photos/seed/tech/800/450" alt="Video placeholder" className="rounded-lg object-cover w-full h-full" />
                 <div className="absolute bg-black/30 inset-0 rounded-lg flex items-center justify-center">
                    <div className="text-white bg-black/50 p-4 rounded-full">
                        <IconPlay className="w-12 h-12" />
                    </div>
                 </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-poppins text-gray-800 mb-4">Reflexión en Audio</h3>
              <button
                onClick={handleAudioPlay}
                className="w-full bg-white p-6 rounded-lg shadow-md flex items-center gap-6 group transition-all hover:bg-[#FF8C42]/10"
              >
                <div className="bg-[#FF8C42] text-white p-4 rounded-full transition-transform group-hover:scale-110">
                  <IconPlay className="w-8 h-8"/>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-left">Una voz sobre la comunicación</h4>
                  <p className="text-gray-600 text-left">Haz clic para escuchar una breve reflexión.</p>
                </div>
              </button>
            </div>
          </div>

          {/* Icon Gallery Section */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold font-poppins text-gray-800 mb-6 text-center">Formas de Comunicar</h3>
            <div className="grid grid-cols-2 gap-8 text-center">
              <div className="flex flex-col items-center">
                <IconLanguage className="w-12 h-12 text-[#00BFA6]" />
                <p className="mt-2 font-semibold">Verbal y Escrita</p>
              </div>
              <div className="flex flex-col items-center">
                <IconEmpathy className="w-12 h-12 text-[#FF8C42]" />
                <p className="mt-2 font-semibold">No Verbal (Gestos)</p>
              </div>
              <div className="flex flex-col items-center">
                <IconListen className="w-12 h-12 text-[#B388EB]" />
                <p className="mt-2 font-semibold">Visual (Gráficos)</p>
              </div>
              <div className="flex flex-col items-center">
                <IconTechnology className="w-12 h-12 text-[#00BFA6]" />
                <p className="mt-2 font-semibold">Digital (Multimedia)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
