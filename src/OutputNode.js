import React from 'react';

function OutputNode({ data }) {
  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      <label>Output:</label>
      <div>{data.output}</div> {/* Display output */}
    </div>
  );
}

export default OutputNode;
