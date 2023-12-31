import TextareaAutosize from 'react-textarea-autosize';
import { useState } from 'react';
export function NoteTextInput() {
    const [noteContent, setNoteContent] = useState('');

    function handleChange(e){
        // let valueArr = e.target.value.split('\n');
        // console.log(valueArr);
        //console.log(e)
        setNoteContent(e.target.value);
    }

    return (
        <TextareaAutosize className='textarea-input'
            value={noteContent}
            onChange={(e) => handleChange(e)}
            onBeforeInput={(e) => console.log(e)}/>
    )
}