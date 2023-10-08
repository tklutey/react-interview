import React, {useEffect, useRef, useState} from 'react';
import {IDisposable, Terminal} from "xterm";
import {FitAddon} from "xterm-addon-fit";
import 'xterm/css/xterm.css';

const Console = ({ width, height }: Props) => {
    const [inputBuffer, setInputBuffer] = useState<string[]>([]);
    const disposable = useRef<IDisposable>();
    const term = useRef<Terminal>();

    const prompt = () => {
        term.current?.write('$ ')
    }
    const handleInput = (input: string) => {
        switch(input) {
            case ('\r'):
                term.current?.writeln('')
                term.current?.writeln('The command you sent was: ' + inputBuffer.join(''))
                setInputBuffer([])
                prompt();
                break;
            case ('\u007F'):
                console.log('bs')
                if (inputBuffer.length > 0) {
                    setInputBuffer((prev) => prev.slice(0, prev.length - 1))
                    term.current?.write('\b \b');
                }
                break;
            default:
                setInputBuffer((prev) => [...prev, input])
                term.current?.write(input);
        }
    }

    const initializeXTerm = () => {
        term.current = new Terminal({ convertEol: true, cursorBlink: true });
        const fitAddon = new FitAddon();
        term.current?.loadAddon(fitAddon);
        // @ts-ignore
        term.current.open(document.getElementById('terminal'));
        fitAddon.fit();
        prompt();
    }

    const attachXtermKeyHandler = () => {
        disposable.current?.dispose();
        disposable.current = term.current?.onData(handleInput)
    }

    useEffect(() => {
        if (!term.current) {
            initializeXTerm();
        }
        attachXtermKeyHandler();
    }, [inputBuffer]);

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
};

export default Console;