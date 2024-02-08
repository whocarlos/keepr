import { Form } from "react-router-dom"
import { NoteTitleInput } from "./NoteTitleInput"
import { NoteContentInput } from "./NoteContentInput"
import { NoteSettings } from "./NoteSettings"
import { useState } from "react"
import { NoteListInput } from "./NoteListInput" 

export function CreateNoteForm({ forwardedRef, handleSubmit, formRef }) {
    const [isListInput, setIsListInput] = useState(false);
    const [bg, setBg] = useState('#202124');

    //console.log(forwardedRef.current, 'hereeuu');

    function handleChange(e){
        //console.log(e.target.value, 'something changed?');
        setBg(e.target.value)
    }
    return (
        <div className="form-container" style={{background: bg}}>
            <Form method="post" action="/" ref={formRef} onSubmit={handleSubmit} onChange={handleChange}>  
                <NoteTitleInput /> 
                <NoteContentInput forwardedRef={forwardedRef} />
                <NoteSettings setBg={setBg}/>
            </Form> 
        </div>
    );
}
