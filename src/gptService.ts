export const apiGenerateQuestions = async (
    baseText: string,
    closedQuestionsAmount: number,
    openQuestionsAmount: number,
) => {
    // Prepare prompt -- system (purpose of this GPT)
    // Prepare prompt -- developer (Qs amount)
    // Prepare prompt -- user (baseText)
    // Call GPT API with prompt
};

export const testGPTAPI = async (): Promise<string | null> => {
    const exampleSystemPrompt =
        'You are a helpful assistant. Keep answers short.';
    const exampleDeveloperPrompt = '';
    const exampleUserPrompt = 'Hello there!';

    const response = await callGPTAPI(
        exampleSystemPrompt,
        exampleDeveloperPrompt,
        exampleUserPrompt,
    );

    return response;
};

const callGPTAPI = async (
    systemPrompt: string,
    developerPrompt: string,
    userPrompt: string,
): Promise<string | null> => {
    try {
        // 🔧 Ensure environment variable is accessible
        const apiKey =
            import.meta.env.VITE_OPENAI_API_KEY || process.env.OPENAI_API_KEY;
        if (!apiKey) {
            console.error('❌ OpenAI API key is missing!');
            return null;
        }

        const response = await fetch(
            `https://api.openai.com/v1/chat/completions`,
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'gpt-4o-mini', // Updated field for OpenAI API
                    messages: [
                        { role: 'system', content: systemPrompt },
                        { role: 'developer', content: developerPrompt },
                        { role: 'user', content: userPrompt },
                    ],
                    max_tokens: 100,
                    temperature: 0.7,
                    top_p: 1,
                    frequency_penalty: 0.5,
                    presence_penalty: 0.5,
                }),
            },
        );

        if (!response.ok) {
            console.error(`❌ OpenAI API Error: ${response.statusText}`);
            return null;
        }

        const data = await response.json();

        // 🔧 Ensure response structure is correct before accessing text
        if (!data.choices || data.choices.length === 0) {
            console.error('❌ No choices returned from OpenAI API');
            return null;
        }

        return data.choices[0].message?.content || null;
    } catch (error) {
        console.error('❌ OpenAI API Request Failed:', error);
        return null;
    }
};
