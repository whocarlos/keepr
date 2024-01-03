import TextareaAutosize from 'react-textarea-autosize';
import { useState } from 'react';
export function NoteTextInput() {

    const [noteContent, setNoteContent] = useState('');
    const [prevContent, setPrevContent] = useState('');

    function checkForList(noteContent, prevContent) {
        let noteContentArr = noteContent.split('\n');
        let prevContentArr = prevContent.split('\n');

        console.log('curr', noteContentArr);
        console.log('prev', prevContentArr);

        let largestLen = noteContentArr.length > prevContentArr.length
            ? noteContentArr.length : prevContentArr.length;


        // Detect at wich line the edit ocurred
        // Works for now but probably will have bugs
        let index = -1;
        for (let i = 0; i < largestLen; i++) {
            if (noteContentArr[i] !== prevContentArr[i]) {
                index = i;
                break;
            }
        }

        if(index >= noteContentArr.length){
            index = noteContentArr.length -1;
        }

        console.log('last edited line? ', index +1);

    
        let lastEditedLine = noteContentArr[index].trim();
        //console.log(lastEditedLine, 'the line you just changed');

        // let lastLine = noteContentArr[noteContentArr.length - 1].trim();

        // Check for list that starts with -
        if (lastEditedLine[0] === '-') {
            if (lastEditedLine[1] === ' ' && lastEditedLine[2] !== undefined) {
                //console.log('you have an unordered list - ');
                return {
                    isList: true,
                    listType: 'UNORDERED',
                    lastNum: -1,
                    linePosition: index
                };
            }
        }

        // Check for list that starts with a number
        if (/\d/.test(lastEditedLine[0]) === true) {
            //console.log('number found: ', lastLine[0])
            let dotIndex = lastEditedLine.indexOf('.');
            //console.log('num found, the do is at ', dotPosition)

            if (dotIndex !== -1 && lastEditedLine[dotIndex + 1] === ' ' && lastEditedLine[dotIndex + 2] !== undefined) {
                console.log('I think i have a list num');
                let num = parseInt(lastEditedLine.substring(0, dotIndex));
                return {
                    isList: true,
                    listType: 'ORDERED',
                    lastNum: num,
                    linePosition: index
                };
            }
        }

        // return when no list found

        return {
            isList: false,
            listType: 'NO_LIST',
            lastNum: -1,
            linePosition: index
        }


    }

    function getNewListLine(listType, lastNum) {
        let lastLine = noteContent.split('\n').slice(-1)[0];
        let lastLineTrimmedLeft = lastLine.trimStart();
        let numOfWSpaces = lastLine.length - lastLineTrimmedLeft.length;
        //console.log(lastLine, 'last one from insert');

        console.log('n of white spaces: ', numOfWSpaces);
        let wSpaces = '';
        if (numOfWSpaces > 0) {
            for (let i = 0; i < numOfWSpaces; i++) {
                wSpaces += ' ';
            }
        }




        let newLine;

        if (listType === 'ORDERED') {
            newLine = `${wSpaces}${lastNum + 1}. `;
        } else {
            newLine = `${wSpaces}- `;
        }

        return newLine;


    }
    function handleChange(e) {


        let inputType = e.nativeEvent.inputType;

        if (inputType === 'insertLineBreak') {
            let { isList,
                listType,
                lastNum,
                linePosition } = checkForList(noteContent, prevContent);

            console.log('list info, ', isList, listType, lastNum);

            let newLine = '';

            if (isList === true) {
                newLine = getNewListLine(listType, lastNum);
                let valueArr = noteContent.split('\n');
                valueArr[linePosition+1] = newLine;
                let newValue = valueArr.join('\n');
                setPrevContent(noteContent);
                setNoteContent(newValue)
            } else {
                setPrevContent(noteContent);
                setNoteContent(e.target.value);
            }





        } else {
            //console.log(e.target.value, 'dom value down here');
            setPrevContent(noteContent);
            setNoteContent(e.target.value);
        }

    }

    return (
        <TextareaAutosize className='textarea-input'
            value={noteContent}
            onChange={(e) => handleChange(e)}

        />
    )
}