import React, { useRef, useEffect } from 'react';
import { Terminal } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';



export interface XTermTheme {
  background: string;
  foreground: string;
  cursor: string;
  // You can add any other valid xterm.js theme keys, e.g. selection, black, red, etc.
  'font-size'?: string;
}

export interface ConsoleConfig {
  imagePath: string;
  wrapperWidth: number;
  wrapperHeight: number;
  startX: number;
  startY: number;
  consoleWidth: number;
  consoleHeight: number;
  xtermTheme: XTermTheme;
}

// 1) Eagerly import all .png images in /assets so they are bundled.
const images = import.meta.glob<{
  default: string;
}>('./assets/images/*.png', {
  eager: true,
});




import rawProfiles from './CheezyTerminalConsoleProfiles.json';
//type ConsoleProfilesMap = Record<string, ConsoleConfig>;

//export const consoleProfiles = rawProfiles as ConsoleProfilesMap;
export const consoleProfiles: Record<string, ConsoleConfig> = Object.entries(
  rawProfiles as Record<string, ConsoleConfig>
).reduce((acc, [key, config]) => {
  const relative = `./assets/images/${config.imagePath}`;
  acc[key] = {
    ...config,
    imagePath: (images[relative] as { default: string }).default,
  };
  return acc;
}, {} as Record<string, ConsoleConfig>);


interface CheezyTerminalProps {
  consoleConfig: ConsoleConfig;
  onTerminalCreated?: (terminal: Terminal) => void;
}



const CheezyTerminal: React.FC<CheezyTerminalProps> = ({
  consoleConfig,
  onTerminalCreated,
}) => {
  const terminalRef = useRef<HTMLDivElement>(null);   // ref to the DOM node where xterm attaches
  const termInstanceRef = useRef<Terminal | null>(null); // store the Terminal instance

  useEffect(() => {
    // Only create the Terminal instance if it doesn't already exist
    if (!termInstanceRef.current && terminalRef.current) {
      const term = new Terminal({
        // You can pass in many xterm.js options here; e.g. rows, cols, etc.
        theme: {
          background: consoleConfig.xtermTheme.background,
          foreground: consoleConfig.xtermTheme.foreground,
          cursor: consoleConfig.xtermTheme.cursor,
        },
        fontSize: consoleConfig.xtermTheme['font-size']
          ? parseFloat(consoleConfig.xtermTheme['font-size'])
          : 14, // fallback
      });

      termInstanceRef.current = term;

      // Mount xterm to the DOM
      term.open(terminalRef.current);

      // Let parent component know we have a Terminal instance if they need direct access
      onTerminalCreated?.(term);
    }
  }, [consoleConfig, onTerminalCreated]);

  return (
    <div
      style={{
        position: 'relative',
        width: consoleConfig.wrapperWidth,
        height: consoleConfig.wrapperHeight,
        backgroundImage: `url(${consoleConfig.imagePath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        ref={terminalRef}
        style={{
          position: 'absolute',
          left: consoleConfig.startX,
          top: consoleConfig.startY,
          width: consoleConfig.consoleWidth,
          height: consoleConfig.consoleHeight,
          // You might want to ensure overflow is hidden or set the
          // background color inside this block, etc.
        }}
      />
    </div>
  );
};

export default CheezyTerminal;