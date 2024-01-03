import TextareaAutosize from 'react-textarea-autosize';
import { useState } from 'react';
export function NoteTextInput() {
    const [noteContent, setNoteContent] = useState('');

    function checkForList(noteContent, currDOMValue) {
        let noteContentArr = noteContent.split('\n');
        console.log('value on line break: ', noteContentArr);


        let lastLine = noteContentArr[noteContentArr.length - 1].trim();

        // Check for list that starts with -
        if (lastLine[0] === '-') {
            if (lastLine[1] === ' ' && lastLine[2] !== undefined) {
                //console.log('you have an unordered list - ');
                return {
                    isList: true,
                    listType: 'UNORDERED',
                    lastNum: -1
                };
            }
        }

        // Check for list that starts with a number
        if (/\d/.test(lastLine[0]) === true) {
            //console.log('number found: ', lastLine[0])
            let dotIndex = lastLine.indexOf('.');
            //console.log('num found, the do is at ', dotPosition)

            if (dotIndex !== -1 && lastLine[dotIndex + 1] === ' ' && lastLine[dotIndex + 2] !== undefined) {
                console.log('I think i have a list num');
                let num = parseInt(lastLine.substring(0, dotIndex));
                return {
                    isList: true,
                    listType: 'ORDERED',
                    lastNum: num
                };
            }
        }

        // return when no list found

        return {
            isList: false,
            listType: 'NO_LIST',
            lastNum: -1
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
        //console.log(noteContent, 'this is noteContent');
        //console.log(e.target.value, 'this is the DOM value');

        let currDOMValue = e.target.value;
        let inputType = e.nativeEvent.inputType;

        if (inputType === 'insertLineBreak') {
            let { isList,
                listType,
                lastNum
            } = checkForList(noteContent, currDOMValue);

            console.log('list info, ', isList, listType, lastNum);

            let newLine = '';

            if (isList === true) {
                newLine = getNewListLine(listType, lastNum);
                let valueArr = noteContent.split('\n');
                valueArr.push(newLine);
                let newValue = valueArr.join('\n');
                setNoteContent(newValue)
            }else{
                setNoteContent(e.target.value);
            }





        } else {
            //console.log(e.target.value, 'dom value down here');
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