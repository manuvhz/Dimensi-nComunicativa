
export interface QuizQuestion {
  question: string;
  options: string[];
  correctOptionIndex: number;
  feedback: {
    correct: string;
    incorrect: string;
  };
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
}

export interface ChatMessage {
  sender: 'student' | 'teacher';
  text: string;
  timestamp: string;
}

export interface ChatOption {
  text: string;
  nextNodeId: string;
  feedback?: string; // Optional feedback for the choice
}

export interface ConversationNode {
  id: string;
  studentMessage: string;
  options: ChatOption[];
  isEnd?: boolean;
  endMessage?: string;
}

export interface CaseStudy {
    title: string;
    scenario: string;
    failedStrategy: {
        title: string;
        description: string;
    };
    successfulStrategy: {
        title: string;
        description: string;
    };
    psychologicalPrinciple: {
        name: string;
        explanation: string;
    };
}
