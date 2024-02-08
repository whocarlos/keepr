import { Form } from "react-router-dom"
import { NoteTitleInput } from "./NoteTitleInput"
import { NoteContentInput } from "./NoteContentInput"
import { NoteSettings } from "./NoteSettings"
import { useState } from "react"
import { NoteListInput } from "./NoteListInput" 

export function CreateNoteForm({ forwardedRef, handleSubmit, formRef }) {
    const [isListInput, setIsListInput] = useState(false);

    console.log(forwardedRef.current, 'hereeuu');

    return (
        <div className="form-container">
            <Form method="post" action="/" ref={formRef} onSubmit={handleSubmit}>  
                <NoteTitleInput /> 
                {
                    isListInput ? <NoteListInput contentRef={forwardedRef}/> : <NoteContentInput forwardedRef={forwardedRef} />
                }
                <NoteSettings 
                setIsListInput={setIsListInput} 
                isListInput={isListInput}/>
            </Form> 
        </div>
    );
}
