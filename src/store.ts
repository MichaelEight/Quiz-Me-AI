import { create } from 'zustand';
import SettingsState from './SettingsState';

export const settingsStore = create<SettingsState>((set) => ({
    baseText: '',
    updateBaseText: (newText: string) => set({ baseText: newText }),
    removeBaseText: () => set({ baseText: '' }),

    settings: {
        closedQuestionsAmount: 0,
        openQuestionsAmount: 0,
    },

    updateSettings: (newSettings: Partial<SettingsState['settings']>) =>
        set((state) => ({ settings: { ...state.settings, ...newSettings } })),
}));
