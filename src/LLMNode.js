import React, { useState } from 'react';

function LLMNode({ data }) {
  const [apiKey, setApiKey] = useState('');
  const [model, setModel] = useState('text-davinci-003');

  // Handle API key input
  const handleApiKeyChange = (e) => {
    setApiKey(e.target.value);
    data.setApiKey(e.target.value); 
  };

  // Handle model selection
  const handleModelChange = (e) => {
    setModel(e.target.value);
    data.setModel(e.target.value); 
  };

  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      <label>API Key:</label>
      <input
        type="text"
        value={apiKey}
        onChange={handleApiKeyChange}
        placeholder="Enter OpenAI API Key"
      />
      <br />
      <label>Model:</label>
      <select value={model} onChange={handleModelChange}>
        <option value="text-davinci-003">text-davinci-003</option>
        <option value="gpt-3.5-turbo">gpt-3.5-turbo</option>
      </select>
    </div>
  );
}

export default LLMNode;
