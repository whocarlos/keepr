import { useState } from 'react';
export function NoteTextInput() {

    const [noteContent, setNoteContent] = useState('');

    function handleInput(e){
        console.log('this ran?');
        
    }

    function checkForList(){
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const line = range.startContainer.textContent.trim();

        // Check for Ul
        if(line[0] === '-'){
            if(line[1] === ' ' && line[2] !== undefined){
                console.log('ul mfer');
                const referenceElem = range.startContainer.parentElement;
                const referenceElemText = range.startContainer.parentElement.textContent;

                referenceElem.outerHTML = `<ul><li>${referenceElemText}</li></ul>`;
                
                // newListElem.innerText = referenceElemCopy;

                // const newnew = document.createElement('li');
                // ul.appendChild(newnew);
                //console.log('ul')
                
                

               // referenceElem.append(ul);
            }
        }   

        
        //console.log('the line: ' ,line);
    }

    function handleKeyDown(e){
        if(e.key === 'Enter'){
            //console.log(selection);
            //let {anchorNode, focusNode} = selection;
            //console.log(anchorNode.parentElement, focusNode.parentElement);
            checkForList();

        }
    }

    return (
        <div contentEditable='true'
            suppressContentEditableWarning='true'
            className='text-input'
            placeholder="Add a note..."
            onInput={handleInput}
            onKeyDown={(e) => handleKeyDown(e)}
        >
        </div>
    )
}