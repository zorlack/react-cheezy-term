import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef
  } from 'react';
import { Terminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import '@xterm/xterm/css/xterm.css';  
import _styles from './styles.module.css'
export interface XtermTheme {
  background: string;
  foreground: string;
  cursor: string;
}

export interface TerminalConfig {
  imagePath: string;
  wrapperWidth: number;
  wrapperHeight: number;
  startX: number;
  startY: number;
  consoleWidth: number;
  consoleHeight: number;
  xtermTheme: XtermTheme;
}

export interface ReactCheezyTermProps {
  terminalConfig: TerminalConfig;
}

// This interface defines the functions/values we expose via the ref
export interface ReactCheezyTermRef {
    getTerminal: () => Terminal | null; // For direct access
}
export const ReactCheezyTerm = forwardRef<ReactCheezyTermRef, ReactCheezyTermProps>(
    ({ terminalConfig }, ref) => {
      const {
        imagePath,
        wrapperWidth,
        wrapperHeight,
        startX,
        startY,
        consoleWidth,
        consoleHeight,
        xtermTheme
      } = terminalConfig;
  
      const xtermContainerRef = useRef<HTMLDivElement>(null);
      const xtermRef = useRef<Terminal | null>(null);
      const fitAddonRef = useRef<FitAddon | null>(null);
  
      // Expose `getTerminal()` via the ref
      useImperativeHandle(ref, () => ({
        getTerminal: () => xtermRef.current
      }));

      const defaultTheme = {
        background: '#000000',
        foreground: '#00ff00',
        cursor: '#00ff00'
      };
    
      const mergedTerminalConfig = terminalConfig
        ? { ...defaultTheme, ...terminalConfig }
        : defaultTheme;

  
      useEffect(() => {
        const terminal = new Terminal({
          theme: mergedTerminalConfig
        });

        const fitAddon = new FitAddon();
        fitAddonRef.current = fitAddon;
        terminal.loadAddon(fitAddon);

  
        xtermRef.current = terminal;
  
        // Open the terminal in the container
        if (xtermContainerRef.current) {
          terminal.open(xtermContainerRef.current);
          // Fit the terminal to the container
          fitAddon.fit();
        }

        // Refit terminal when the window resizes
        const handleResize = () => fitAddon.fit();
        window.addEventListener('resize', handleResize);
  
        // Cleanup on unmount
        return () => {
          terminal.dispose();
        };
      }, [xtermTheme]);
  
      // Outer container for the background image
      const wrapperStyle: React.CSSProperties = {
        position: 'relative',
        width: `${wrapperWidth}px`,
        height: `${wrapperHeight}px`,
        background: `url(${imagePath}) no-repeat center center`,
        backgroundSize: 'cover'
      };
  
      // Xterm container placed at coordinates (startX, startY)
      const xtermStyle: React.CSSProperties = {
        position: 'absolute',
        left: `${startX}px`,
        top: `${startY}px`,
        width: `${consoleWidth}px`,
        height: `${consoleHeight}px`,
        backgroundColor: 'black',
        overflow: 'hidden'
      };
  
      return (
        <div style={wrapperStyle}>
          <div ref={xtermContainerRef} style={xtermStyle} />
        </div>
      );
    }
  );