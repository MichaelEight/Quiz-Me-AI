import { QuizQuestion, ClosedAnswer } from './types';
import { apiGenerateQuestions } from './gptService';

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
    public static async generateQuestions(
        baseText: string,
        closedQuestionsAmount: number,
        openQuestionsAmount: number,
    ): Promise<boolean> {
        // Make an API call to GPT
        const generatedQuestions = await apiGenerateQuestions(
            baseText,
            closedQuestionsAmount,
            openQuestionsAmount,
        );

        if (!generatedQuestions) return false;

        QuizGenerator.quizQuestionsArray = generatedQuestions;
        return true;
    }

    public static nextQuestion(): QuizQuestion | null {
        return this.quizQuestionsArray.shift() || null;
    }

    public static evaluateOpenAnswer() {
        throw new Error('Not implemented');
    }
}
