import { useEffect, useRef, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export function NoteTextInput() {
    const quillRef = useRef(null);
    useEffect(() => {
        if (quillRef.current) {
            //console.log('mounted', quillRef.current.getEditor());
            const quillEditor = quillRef.current.getEditor();
            quillEditor.on('text-change', function (delta, oldDelta, source) {


                //console.log(content);
                //console.log(delta, oldDelta);
                const ops = delta.ops;
                //console.log(ops);


                for (let i = 0; i < ops.length; i++) {
                    if (ops[i].attributes && ops[i].attributes.list === 'ordered') {
                        // console.log('list ol created');
                        const currContent = quillEditor.getContents();
                        console.log(currContent);
                    }
                }
            })
        }

    }, []);



    return (
        <ReactQuill placeholder='Add a note...' formats={['list']} ref={quillRef} />
    );
}