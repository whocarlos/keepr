import { useEffect, useRef, useState } from 'react';


export function NoteTextInput() {


    function generateNewLine(listInfo, lenLeadingWhiteSpace) {
        let div = document.createElement('div');
        div.classList.add('editor-child')
        let content;
        if (listInfo.isList === true) {
    
            let whiteSpace = '';
            for (let i = 0; i < lenLeadingWhiteSpace; i++) {
                whiteSpace += '\u00A0';
            }
    
            if (listInfo.listType === 'UL') {
                content = document.createTextNode(`${whiteSpace}-` + '\u00A0')
            }
        } else {
            content = document.createElement('br');
        }
    
        div.appendChild(content);
    
        return div;
    }

    function focusCaretOnNewLine(newLine, lenLeadingWhiteSpace) {
        const selection = window.getSelection();
        const newRange = document.createRange();
        newRange.setStart(newLine, 1);
        newRange.collapse(true);
        selection.removeAllRanges();
        selection.addRange(newRange);
    }

    function handleKeyUp(e) {
    if (e.code === 'Enter') {

        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        let currLine = range.startContainer;
        let parent = currLine.parentElement;
        //console.log(parent.lastChild);

        //console.log(currLine);

        let currLineText = currLine.wholeText;

        if (currLineText === undefined) {
            currLineText = '';
        }


        const listInfo = checkForList(currLineText);
        const lenLeadingWhiteSpace = currLineText.length - currLineText.trimStart().length;
        const newLine = generateNewLine(listInfo, lenLeadingWhiteSpace);

        console.log(parent, currLine);

        // This works when the editor is empty and the user just presses enter
        if (currLine.id === 'editor') {
            console.log('busted');
            let div = document.createElement('div');
            div.classList.add('editor-child')
            let br = document.createElement('br');
            div.appendChild(br);

            let fLine = currLine.appendChild(div);

            let newDiv = document.createElement('div');
            newDiv.classList.add('editor-child')
            let newBr = document.createElement('br');
            newDiv.appendChild(newBr);

            let newerLine = fLine.insertAdjacentElement('afterend', newDiv);
            console.log(newerLine);
            focusCaretOnNewLine(newerLine, 0);
            return
        }

        // This works when editor is empty and the user types something
        if (parent.id === 'editor') {
            if (parent.childElementCount === 0) {
                console.log('yooooo');
                let div = document.createElement('div');
                let content = document.createTextNode(currLineText);
                div.appendChild(content);
                console.log(parent.contains(currLine));
                parent.replaceChild(div, currLine);

                div.insertAdjacentElement('afterend', newLine)
                return;
            }

            console.log('alteast 1 ', currLine);
            currLine.insertAdjacentElement('afterend', newLine);

        }

        console.log('outS');


        focusCaretOnNewLine(newLine, lenLeadingWhiteSpace);
    }
}
    return (
        <div contentEditable='true'
            onKeyUp={handleKeyUp}
        ></div>
    )
}