import { useState, useEffect } from 'react';
import { Answer } from './types';
import { useLocation } from 'react-router-dom';

export default function QuizPage() {
    const exampleQuestion = 'Example Question';
    const exampleAnswers = [
        { content: 'Answer1', isCorrect: false },
        { content: 'Answer2', isCorrect: true },
        { content: 'Answer3', isCorrect: false },
        { content: 'Answer4', isCorrect: false },
    ];

    const location = useLocation();

    const [question, setQuestion] = useState('');
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [isClosedQuestion, setIsClosedQuestion] = useState(true);

    useEffect(() => {
        // Generate new answers only if page accessed through "next" button on InputPage
        if (location.state?.nextBtnPressed) {
            console.log('Accessed from next button');
            setQuestion(exampleQuestion);
            setAnswers(exampleAnswers);
            setIsClosedQuestion(true);
        } else {
            console.log('Accessed from Navlink');
        }
    }, []);

    // When entered through NEXT button,
    // Generate N (N = C + O) questions based on input text and settings.
    // Create a pool of pointers to questions
    // When user answers the question and goes to next one, remove it
    // If answer was correct -- do nothing
    // If answer was incorrect -- add 2 more pointers to random places in a pool
    //  Note: Change 2 to setting parameter

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

    return (
        <>
            <h1>Quiz Page</h1>
            <p>Q: {question}</p>
            {isClosedQuestion ? (
                answers.map((answer) => (
                    <button key={answer.content} onClick={handleOnAnswerClick}>
                        {answer.content}
                    </button>
                ))
            ) : (
                <textarea rows={4} cols={40} />
            )}
        </>
    );
}
