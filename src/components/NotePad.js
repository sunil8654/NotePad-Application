import React, { useState, useRef } from 'react';
import './NotePad.css';

const NotePad = () => {
  const [note, setNote] = useState('');
  const textAreaRef = useRef(null);

  const handleNoteChange = () => {
    setNote(textAreaRef.current.innerHTML.trim());
  };

  const applyStyle = (style) => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    Object.assign(span.style, style);
    range.surroundContents(span);
    handleNoteChange();
  };

  const handleBold = () => {
    applyStyle({ fontWeight: 'bold' });
  };

  const handleItalic = () => {
    applyStyle({ fontStyle: 'italic' });
  };

  const handleColorChange = (e) => {
    applyStyle({ color: e.target.value });
  };

  const handleSaveFile = () => {
    const blob = new Blob([note.trim()], { type: 'text/plain;charset=utf-8' });
    const a = Object.assign(document.createElement('a'), {
      href: URL.createObjectURL(blob),
      download: 'note.txt'
    });
    a.click();
    URL.revokeObjectURL(a.href);
  };
  

  return (
    <div className="notepad-container">
      <div className="toolbar">
        <button onClick={handleBold}><b>B</b></button>
        <button onClick={handleItalic}><i>I</i></button>
        <input type="color" onChange={handleColorChange} />
        <button onClick={handleSaveFile}>Save</button>
      </div>

      <div className="notepad">
        <div
          className="editor"
          contentEditable
          ref={textAreaRef}
          onInput={handleNoteChange}
        />
      </div>
    </div>
  );
};

export default NotePad;
