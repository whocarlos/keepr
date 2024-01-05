import TextareaAutosize from 'react-textarea-autosize';
import { useState } from 'react';
export function NoteTextInput() {

    const [noteContent, setNoteContent] = useState('');

    function handleKeyDown(e){
        if(e.key === 'Enter'){
            const selection = window.getSelection();
            //console.log(selection);
            //let {anchorNode, focusNode} = selection;
            //console.log(anchorNode.parentElement, focusNode.parentElement);

            const range = selection.getRangeAt(0);
            const line = range.startContainer.parentElement;
            console.log(line);
        }
    }

    return (
        <div contentEditable='true'
            suppressContentEditableWarning='true'
            className='text-input'
            placeholder="Add a note..."
            onKeyDown={(e) => handleKeyDown(e)}
        >
        </div>
    )
}