import { useNavigate } from 'react-router-dom';

export default function InputPage() {
    const navigate = useNavigate();

    const handleNextClick = () => {
        navigate('/quiz', { state: { nextBtnPressed: true } });
    };

    return (
        <>
            <h1>INPUT PAGE</h1>
            <textarea rows={20} cols={120} />

            {/* TODO: Add secondary input as "Focus on ...". Ignore if empty. */}

            <button onClick={handleNextClick}>Next</button>
        </>
    );
}
