import React, { useState, useEffect, useRef } from 'react';
import type { ConversationNode, ChatMessage } from '../types';
import { IconStudent, IconTeacher, IconChat } from './icons';

const conversationTree: Record<string, ConversationNode> = {
  start: {
    id: 'start',
    studentMessage: "Hola profe, ¿quería hablar conmigo sobre mi entrega?",
    options: [
      { text: "Hola. Sí, he notado algo en tu código y me gustaría que lo conversáramos.", nextNodeId: "direct_approach" },
      { text: "¡Hola! ¿Cómo estás? Quería felicitarte primero por el esfuerzo en el proyecto.", nextNodeId: "soft_approach" },
      { text: "Sí. He detectado que tu código es una copia de una solución de internet.", nextNodeId: "accusation" },
    ],
  },
  direct_approach: {
    id: 'direct_approach',
    studentMessage: "Oh, ok. ¿Hay algún problema? Me esforcé mucho.",
    options: [
      { text: "He visto que la estructura de tu solución es idéntica a una que encontré en un foro online. ¿Puedes explicarme tu proceso para llegar a ella?", nextNodeId: "inquiry" },
      { text: "El problema es que esto parece plagio. ¿Lo copiaste?", nextNodeId: "accusation" },
    ],
  },
  soft_approach: {
    id: 'soft_approach',
    studentMessage: "¡Gracias, profe! Sí, le dediqué bastante tiempo. ¿Qué quería comentarme?",
    options: [
       { text: "Al revisarlo, vi que usaste un enfoque muy avanzado. Me gustaría entender cómo llegaste a esa solución, para poder evaluarte bien.", nextNodeId: "inquiry" },
       { text: "Me alegra. También noté que algunas partes son muy similares a ejemplos que se encuentran en línea. Hablemos de cómo usar recursos externos.", nextNodeId: "guidance" },
    ],
  },
  accusation: {
    id: 'accusation',
    studentMessage: "¡No! No lo copié... Bueno, tal vez me inspiré un poco, pero no es una copia. Me está acusando de algo muy grave.",
    options: [],
    isEnd: true,
    endMessage: "La conversación se ha vuelto defensiva. Al acusar directamente, es difícil generar un diálogo constructivo. El foco se ha movido del aprendizaje a la defensa. Intenta de nuevo con un enfoque más indagador."
  },
  inquiry: {
    id: 'inquiry',
    studentMessage: "Uhm... Bueno, estuve buscando ayuda en internet porque estaba muy atascado. Encontré un código que hacía algo parecido y lo adapté.",
    options: [
        { text: "Gracias por tu honestidad. Es normal buscar ayuda. Hablemos sobre la diferencia entre inspirarse y copiar, y cómo citar tus fuentes.", nextNodeId: "guidance" },
        { text: "Adaptarlo no es suficiente. El trabajo debe ser original. Tendré que calificar esto con la nota mínima.", nextNodeId: "penalty" },
    ],
  },
  guidance: {
    id: 'guidance',
    studentMessage: "Ok... No sabía que tenía que citar código. Pensé que si lo entendía, estaba bien. Gracias por explicármelo.",
    options: [],
    isEnd: true,
    endMessage: "¡Excelente resultado! Al enfocarte en el aprendizaje y la guía, el estudiante entiende la falta, aprende la forma correcta de actuar y se siente apoyado, no atacado. La comunicación ha sido un puente para el crecimiento."
  },
  penalty: {
    id: 'penalty',
    studentMessage: "Entiendo... Me siento fatal. No volverá a pasar.",
    options: [],
    isEnd: true,
    endMessage: "Aunque se ha establecido una consecuencia, la oportunidad de aprendizaje ha sido limitada. El estudiante puede sentir más miedo que comprensión. A veces es necesario, pero un enfoque educativo suele ser más efectivo a largo plazo."
  }
};

