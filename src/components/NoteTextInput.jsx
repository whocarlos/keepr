import { useEffect, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export function NoteTextInput() {
    const quillRef = useRef(null);
    useEffect(() => {
        if (quillRef.current) {
            //console.log('mounted', quillRef.current.getEditor());
            const quill = quillRef.current.getEditor();
            //console.log(quill.container);

            // quill.container.addEventListener('input', () => {
            //     const listElements = quill.container.querySelectorAll('ol');
            //     console.log(listElements);
            //     if (listElements.length > 0) {
            //         console.log('new list created');
            //     }
            // });

            function handleKeyDown(e) {
                
                    const selection = window.getSelection();
                    //console.log(selection);
                    //let {anchorNode, focusNode} = selection;
                    //console.log(anchorNode.parentElement, focusNode.parentElement);

                    const range = selection.getRangeAt(0);
                    const line = range.startContainer;
                    console.log(line);
                




            }

            quill.container.addEventListener('input', handleKeyDown);

        }
    }, []);



    return (
        <ReactQuill placeholder='Add a note...' formats={['list']} ref={quillRef} />
    );
}