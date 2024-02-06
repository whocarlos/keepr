import { Form } from "react-router-dom"
import { NoteTitleInput } from "./NoteTitleInput"
import { NoteContentInput } from "./NoteContentInput"
import { NoteSettings } from "./NoteSettings"
export function CreateNoteForm({ forwardedRef, handleSubmit, formRef }) {
    return (
        <div className="form-container">
            <Form method="post" action="/" ref={formRef} onSubmit={handleSubmit}>  
                <NoteTitleInput /> 
                <NoteContentInput forwardedRef={forwardedRef} />
                <NoteSettings />
            </Form> 
        </div>
    );
}
