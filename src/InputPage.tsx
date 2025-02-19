import { useNavigate } from 'react-router-dom';
import { settingsStore } from './store';
import SettingsState from './SettingsState';

export default function InputPage() {
    const navigate = useNavigate();

    const baseText = settingsStore((state: SettingsState) => state.baseText);
    const updateBaseText = settingsStore((state) => state.updateBaseText);

    const handleNextClick = () => {
        navigate('/quiz', { state: { nextBtnPressed: true } });
    };

    return (
        <>
            <h1>INPUT PAGE</h1>
            <textarea
                rows={20}
                cols={120}
                value={baseText}
                onChange={(e) => updateBaseText(e.target.value)}
            />

            {/* TODO: Add secondary input as "Focus on ...". Ignore if empty. */}

            <button onClick={handleNextClick}>Next</button>
        </>
    );
}
