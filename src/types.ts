export type ClosedAnswer = {
    content: string;
    isCorrect: boolean;
};

export type QuizQuestion = {
    question: string;
    answer: ClosedAnswer[] | null;
};
