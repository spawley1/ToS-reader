const axios = require('axios');

const OPENAI_API_KEY = 'your_openai_api_key'; // Replace with your actual API key
const OPENAI_API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';

axios.defaults.headers.common['Authorization'] = `Bearer ${OPENAI_API_KEY}`;

document.getElementById('analyze-btn').addEventListener('click', async () => {
  const tosText = document.getElementById('tos-text').value;
  if (!tosText) {
    alert('Please paste the Terms of Service text.');
    return;
  }

  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = 'Analyzing...';

  try {
    const analysis = await analyzeToS(tosText);
    resultsDiv.innerHTML = `Problematic terms: ${JSON.stringify(analysis.problematicTerms)}<br>
                            Risk score: ${analysis.riskScore}<br>
                            Summary: ${analysis.summary}`;
  } catch (error) {
    resultsDiv.innerHTML = 'Error: Unable to analyze the text.';
    console.error('Error analyzing ToS:', error);
  }
});

async function analyzeToS(tosText) {
  try {
    const prompt = `Please analyze the following Terms of Service text and identify any harmful or problematic terms and clauses related to data privacy, data usage, and user rights. Additionally, provide a brief summary and a risk score between 1 (low risk) and 10 (high risk) for the ToS:\n\n${tosText}\n\nSummary: `;
    const response = await axios.post(OPENAI_API_URL, {
      prompt: prompt,
      max_tokens: 200,
      n: 1,
      stop: null,
      temperature: 0.7,
    });

    const output = response.data.choices[0].text.trim();
    // Parse the output to extract summary, risk score, and problematic terms
    // Adjust the parsing logic based on the output format
   
