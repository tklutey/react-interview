import React, { useEffect, useRef } from 'react';
import {Terminal} from "xterm";
import {FitAddon} from "xterm-addon-fit";
import 'xterm/css/xterm.css';

const CodeExecutionTerminal = ({ width, height, terminalText }: Props) => {
    const term = useRef<Terminal>();
    useEffect(() => {
        term.current = new Terminal({ convertEol: true });
        const fitAddon = new FitAddon();
        term.current?.loadAddon(fitAddon);
        // @ts-ignore
        term.current.open(document.getElementById('terminal'));
        fitAddon.fit();
    }, []);

    useEffect(() => {
        if (term.current && terminalText !== undefined && terminalText !== null) {
            term.current?.reset();
            term.current?.write(terminalText);
            term.current?.focus();
        }
    }, [terminalText]);

    return (
        <div
            style={{
                width: width,
                height: height,
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div id="terminal" style={{ width: '100%', height: '100%' }}></div>
        </div>
    );
};

type Props = {
    width?: string;
    height?: string;
    terminalText?: string;
};

export default CodeExecutionTerminal;