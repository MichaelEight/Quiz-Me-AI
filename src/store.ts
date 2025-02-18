import { create } from "zustand";

export const settingsStore = create((set) => ({
    baseText: "",
    updateBaseText: (newText: string) => set({ baseText: newText }),
    removeBaseText: () => set({ baseText: "" }),

    settings:{
        closedQuestionsAmount: 0,
        openQuestionsAmount: 0,
    },

    updateSettings: (newSettings) =>
        set((state) => ({settings: {...state.settings, newSettings}})),
}));