import React, { useState, useCallback } from 'react';
import ReactFlow, { addEdge, Background, Controls } from 'react-flow-renderer';
import InputNode from './InputNode';
import LLMNode from './LLMNode';
import OutputNode from './OutputNode';

const initialNodes = [
  { id: '1', type: 'inputNode', data: { label: 'Input Node' }, position: { x: 100, y: 100 } },
  { id: '2', type: 'llmNode', data: { label: 'LLM Node' }, position: { x: 400, y: 100 } },
  { id: '3', type: 'outputNode', data: { label: 'Output Node' }, position: { x: 700, y: 100 } },
];

const initialEdges = [];

function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  // Handles the connections between nodes
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  return (
    <div style={{ height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect} // Allowing node connections
        nodeTypes={{
          inputNode: InputNode, // Custom components for nodes
          llmNode: LLMNode,
          outputNode: OutputNode,
        }}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default App;
