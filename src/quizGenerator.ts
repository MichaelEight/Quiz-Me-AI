import { QuizQuestion, ClosedAnswer } from './types';

const exampleClosedQuestion = 'Example Closed Question';
const exampleAnswers = [
    { content: 'Answer1', isCorrect: false },
    { content: 'Answer2', isCorrect: true },
    { content: 'Answer3', isCorrect: false },
    { content: 'Answer4', isCorrect: false },
];

const exampleOpenQuestion = 'Example Open Question';

const exampleClosedQuizQuestion: QuizQuestion = {
    question: exampleClosedQuestion,
    answer: exampleAnswers,
};

const exampleOpenQuizQuestion: QuizQuestion = {
    question: exampleOpenQuestion,
    answer: null,
};

// When entered through NEXT button,
// Generate N (N = C + O) questions based on input text and settings.
// Create a pool of pointers to questions
// When user answers the question and goes to next one, remove it
// If answer was correct -- do nothing
// If answer was incorrect -- add 2 more pointers to random places in a pool
//  Note: Change 2 to setting parameter

export class QuizGenerator {
    private static quizQuestionsArray: QuizQuestion[] = [];

    private static instance: QuizGenerator | null = null;
    private readonly promptAskForQuestions = '';

    private constructor() {}

    public static getInstance(): QuizGenerator {
        if (!this.instance) {
            this.instance = new QuizGenerator();
        }
        return this.instance;
    }

    /**
     *
     * @returns true on success, false on fail
     */
    public static generateQuestions(
        baseText: string,
        closedQuestionsAmount: number,
        openQuestionsAmount: number,
    ): boolean {
        // Make an API call to GPT
        // Receive JSON with array of questions with answers

        const exampleQuizQuestionsArray: QuizQuestion[] = [
            exampleClosedQuizQuestion,
            exampleOpenQuizQuestion,
        ];
        this.quizQuestionsArray = exampleQuizQuestionsArray;
        return true;
    }

    public static nextQuestion(): QuizQuestion | null {
        return this.quizQuestionsArray.shift() || null;
    }

    public static evaluateOpenAnswer() {
        throw new Error('Not implemented');
    }
}
