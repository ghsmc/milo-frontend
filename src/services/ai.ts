const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

async function callAIProxy(model: string, query: string, category: string, onUpdate: (text: string) => void) {
  try {
    console.log(`Calling ${model} API with query:`, query);
    
    const response = await fetch(`${SUPABASE_URL}/functions/v1/ai-proxy`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({ model, query, category }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error);
    }

    // Stream the response character by character
    let currentText = '';
    for (const char of data.response) {
      currentText += char;
      onUpdate(currentText);
      await new Promise(resolve => setTimeout(resolve, 10));
    }

    return data.response;
  } catch (error) {
    console.error(`${model} API Error:`, error);
    const errorMessage = "Thanks for your message. Milo is coming soon to universities across the US. 🇺🇸 🌎";
    onUpdate(errorMessage);
    return errorMessage;
  }
}

export async function getGPTResponse(query: string, category: string, onUpdate: (text: string) => void) {
  return callAIProxy('gpt4', query, category, onUpdate);
}

export async function getClaudeResponse(query: string, category: string, onUpdate: (text: string) => void) {
  return callAIProxy('claude', query, category, onUpdate);
}

export async function getPerplexityResponse(query: string, category: string, onUpdate: (text: string) => void) {
  return callAIProxy('perplexity', query, category, onUpdate);
}