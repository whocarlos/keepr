import { useEffect, useRef, useState } from 'react';


export function NoteTextInput() {


    const contentEditableRef = useRef(null);

    useEffect(() => {
        const observer = new MutationObserver(mutationHandler);
        observer.observe(contentEditableRef.current, { attributes: true, childList: true, subtree: false });

        return () => {
            observer.disconnect();
        }
    }, []);


    function mutationHandler(mutationList, observer) {
        for (const mutation of mutationList) {
            if (mutation.type === "childList") {

                const removedNode = mutation.removedNodes[0];

                const addedNode = mutation.addedNodes[0];

                console.log(addedNode, removedNode);

                if (removedNode !== undefined) {
                    let { previousSibling } = mutation;
                    let { nextSibling } = mutation;

                    console.log(previousSibling, nextSibling);

                    if (previousSibling !== null && nextSibling !== null) {
                        //console.log('busted?');

                        let prevListInfo = checkForList(previousSibling.innerText);
                        let nextListInfo = checkForList(nextSibling.innerText);

                        if (prevListInfo.listType === 'OL' && nextListInfo.listType === 'OL') {
                            let num = prevListInfo.lastNum;

                            while (true) {
                                let currListInfo = checkForList(nextSibling.innerText);

                                if (currListInfo.listType !== 'OL') {
                                    break;
                                }

                                console.log('this ran');

                                let innerTextTrimmed = nextSibling.innerText.trimStart();
                                let lenWSpace = nextSibling.innerText.length - innerTextTrimmed.length;
                                let match = innerTextTrimmed.match(/\D/);
                                console.log(match);
                                let sub = innerTextTrimmed.substring(match.index);
                                console.log('sub', sub);

                                let wSpace = '';
                                for (let i = 0; i < lenWSpace; i++) {
                                    wSpace += '\u00A0';
                                }

                                num += 1;
                                nextSibling.innerText = `${wSpace}${num}${sub}`;

                                nextSibling = nextSibling.nextSibling;

                                if (nextSibling === null) {
                                    break;
                                }
                            }
                        }
                    }
                }

                if (addedNode !== undefined) {
                    let { nextSibling } = mutation;

                    if (nextSibling === null) {
                        return;
                    }

                    let nextListInfo = checkForList(nextSibling.innerText);
                    let currListInfo = checkForList(addedNode.innerText)

                    console.log(currListInfo, addedNode.innerText);

                    if (nextListInfo.listType === 'OL') {
                        let num = currListInfo.lastNum;
                        console.log('numb', num);

                        while (true) {
                            let currListInfo = checkForList(nextSibling.innerText);

                            if (currListInfo.listType !== 'OL') {
                                break;
                            }

                            console.log('this ran');

                            let innerTextTrimmed = nextSibling.innerText.trimStart();
                            let lenWSpace = nextSibling.innerText.length - innerTextTrimmed.length;
                            let match = innerTextTrimmed.match(/\D/);
                            console.log(match);
                            let sub = innerTextTrimmed.substring(match.index);
                            console.log('sub', sub);

                            let wSpace = '';
                            for (let i = 0; i < lenWSpace; i++) {
                                wSpace += '\u00A0';
                            }

                            num += 1;
                            nextSibling.innerText = `${wSpace}${num}${sub}`;

                            nextSibling = nextSibling.nextSibling;

                            if (nextSibling === null) {
                                break;
                            }
                        }
                    }

                }


            }
        }
    }


    function generateNewLine(listInfo, lenLeadingWhiteSpace) {
        console.log(listInfo);
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
            } else if (listInfo.listType === 'OL') {
                console.log('thissssss');
                content = document.createTextNode(`${whiteSpace}${listInfo.lastNum + 1}${listInfo.separator}` + '\u00A0')
            }
        } else {
            content = document.createElement('br');
        }

        console.log('content is ', content);
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

            console.log(currLine);

            let currLineText = currLine.wholeText;

            if (currLineText === undefined) {
                currLineText = '';
            }


            const listInfo = checkForList(currLineText);
            console.log('list info', listInfo);
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
                    div.classList.add('editor-child')
                    let content = document.createTextNode(currLineText);
                    div.appendChild(content);
                    console.log(parent.contains(currLine));
                    parent.replaceChild(div, currLine);

                    div.insertAdjacentElement('afterend', newLine);
                    focusCaretOnNewLine(newLine, lenLeadingWhiteSpace);
                    return;
                } else {
                    console.log('call it*******');
                    currLine.insertAdjacentElement('afterend', newLine);
                    focusCaretOnNewLine(newLine, 0);
                }



            }

            if (parent.classList.contains('editor-child')) {
                parent.insertAdjacentElement('afterend', newLine);
                focusCaretOnNewLine(newLine, 0);
            }


        }
    }

    function checkForList(inputLine) {

        let listInfo = {
            isList: false,
            listType: 'NO_LIST',
            lastNum: -1
        };

        const line = inputLine.trim();

        // sorry
        const otherLine = inputLine.trimStart();
        console.log(otherLine.length);


        // Check for Ul
        if (line[0] === '-') {
            if ((line[1] === '\u00A0' || line[1] === ' ') && line[2] !== undefined) {
                //console.log('ul mfer');


                listInfo = {
                    isList: true,
                    listType: 'UL',
                    lastNum: -1
                };
            }
        }

        // Check for OL
        // Change len from 4 to 3 - lets test this

        //console.log(otherLine.length, 'rrrrrrrrrrr');
        if (otherLine.length >= 3) {


            //console.log('yooo?');
            // Find position of . or )
            const match = otherLine.match(/\D/);

            //console.log(match, 'here-----');
            if (match !== null) {
                //console.log('hereee');
                if (match[0] === '.' || match[0] === ')') {
                    //console.log(match.index);
                    console.log('eeeere---');
                    // && line[match.index + 2] !== undefined  - Lets test this
                    //console.log(otherLine[match.index + 1] === '\u00A0');
                    if (otherLine[match.index + 1] === '\u00A0' || otherLine[match.index + 1] === ' ') {
                        console.log('ol mfer $$$$$$$$$$$');

                        let lastNum = line.substring(0, match.index);
                        lastNum = parseInt(lastNum);

                        listInfo = {
                            isList: true,
                            listType: 'OL',
                            lastNum: lastNum,
                            separator: match[0]
                        };
                    }
                }
            }
        }

        //console.log('the info ', listInfo);
        return listInfo;
    }

    function handleKeyDown(e) {
        if (e.code === 'Enter') {
            e.preventDefault();
        }
    }


    function handlePaste(e) {
        e.preventDefault();
        //console.log(e.clipboardData.getData('text/plain'), 'yo');

        const plainText = e.clipboardData.getData('text/plain');
        console.log(plainText.split('\n'));
        document.execCommand('insertHTML', false, plainText);

    }
    return (
        <div contentEditable='true'
            onKeyUp={handleKeyUp}
            onKeyDown={handleKeyDown}
            id='editor'
            ref={contentEditableRef}

            onPaste={handlePaste}
        ></div>
    )
}