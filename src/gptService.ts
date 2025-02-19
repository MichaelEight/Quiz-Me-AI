export const apiGenerateQuestions = async (
    baseText: string,
    closedQuestionsAmount: number,
    openQuestionsAmount: number,
) => {
    // Prepare prompt -- system (purpose of this GPT)
    // Prepare prompt -- developer (Qs amount)
    // Prepare prompt -- user (baseText)
    // Call GPT API with prompt
    // Receive JSON as answer
    // Split JSON into array
    // Return array
};

export const testGPTAPI = async (): Promise<string | null> => {
    const response = await fetch('http://localhost:5000/api/testGPTAPI', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        return await response.json();
    }

    console.log('Response is not ok');

    return null;
};
