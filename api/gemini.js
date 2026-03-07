module.exports = async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
    }

    // Retrieve the secure API key from Vercel's Environment Variables
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'GEMINI_API_KEY environment variable is missing.' });
    }

    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required in the request body.' });
        }

        // Call the correct Gemini 3.1 Flash Lite preview model
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite-preview:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 1024
                }
            })
        });

        const data = await response.json();

        // If Google returned an error, pass it back securely
        if (data.error) {
            return res.status(response.status).json({ error: data.error.message });
        }

        // Success: return the Gemini response to our frontend
        res.status(200).json(data);
    } catch (error) {
        console.error('Error proxying to Gemini API:', error);
        res.status(500).json({ error: 'Internal Server Error while communicating with Gemini.' });
    }
}
