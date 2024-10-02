import React from 'react';
import axios from 'axios';

function RunButton({ input, apiKey, model, setOutput }) {
  const handleRun = async () => {
    try {
      const response = await axios.post('https://api.openai.com/v1/completions', {
        model: model,
        prompt: input,
        max_tokens: 150,
      }, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
        }
      });
      setOutput(response.data.choices[0].text); 
    } catch (error) {
      console.error('Error during execution:', error);
    }
  };

  return <button onClick={handleRun}>Run</button>;
}

export default RunButton;
