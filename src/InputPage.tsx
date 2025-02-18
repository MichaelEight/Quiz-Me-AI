import { useNavigate } from 'react-router-dom';

export default function InputPage() {
    const navigate = useNavigate();

    return (
        <>
            <h1>INPUT PAGE</h1>
            <textarea rows={20} cols={120} />

            <button onClick={() => navigate('/quiz')}>Next</button>
        </>
    );
}
