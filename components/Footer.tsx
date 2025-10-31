import React from 'react';
import { IconEducation, IconTechnology } from './icons';

const teamMembers = [
  'Jean Carlos Alvarez',
  'Manuel Francisco Vargas',
  'Isaac David Martínez',
  'Luis Felipe Noriega',
  'Andrés Felipe Buelvas',
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <h2 className="text-3xl font-extrabold font-poppins tracking-tight text-white sm:text-4xl">
            Dimensión Comunicativa
          </h2>
          <p className="mt-4 text-2xl italic text-[#00BFA6]">
            “Comunicar para enseñar, enseñar para conectar.”
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-center border-t border-gray-700 pt-12">
          
          {/* Columna 1: Sobre el proyecto */}
          <div>
            <h3 className="text-lg font-semibold font-poppins text-white">Sobre este Proyecto</h3>
            <p className="mt-2 text-base text-gray-400">
              Una experiencia de aprendizaje interactiva diseñada para explorar el arte de la comunicación en la enseñanza digital. Un proyecto para la asignatura de Didáctica de la Informática.
            </p>
          </div>

          {/* Columna 2: Equipo */}
          <div>
            <h3 className="text-lg font-semibold font-poppins text-white">Desarrollado por</h3>
            <ul className="mt-2 space-y-1">
              {teamMembers.map((name) => (
                <li key={name} className="text-base text-gray-400">{name}</li>
              ))}
            </ul>
          </div>
          
          {/* Columna 3: Afiliación */}
          <div>
            <h3 className="text-lg font-semibold font-poppins text-white">Afiliación Académica</h3>
            <div className="mt-2 text-base text-gray-400">
              <p>Estudiantes de V Semestre</p>
              <p>Licenciatura en Informática</p>
              <p className="font-bold text-gray-300">Universidad de Córdoba</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Equipo de Desarrollo. Todos los derechos reservados.</p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <IconEducation className="w-6 h-6" />
            <IconTechnology className="w-6 h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;