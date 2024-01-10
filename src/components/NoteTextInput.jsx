import { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export function NoteTextInput() {

    const [noteContent, setNoteContent] = useState('');
    
  

    return (
        <ReactQuill placeholder='Add a note...'  formats={['list']}/>
    );
}