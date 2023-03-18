document.getElementById("submitBtn").addEventListener("click", () => {
  const tosText = document.getElementById("tosText").value;

  if (!tosText) {
    alert("Please paste the Terms of Service text.");
    return;
  }

  // Wrap the code in an async function
  async function analyzeToS() {
    const prompt = `Analyze the following Terms of Service text and identify any potentially harmful clauses:\n\n${tosText}\n\nHarmful clauses:`;

    const response = await fetch("https://api.openai.com/v1/engines/davinci-codex/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer your_openai_api_key", // Replace 'your_openai_api_key' with your actual API key
      },
      body: JSON.stringify({
        engine: "davinci-codex",
        prompt: prompt,
        max_tokens: 150,
        n: 1,
        stop: null,
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    const harmfulClauses = data.choices[0].text.trim();
    document.getElementById("result").innerText = harmfulClauses;
  }

  // Call the async function
  analyzeToS();
});
