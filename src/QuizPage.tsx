import { useState, useEffect } from 'react';
import { QuizQuestion, ClosedAnswer } from './types';
import { useLocation } from 'react-router-dom';
import { QuizGenerator } from './quizGenerator';
import { settingsStore } from './store';

export default function QuizPage() {
    const location = useLocation();

    const [question, setQuestion] = useState('');
    const [answers, setAnswers] = useState<ClosedAnswer[] | null>(null);

    useEffect(() => {
        // Generate new answers only if page accessed through "next" button on InputPage
        if (location.state?.nextBtnPressed) {
            const { baseText, settings } = settingsStore.getState();
            const { closedQuestionsAmount, openQuestionsAmount } = settings;

            QuizGenerator.getInstance();
            (async () => {
                if (
                    !(await QuizGenerator.generateQuestions(
                        baseText,
                        closedQuestionsAmount,
                        openQuestionsAmount,
                    ))
                ) {
                    alert('Failed to generate questions!');
                    return; // FIXME: Handle error outside of async function
                }
            })();

            // TODO: Change it to "first question", since it's loaded only on first load
            // TODO: Create new handler for next question
            const nextQuestion: QuizQuestion | null =
                QuizGenerator.nextQuestion();
            if (!nextQuestion) {
                alert('No more questions!');
                return;
            }

            setQuestion(nextQuestion.question);
            if (nextQuestion.answer) {
                setAnswers(nextQuestion.answer);
            }
        }
    }, []);

    const handleOnAnswerClick = (e) => {
        const answer = answers.find(
            (answer) => answer.content === e.target.textContent,
        );
        if (answer?.isCorrect) {
            alert('Correct!');
        } else {
            alert('Incorrect!');
        }
    };

    const handleCheckClicked = () => {
        // TODO
        // Check state of answers, which are checked and which are correct
        // Either show GOOD/FAIL or X out of Y, depending on settings
        // Disable itself and enable next question btn
    };

    const handleNextQuestionClicked = () => {
        // TODO
        // Load next question
        // Disable itself and reenable check btn
    };

    return (
        <>
            <h1>Quiz Page</h1>
            {question ? (
                <>
                    <p>Q: {question}</p>
                    {answers ? (
                        <>
                            {answers.map((answer) => (
                                <button
                                    key={answer.content}
                                    onClick={handleOnAnswerClick}
                                >
                                    {answer.content}
                                </button>
                            ))}

                            <button onClick={handleCheckClicked}>Check</button>

                            <button onClick={handleNextQuestionClicked}>
                                Next
                            </button>
                        </>
                    ) : (
                        <textarea rows={4} cols={40} />
                    )}
                </>
            ) : (
                <p>No questions available!</p>
            )}
        </>
    );
}
