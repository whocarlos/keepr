import TextareaAutosize from 'react-textarea-autosize';
import { useState } from 'react';
export function NoteTextInput() {

    const [noteContent, setNoteContent] = useState('');

    function createNewDiv(parent) {
        const newDiv = document.createElement("div");
        const newContent = document.createTextNode('sup line');
        newDiv.appendChild(newContent);
        newDiv.classList.add('newline');
        parent.appendChild(newDiv);

    }

    function handleInput(e) {
        //console.log(e)
        //e.preventDefault();
        let { inputType } = e.nativeEvent;
        console.log(inputType);

        let { innerHTML } = e.target;
        console.log(innerHTML)

        let parent = e.target;
        if (inputType === 'insertParagraph') {
            console.log('this ran?')
            //createNewDiv(parent);
        }


        setNoteContent(innerHTML);


        //console.log('sup',noteContent);
    }

    return (
        <div contentEditable='true'
            suppressContentEditableWarning='true'
            className='text-input'
            onInput={(e) => handleInput(e)}
            placeholder="Add a note..."
        >
        </div>
    )
}