"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactCheezyTerm = void 0;
var react_1 = require("react");
var xterm_1 = require("@xterm/xterm");
var addon_fit_1 = require("@xterm/addon-fit");
require("@xterm/xterm/css/xterm.css");
exports.ReactCheezyTerm = (0, react_1.forwardRef)(function (_a, ref) {
    var terminalConfig = _a.terminalConfig;
    var imagePath = terminalConfig.imagePath, wrapperWidth = terminalConfig.wrapperWidth, wrapperHeight = terminalConfig.wrapperHeight, startX = terminalConfig.startX, startY = terminalConfig.startY, consoleWidth = terminalConfig.consoleWidth, consoleHeight = terminalConfig.consoleHeight, xtermTheme = terminalConfig.xtermTheme;
    var xtermContainerRef = (0, react_1.useRef)(null);
    var xtermRef = (0, react_1.useRef)(null);
    var fitAddonRef = (0, react_1.useRef)(null);
    // Expose `getTerminal()` via the ref
    (0, react_1.useImperativeHandle)(ref, function () { return ({
        getTerminal: function () { return xtermRef.current; }
    }); });
    var defaultTheme = {
        background: '#000000',
        foreground: '#00ff00',
        cursor: '#00ff00'
    };
    var mergedTerminalConfig = terminalConfig
        ? __assign(__assign({}, defaultTheme), terminalConfig) : defaultTheme;
    (0, react_1.useEffect)(function () {
        var terminal = new xterm_1.Terminal({
            theme: mergedTerminalConfig
        });
        var fitAddon = new addon_fit_1.FitAddon();
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
        var handleResize = function () { return fitAddon.fit(); };
        window.addEventListener('resize', handleResize);
        // Cleanup on unmount
        return function () {
            terminal.dispose();
        };
    }, [xtermTheme]);
    // Outer container for the background image
    var wrapperStyle = {
        position: 'relative',
        width: "".concat(wrapperWidth, "px"),
        height: "".concat(wrapperHeight, "px"),
        background: "url(".concat(imagePath, ") no-repeat center center"),
        backgroundSize: 'cover'
    };
    // Xterm container placed at coordinates (startX, startY)
    var xtermStyle = {
        position: 'absolute',
        left: "".concat(startX, "px"),
        top: "".concat(startY, "px"),
        width: "".concat(consoleWidth, "px"),
        height: "".concat(consoleHeight, "px"),
        backgroundColor: 'black',
        overflow: 'hidden'
    };
    return (<div style={wrapperStyle}>
          <div ref={xtermContainerRef} style={xtermStyle}/>
        </div>);
});
