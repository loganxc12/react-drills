import React from 'react';

export default function TextBox(props) {
    return (
        <div style={{ textAlign: "center"}}>
            <input 
                value={props.input}
                onChange={e => props.updateTextBox(e.target.value)}
            >
            </input>
            <p>{props.input}</p>
        </div>
    )
}