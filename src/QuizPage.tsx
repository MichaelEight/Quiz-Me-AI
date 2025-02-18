import { useState } from 'react';

export default function QuizPage() {
    const exampleQuestion = 'Example Question';
    const exampleAnswers = [
        { content: 'Answer1', isCorrect: false },
        { content: 'Answer2', isCorrect: true },
        { content: 'Answer3', isCorrect: false },
        { content: 'Answer4', isCorrect: false },
    ];

    const [question, setQuestion] = useState(exampleQuestion);
    const [answers, setAnswers] = useState(exampleAnswers);
    const [isClosedQuestion, setIsClosedQuestion] = useState(false);

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
                answers.map((answer, index) => (
                    <button key={index} onClick={handleOnAnswerClick}>
                        {answer.content}
                    </button>
                ))
            ) : (
                <textarea rows={4} cols={40} />
            )}
        </>
    );
}
