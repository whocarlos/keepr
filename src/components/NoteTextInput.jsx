import TextareaAutosize from 'react-textarea-autosize';
import { useState } from 'react';
export function NoteTextInput() {

    const [noteContent, setNoteContent] = useState('');

    return (
        <div contentEditable='true'>
            sup
        </div>
    )
}