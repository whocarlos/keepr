import { useEffect, useRef, useState } from 'react';


export function NoteTextInput() {


    function generateNewLine(listInfo) {
        let div = document.createElement('div');
        let content;
        if (listInfo.listType === 'UL') {
            return 'temp ul';
        } else if (listInfo.listType === 'OL') {
            return 'temp ol';
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


            let currLineText = currLine.wholeText;
            // if(currLine.nodeType === 3){
            //     currLineText = currLine.wholeText;
            // }else{
            //     currLineText = currLine.innerText;
            // }


            const listInfo = checkForList(currLineText);
            //const rangeStartOffset = calculateOffSet(currLineText, listInfo);
            const lenLeadingWhiteSpace = currLineText.length - currLineText.trimStart().length;
            const newLine = generateNewLine(listInfo, lenLeadingWhiteSpace);

            parent.appendChild(newLine);


            focusCaretOnNewLine(newLine, lenLeadingWhiteSpace);

            // If the current line is the last one generate and insert a new one AT THE END
            // if (currLine === parent.lastChild) {
            //     //console.log('last one');
            //     parent.appendChild(newLine);
            // 


        }
    }
    return (
        <div contentEditable='true'
            onKeyUp={handleKeyUp}
        ></div>
    )
}