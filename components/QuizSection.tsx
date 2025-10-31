
import React, { useState } from 'react';
import type { QuizQuestion } from '../types';
import { IconCheck, IconX, IconLightbulb } from './icons';

const quizQuestions: QuizQuestion[] = [
  {
    question: "Un estudiante te envía un código con errores y dice: 'No entiendo nada'. ¿Cuál es la respuesta más comunicativa?",
    options: [
      "Revisa el material de la clase.",
      "Veo que estás atascado. Muéstrame qué parte te confunde más y lo vemos juntos.",
      "El error está en la línea 15.",
    ],
    correctOptionIndex: 1,
    feedback: {
      correct: "¡Exacto! Esta respuesta abre el diálogo y muestra empatía.",
      incorrect: "Esta respuesta podría cerrar la comunicación. Intenta ser más abierto y colaborativo."
    }
  },
  {
    question: "Al dar feedback sobre un proyecto, ¿qué enfoque es más efectivo?",
    options: [
      "Enumerar todos los errores encontrados.",
      "Solo mencionar los puntos positivos para no desmotivar.",
      "Usar la técnica del 'sándwich': algo positivo, un área de mejora y una conclusión positiva.",
    ],
    correctOptionIndex: 2,
    feedback: {
      correct: "¡Muy bien! Un feedback equilibrado es clave para motivar y guiar.",
      incorrect: "El feedback debe ser balanceado para ser constructivo."
    }
  },
  {
    question: "En una clase virtual, notas que varios estudiantes tienen la cámara apagada. ¿Qué haces?",
    options: [
      "Exigir que todos enciendan sus cámaras inmediatamente.",
      "Ignorarlo y continuar con la clase.",
      "Hacer una pausa y preguntar amablemente: '¿Todo bien por ahí? Me gustaría veros si es posible.'",
    ],
    correctOptionIndex: 2,
    feedback: {
      correct: "Correcto. Esta opción es empática y respeta la privacidad, pero sin dejar de invitar a la conexión.",
      incorrect: "Busca una forma de conectar que sea comprensiva con las circunstancias de los estudiantes."
    }
  },
  {
    question: "Un estudiante utiliza jerga de videojuegos para explicar un concepto de programación. ¿Cómo reaccionas?",
    options: [
      "Le pido que use un lenguaje más formal y académico.",
      "Aprovecho su analogía para conectar con el resto de la clase: '¡Buena idea! Pensemos en una variable como el inventario de un personaje.'",
      "Le corrijo indicando que esa terminología no es adecuada.",
    ],
    correctOptionIndex: 1,
    feedback: {
      correct: "¡Genial! Usar el lenguaje del estudiante crea puentes y hace el aprendizaje más relevante.",
      incorrect: "Conectar con el mundo del estudiante es una poderosa herramienta comunicativa."
    }
  },
];

interface QuizSectionProps {
  setFinalScore: (score: number) => void;
}

const QuizSection: React.FC<QuizSectionProps> = ({ setFinalScore }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'incorrect' | 'idea'; message: string } | null>(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleOptionSelect = (optionIndex: number) => {
    if (feedback) return;
    
    setSelectedOption(optionIndex);
    const question = quizQuestions[currentQuestionIndex];
    let newScore = score;
    if (optionIndex === question.correctOptionIndex) {
      setFeedback({ type: 'correct', message: question.feedback.correct });
      newScore = score + 1;
      setScore(newScore);
    } else {
      setFeedback({ type: 'incorrect', message: question.feedback.incorrect });
    }

    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(i => i + 1);
        setSelectedOption(null);
        setFeedback(null);
      } else {
        setFinalScore(newScore);
        setQuizFinished(true);
      }
    }, 2500);
  };

  const getResult = () => {
    if (score === quizQuestions.length) return "¡Excelente! Eres un comunicador digital empático y efectivo. ¡Sigue así!";
    if (score >= quizQuestions.length / 2) return "¡Buen trabajo! Tienes una buena base comunicativa. Sigue mejorando tu escucha activa.";
    return "La comunicación es una habilidad que se practica. ¡La reflexión es el primer paso para mejorar!";
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setFeedback(null);
    setScore(0);
    setQuizFinished(false);
    setFinalScore(0);
  }

  if (quizFinished) {
    return (
      <section id="quiz" className="py-20 px-4 bg-[#B388EB]/10">
        <div className="max-w-3xl mx-auto text-center bg-white p-10 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold font-poppins text-[#B388EB] mb-4">Quiz Finalizado</h2>
          <p className="text-xl text-gray-700 mb-6">Tu puntuación: {score} de {quizQuestions.length}</p>
          <p className="text-lg font-semibold text-[#FF8C42]">{getResult()}</p>
          <button
            onClick={restartQuiz}
            className="mt-8 bg-[#00BFA6] text-white font-bold py-2 px-6 rounded-full transition-transform hover:scale-105"
          >
            Intentar de nuevo
          </button>
        </div>
      </section>
    );
  }

  const question = quizQuestions[currentQuestionIndex];

  return (
    <section id="quiz" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#B388EB]/10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#B388EB]">Mini Quiz: ¿Cómo te comunicas?</h2>
          <p className="mt-4 text-lg text-gray-600">Pon a prueba tus habilidades comunicativas como futuro docente.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-xl transition-all duration-500">
          <p className="text-sm font-semibold text-[#00BFA6]">Pregunta {currentQuestionIndex + 1}/{quizQuestions.length}</p>
          <h3 className="text-xl md:text-2xl font-semibold my-4 text-gray-800">{question.question}</h3>
          <div className="space-y-4">
            {question.options.map((option, index) => {
              const isCorrect = index === question.correctOptionIndex;
              const isSelected = selectedOption === index;
              let buttonClass = "w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ";
              if (feedback && isSelected) {
                buttonClass += isCorrect ? 'bg-green-100 border-green-400 text-green-800 animate-pulse' : 'bg-red-100 border-red-400 text-red-800 animate-pulse';
              } else if (feedback && isCorrect) {
                  buttonClass += 'bg-green-100 border-green-400 text-green-800';
              }
              else {
                buttonClass += 'border-gray-200 hover:bg-[#A0E7E5]/50 hover:border-[#00BFA6]';
              }
              
              return (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  disabled={!!feedback}
                  className={buttonClass}
                >
                  {option}
                </button>
              );
            })}
          </div>
          {feedback && (
            <div className={`mt-6 p-4 rounded-lg flex items-center gap-4 text-white ${feedback.type === 'correct' ? 'bg-green-500' : 'bg-red-500'}`}>
              {feedback.type === 'correct' ? <IconCheck className="w-6 h-6" /> : <IconX className="w-6 h-6" />}
              <p className="font-semibold">{feedback.message}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
