# React Cheezy Term

React Cheezy Term (`react-cheezy-term`) is an React component library which offers a variety of whimsical terminal interfaces based on `@xterm/xterm`.

## Installation

First, install the react component so you can embedd it in your application.

```
# install the package in your react project
npm install react-cheezy-term
```

Next, visit the [releases](https://github.com/zorlack/react-cheezy-term/releases/) page and find the latest release. Then download the latest `.media.` release.

Look for a filename like: `react-cheezy-term.media.{version}.tar.gz`

Extract this file inside your application's `/public` directory so that you have a path structure like this:

```
public
├── react-cheezy-term
│   ├── bananaterm.png
│   ├── cube.png
│   ├── presets.json
|
|   [SNIP]
|
│   ├── rectoset.png
│   └── spaceconsole.png
```

## Typescript Example Use

```
import { useRef, useEffect } from 'react';
import { ReactCheezyTerm, ReactCheezyTermRef } from 'ReactCheezyTerm';

const config = {
  imagePath: 'react-cheezy-term/rectoset.png',
  wrapperWidth: 1216,
  wrapperHeight: 832,
  startX: 283,
  startY: 200,
  consoleWidth: 463,
  consoleHeight: 370,
  xtermTheme: {
    background: '#000000',
    foreground: '#0aff0a',
    cursor: '#00ff00'
  }
};

export default function App() {
  // Create a ref to the ReactCheezyTerm
  const cheezyRef = useRef<ReactCheezyTermRef>(null);

  useEffect(() => {
    // When the component has mounted, we can access the Terminal
    const terminal = cheezyRef.current?.getTerminal();
    if (terminal) {
      // Write something silly to the terminal
      terminal.write('Welcome to the Cheezy Terminal!\r\n');
    }
  }, []);

  return (
    <div>
      <h1>Cheezy Terminal Example</h1>
      <ReactCheezyTerm ref={cheezyRef} terminalConfig={config} />
    </div>
  );
}
```