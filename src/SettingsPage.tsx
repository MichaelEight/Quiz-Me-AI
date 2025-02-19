import { useNavigate } from 'react-router-dom';
import { settingsStore } from './store';
import SettingsState from './SettingsState';
import { testGPTAPI } from './gptService';

export default function SettingsPage() {
    const navigate = useNavigate();

    const closedQuestionsAmount = settingsStore(
        (state: SettingsState) => state.settings.closedQuestionsAmount,
    );
    const openQuestionsAmount = settingsStore(
        (state: SettingsState) => state.settings.openQuestionsAmount,
    );
    const updateSettings = settingsStore((state) => state.updateSettings);

    const onClosedQuestionsAmountChange = (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        updateSettings({ closedQuestionsAmount: Number(e.target.value) });
    };

    const onOpenQuestionsAmountChange = (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        updateSettings({ openQuestionsAmount: Number(e.target.value) });
    };

    const handleTestGPTAPI = async () => {
        const response = await testGPTAPI();
        console.log('GPT API response:', response);
    };

    return (
        <div>
            <h1>SETTINGS PAGE</h1>

            <label>
                How many closed questions?
                <input
                    type="number"
                    min={0}
                    max={10}
                    step={1}
                    value={closedQuestionsAmount}
                    onChange={onClosedQuestionsAmountChange}
                />
            </label>

            <label>
                How many open questions?
                <input
                    type="number"
                    min={0}
                    max={10}
                    step={1}
                    value={openQuestionsAmount}
                    onChange={onOpenQuestionsAmountChange}
                />
            </label>

            {/* TODO: Add setting determining difficulty of all/part of questions */}

            <button onClick={() => navigate('/input')}>Next</button>

            <button onClick={handleTestGPTAPI}>TEST API</button>
        </div>
    );
}
