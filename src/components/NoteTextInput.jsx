import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export function NoteTextInput() {

    const [noteContent, setNoteContent] = useState('');
    const quillModules = {
        toolbar: false
    }

    return(
        <ReactQuill  />
    );
}