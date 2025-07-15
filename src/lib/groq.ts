export async function callGroq(prompt: string): Promise<any> {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.GROQ_API_KEY}`
        },
        body: JSON.stringify({
            model: 'llama3-70b-8192',
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.2,
            max_tokens: 8192
        })
    })

    const json = await res.json()
    try {
        const rawContent = json.choices?.[0]?.message?.content ?? ''
        console.log('[Groq raw content]', rawContent)
        return JSON.parse(json.choices?.[0]?.message?.content ?? '')
    } catch (err) {
        throw new Error('Groq response was not valid JSON')
    }
}
