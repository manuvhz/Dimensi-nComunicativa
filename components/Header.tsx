
import React from 'react';

const sectionsConfig = {
    fundamentos: { ids: ['hero', 'contexto', 'modelos', 'psicologia', 'barreras'], label: '1. Fundamentos' },
    practica: { ids: ['quiz', 'actividad', 'simulador', 'casos'], label: '2. Práctica' },
    herramientas: { ids: ['toolkit', 'glosario'], label: '3. Herramientas' },
    sintesis: { ids: ['perfil'], label: '4. Síntesis' },
};

type Stage = keyof typeof sectionsConfig;

const getActiveStage = (activeSection: string): Stage => {
    for (const stage in sectionsConfig) {
        if (sectionsConfig[stage as Stage].ids.includes(activeSection)) {
            return stage as Stage;
        }
    }
    return 'fundamentos';
};

const Header: React.FC<{ activeSection: string }> = ({ activeSection }) => {
    const activeStage = getActiveStage(activeSection);

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <span className="font-bold font-poppins text-lg text-[#00BFA6]">Dimensión Comunicativa</span>
                    </div>
                    <div className="hidden sm:flex sm:items-center sm:space-x-8">
                        {Object.keys(sectionsConfig).map((stage) => (
                            <div key={stage} className="flex flex-col items-center">
                                <a
                                    href={`#${sectionsConfig[stage as Stage].ids[0]}`}
                                    className={`text-sm font-medium transition-colors ${activeStage === stage ? 'text-[#FF8C42]' : 'text-gray-500 hover:text-gray-900'}`}
                                >
                                    {sectionsConfig[stage as Stage].label}
                                </a>
                                <div className={`mt-1 h-1 w-4 rounded-full ${activeStage === stage ? 'bg-[#FF8C42]' : 'bg-transparent'}`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Mobile Progress Bar */}
            <div className="sm:hidden w-full bg-gray-200 h-1">
                 <div
                    className="bg-gradient-to-r from-[#00BFA6] to-[#FF8C42] h-1 transition-all duration-300"
                    style={{ width: `${(Object.keys(sectionsConfig).indexOf(activeStage) + 1) * 25}%` }}
                />
            </div>
        </header>
    );
};

export default Header;
