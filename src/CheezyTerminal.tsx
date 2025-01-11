import React, { useState, useEffect } from 'react';
interface CheezyTerminalProps {
  title?: string;
}

// 1) Define the glob import and annotate it.
// This returns an object whose keys are file paths, and values are
// functions that return a Promise of a module with a default export (the image URL).
const cheezyImages = import.meta.glob<Promise<{ default: string }>>(
  './assets/images/*.png'
);

const CheezyTerminal: React.FC<CheezyTerminalProps> = ({
  title = 'Cheezy Terminal',
}) => {
  const [imgList, setImgList] = useState<string[]>([]);

  // 2) Load all images once on component mount (optional).
  useEffect(() => {
    async function loadAllImages() {
      const loaded: string[] = [];
      for (const path in cheezyImages) {
        const importFn = cheezyImages[path];
        const mod = await importFn();  // dynamic import for each image
        loaded.push(mod.default);      // 'mod.default' is the actual image URL
      }
      setImgList(loaded);
    }
    loadAllImages();
  }, []);

  return (
    <div
      style={{
        fontFamily: 'monospace',
        padding: '1rem',
        border: '1px solid black',
      }}
    >
      <h1>{title}</h1>
      <p>Welcome to the Cheezy Terminal!</p>

      {/* 3) Render the images once they are loaded */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {imgList.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`cheezy-${index}`}
            style={{ width: '150px', height: 'auto' }}
          />
        ))}
      </div>
    </div>
  );
};

export default CheezyTerminal;