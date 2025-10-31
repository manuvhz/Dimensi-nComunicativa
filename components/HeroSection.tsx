
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden bg-[#00BFA6]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00BFA6] via-[#A0E7E5] to-[#B388EB] animate-gradient-xy"></div>
      <style>{`
        @keyframes gradient-xy {
            0%, 100% {
                background-size: 400% 400%;
                background-position: 10% 0%;
            }
            50% {
                background-size: 200% 200%;
                background-position: 91% 100%;
            }
        }
        .animate-gradient-xy {
            animation: gradient-xy 15s ease infinite;
        }
      `}</style>
      
      <div className="relative z-10 p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-poppins mb-4 tracking-tight drop-shadow-lg">
          Viviendo la Dimensión Comunicativa
        </h1>
        <p className="text-lg md:text-2xl mb-8 font-light drop-shadow-md">
          Explora cómo la comunicación transforma la enseñanza en la era digital.
        </p>
        <a 
          href="#contexto" 
          className="inline-block bg-[#FF8C42] text-white font-bold font-poppins text-lg py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#ff7b2b] focus:outline-none focus:ring-4 focus:ring-[#FF8C42]/50 animate-pulse-slow"
        >
          Comenzar la experiencia
        </a>
        <style>{`
            @keyframes pulse-slow {
                0%, 100% {
                    transform: scale(1);
                    box-shadow: 0 0 0 0 rgba(255, 140, 66, 0.7);
                }
                50% {
                    transform: scale(1.03);
                    box-shadow: 0 0 0 10px rgba(255, 140, 66, 0);
                }
            }
            .animate-pulse-slow {
                animation: pulse-slow 3s infinite;
            }
        `}</style>

        <p className="mt-12 text-md md:text-xl italic opacity-90">
          “Comunicar es enseñar con la mente y con el corazón.”
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
