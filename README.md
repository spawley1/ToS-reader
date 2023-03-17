# ToS-reader Browser Extension

The ToS-reader is a Chrome browser extension that analyzes the Terms of Service (ToS) of websites using OpenAI's GPT. It identifies harmful or problematic terms and clauses related to data privacy, data usage, and user rights, and provides a summary and risk score.

## Prerequisites

To build and use this extension, you'll need:

1. [Node.js](https://nodejs.org/) installed on your system.
2. An API key from [OpenAI](https://beta.openai.com/signup/).

## Installation

Follow these steps to set up the extension:

1. Clone this repository or download the provided files.

2. Open a terminal or command prompt and navigate to the extension folder.

3. Run `npm install` to install the necessary dependencies.

4. Replace `'your_openai_api_key'` in `popup.js` with your actual OpenAI API key.

5. Bundle the extension code by running `npm run build` in the terminal. This will generate a `bundle.js` file in the extension folder.

## Loading the Extension in Chrome

1. Open Google Chrome and navigate to `chrome://extensions`.

2. Enable "Developer mode" by toggling the switch in the top right corner.

3. Click the "Load unpacked" button and select the extension folder containing the `manifest.json` file.

4. The ToS-reader extension should now be visible in the list of extensions and the Chrome toolbar.

## Usage

1. Click on the ToS-reader icon in the Chrome toolbar to open the extension popup.

2. Copy and paste the Terms of Service text you want to analyze into the textarea.

3. Click the "Analyze" button. The extension will use GPT to analyze the text and display the results, including problematic terms, a risk score, and a summary.

Please note that the GPT-generated results may not be perfect, and there might still be some inaccuracies. You can improve the extension's performance by iterating on the GPT prompt, API parameters, or even fine-tuning the model with a custom dataset.
