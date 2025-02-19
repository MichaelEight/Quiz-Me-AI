export default interface SettingsState {
    baseText: string;
    settings: {
        closedQuestionsAmount: number;
        openQuestionsAmount: number;
    };
    updateSettings: (newSettings: Partial<SettingsState['settings']>) => void;
}
