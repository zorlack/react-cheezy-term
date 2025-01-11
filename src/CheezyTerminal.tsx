import React from 'react';
import testImage from './assets/images/rectoset.png';

interface CheezyTerminalProps {
  title?: string;
}

const CheezyTerminal: React.FC<CheezyTerminalProps> = ({ title = 'Cheezy Terminal' }) => {
  return (
    <div style={{ fontFamily: 'monospace', padding: '1rem', border: '1px solid black', backgroundImage: `url(${testImage})` }}>
      <h1>{title}</h1>
      <p>Welcome to the Cheezy Terminal!</p>
    </div>
  );
};

export default CheezyTerminal;