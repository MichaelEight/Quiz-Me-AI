export const apiGenerateQuestions = async (
    baseText: string,
    closedQuestionsAmount: number,
    openQuestionsAmount: number,
) => {
    // Call GPT API, passing args
    const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/generateQuestions`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                baseText,
                closedQuestionsAmount,
                openQuestionsAmount,
            }),
        },
    );

    // Receive JSON as answer
    if (response.ok) {
        return await response.json();
    }

    return null;
};

export const testGPTAPI = async (): Promise<string | null> => {
    const response = await fetch(
        '${import.meta.env.VITE_BACKEND_URL}/api/testGPTAPI',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        },
    );

    if (response.ok) {
        return await response.json();
    }

    console.log('Response is not ok');

    return null;
};
