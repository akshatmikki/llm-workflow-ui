import React, { useState } from 'react';

function InputNode({ data }) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value); 
    data.setInput(e.target.value); 
  };

  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      <label>Input:</label>
      <input
        type="text"
        value={input}
        onChange={handleChange} 
      />
    </div>
  );
}

export default InputNode;
