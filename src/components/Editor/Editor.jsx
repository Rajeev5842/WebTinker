import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { FiMinimize2 as MinimizeIcon , FiMaximize2 as MaximiseIcon } from "react-icons/fi";
import { Controlled as ControlledEditor } from 'react-codemirror2';
import './Editor.css';

const Editor = ({ displayName, language, value, onChange }) => {
    const [open, setOpen] = useState(true)
    const handleChange = (editor, data, value) => {
        onChange(value);
    }
    return (
        <div className={`editor-container ${open ? "" : "collapsed"}`}>
            <div className='editor-title'>
                {displayName}
                <button onClick={() => setOpen(prev => !prev)}>
                    {
                        open ? <MinimizeIcon/> :<MaximiseIcon/>
                    }
                </button>
            </div>
            <ControlledEditor
                //
                onBeforeChange={handleChange}
                value={value}
                className='code-mirror-wrapper'
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    lineNumbers: true,
                    theme: 'material',
                }}
            />

        </div>
    )
}

export default Editor
