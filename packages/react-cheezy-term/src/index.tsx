import React from 'react';

interface CheezyTermProps {
  message?: string;
}

export const CheezyTerm: React.FC<CheezyTermProps> = ({ message = 'Cheeeezy!' }) => {
  return (
    <div style={{ fontFamily: 'monospace', padding: '1rem', background: '#333', color: '#fff' }}>
      {message}
    </div>
  );
};