const ChatSimulatorSection: React.FC = () => {
    const [currentNodeId, setCurrentNodeId] = useState('start');
    const [history, setHistory] = useState<ChatMessage[]>([]);
    const [isChoosing, setIsChoosing] = useState(true);
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initialNode = conversationTree[currentNodeId];
        setHistory([{ sender: 'student', text: initialNode.studentMessage, timestamp: '10:00 AM' }]);
    }, []);

    useEffect(() => {
        if (chatEndRef.current) {
            chatEndRef.current.scrollTop = chatEndRef.current.scrollHeight;
        }
    }, [history]);

    const handleOptionSelect = (nextNodeId: string, choiceText: string) => {
        setIsChoosing(false);
        const newHistory: ChatMessage[] = [...history, { sender: 'teacher', text: choiceText, timestamp: '10:01 AM' }];
        setHistory(newHistory);

        setTimeout(() => {
            const nextNode = conversationTree[nextNodeId];
            if (nextNode) {
                setHistory(prev => [...prev, { sender: 'student', text: nextNode.studentMessage, timestamp: '10:02 AM' }]);
                setCurrentNodeId(nextNodeId);
                if (!nextNode.isEnd) {
                    setIsChoosing(true);
                }
            }
        }, 1500);
    };
    
    const resetSimulator = () => {
        const initialNode = conversationTree['start'];
        setCurrentNodeId('start');
        setHistory([{ sender: 'student', text: initialNode.studentMessage, timestamp: '10:00 AM' }]);
        setIsChoosing(true);
    }

    const currentNode = conversationTree[currentNodeId];

  return (
    <section id="simulador" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#B388EB]">Simulador de Chat: Casos Difíciles</h2>
            <p className="mt-4 text-lg text-gray-600">Practica tus habilidades de comunicación en una conversación simulada. Tus elecciones importan.</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl flex flex-col h-[70vh]">
            <div className="bg-gray-50 p-4 rounded-t-2xl border-b flex items-center gap-3">
                <div className="relative">
                    <IconStudent className="w-10 h-10 text-gray-500"/>
                    <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-400 ring-2 ring-white"></span>
                </div>
                <div>
                    <h3 className="font-bold">Alex (Estudiante)</h3>
                    <p className="text-sm text-gray-500">En línea</p>
                </div>
            </div>

            {/* Chat History */}
            <div ref={chatEndRef} className="flex-grow p-6 overflow-y-auto bg-gray-100/50">
                <div className="space-y-4">
                    {history.map((msg, index) => (
                        <div key={index} className={`flex items-end gap-2 ${msg.sender === 'teacher' ? 'justify-end' : 'justify-start'}`}>
                            {msg.sender === 'student' && <IconStudent className="w-6 h-6 text-gray-400"/>}
                            <div className={`max-w-xs md:max-w-md p-3 rounded-2xl ${msg.sender === 'teacher' ? 'bg-[#B388EB] text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'}`}>
                                <p>{msg.text}</p>
                            </div>
                            {msg.sender === 'teacher' && <IconTeacher className="w-6 h-6 text-gray-400"/>}
                        </div>
                    ))}
                </div>
            </div>

            {/* Options / End Message */}
            <div className="p-6 border-t">
                {isChoosing && !currentNode.isEnd ? (
                    <div className="space-y-3">
                        {currentNode.options.map((opt, index) => (
                            <button key={index} onClick={() => handleOptionSelect(opt.nextNodeId, opt.text)} className="w-full text-left p-3 border-2 border-gray-200 rounded-lg hover:bg-[#B388EB]/10 hover:border-[#B388EB] transition-all">
                                {opt.text}
                            </button>
                        ))}
                    </div>
                ) : currentNode.isEnd ? (
                     <div className="text-center">
                        <p className="font-semibold text-lg p-4 bg-yellow-100 text-yellow-800 rounded-lg">{currentNode.endMessage}</p>
                        <button onClick={resetSimulator} className="mt-4 bg-[#B388EB] text-white font-bold py-2 px-6 rounded-full transition-transform hover:scale-105">
                           Volver a intentar
                        </button>
                    </div>
                ) : (
                    <div className="text-center text-gray-500">
                        <p>El estudiante está escribiendo...</p>
                    </div>
                )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSimulatorSection;