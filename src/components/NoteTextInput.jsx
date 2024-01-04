import TextareaAutosize from 'react-textarea-autosize';
import { useState } from 'react';
export function NoteTextInput() {

    const [noteContent, setNoteContent] = useState('');

    function handleInput(e){
        let {innerHTML} = e.target;
        setNoteContent(innerHTML);
        console.log('sup',noteContent);
    }

    return (
        <div contentEditable='true'  
        suppressContentEditableWarning='true' 
        className='text-input' 
        onInput={(e) => handleInput(e)}>
            sup
        </div>
    )
}