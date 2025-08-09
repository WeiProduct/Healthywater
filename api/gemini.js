export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Server misconfiguration: GEMINI_API_KEY is not set' });
  }

  try {
    const body = req.body && typeof req.body === 'object' ? req.body : JSON.parse(req.body || '{}');

    // Accept either a simple { message } or full Gemini { contents } shape
    let requestBody;
    if (body && typeof body === 'object' && body.contents) {
      requestBody = body;
    } else {
      const message = body && typeof body.message === 'string' ? body.message : '';
      requestBody = {
        contents: [
          {
            parts: [{ text: message }],
          },
        ],
        generationConfig: body && body.generationConfig ? body.generationConfig : {
          temperature: 0.7,
          maxOutputTokens: 1024,
        },
      };
    }

    const model = (body && body.model) || 'gemini-2.0-flash-exp';
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errText = await response.text();
      return res.status(response.status).json({ error: 'Upstream error', details: errText });
    }

    const json = await response.json();

    // Try to simplify to { text }
    let text = '';
    try {
      const candidates = json.candidates || [];
      const first = candidates[0] || {};
      const content = first.content || {};
      const parts = content.parts || [];
      text = (parts[0] && parts[0].text) || '';
    } catch (_) {}

    return res.status(200).json(text ? { text } : json);
  } catch (error) {
    return res.status(500).json({ error: 'Proxy error', message: String(error) });
  }
}
