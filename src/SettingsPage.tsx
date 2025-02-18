import { useNavigate } from 'react-router-dom';
import { settingsStore } from './store';

export default function SettingsPage() {
    const navigate = useNavigate();

    const closedQuestionsAmount = settingsStore(
        (state) => state.settings.closedQuestionsAmount,
    );
    const openQuestionsAmount = settingsStore(
        (state) => state.settings.openQuestionsAmount,
    );
    const updateSettings = settingsStore((state) => state.updateSettings);

    const onClosedQuestionsAmountChange = (e) => {
        updateSettings({ closedQuestionsAmount: e.target.value });
    };

    const onOpenQuestionsAmountChange = (e) => {
        updateSettings({ openQuestionsAmount: e.target.value });
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
        </div>
    );
}
